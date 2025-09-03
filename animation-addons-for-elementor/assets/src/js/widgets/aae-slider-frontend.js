(function ($  ) {
	
  window.addEventListener('elementor/frontend/init', function () {     
      class WCFNestedSliderHandler extends elementorModules.frontend.handlers.Base {
          constructor() {
            super(...arguments);
            if (elementorFrontend.isEditMode()) {
              this.lifecycleChangeListener = null;
            }     
          }           
                        
          onInit() { 

            this.swiper = null;  
            if ( elementorFrontend.isEditMode() ) {          
              setTimeout( () => this.run(), 3000 );              
            } else {      
              this.run();
            }
    

            if(this.isEdit){           
              elementor.channels.editor.on('aae_nsslider:editor:savechnage',(sectionName,view)=>{
                  this.updateSliderOnOptionChange();
                 sectionName.$el.parent().find('.elementor-control-center_slide .elementor-switch-input').trigger('change'); 
                 sectionName.$el.find('button').text('Saving....') 
                 setTimeout(()=>{                  
                    sectionName.$el.find('button').text('Save Change');
                 },500);
              });
            }

            function debounce(func, delay = 1500) {
              let timer;
              return function() {
                clearTimeout(timer);
                timer = setTimeout(() => func.apply(this, arguments), delay);
              };
            }

            // Create observer with debounced callback
            new ResizeObserver(debounce(()=>{
              this.updateSliderOnOptionChange();
            })).observe(document.body);
         
            window.addEventListener( 'elementor/nested-container/atomic-repeater', (e) => {
              const { container, action } = e.detail;   
              const lastIndex = this.swiper.slides.length;         
              if(container.model.config.name === 'wcf--nested-slider' &&  action.type == 'remove'){                    
                this.isActiveSlide( lastIndex );
              }
              if(container.model.config.name === 'wcf--nested-slider' &&  action.type == 'create'){                       
                this.isActiveSlide( lastIndex );
              }
              if(container.model.config.name === 'wcf--nested-slider' &&  action.type == 'duplicate'){                         
                this.isActiveSlide( lastIndex );
              }              
            });
          }

          updateRows() {
            const rows = this.getElementSettings( 'grid_rows' ) || 1;            
            if ( this.swiper && this.swiper.params.grid ) {
              this.swiper.destroy( true, true );
              this.swiper = new Swiper( this.$element.find( '.swiper' )[0], {
                grid: { rows, fill: 'row' },               
              } );         
            }
          } 

          onEditSettingsChange( propertyName, value ) {  
          
            if ( 'activeItemIndex' === propertyName ) {
              this.changeActiveSlide( value, false, propertyName );
            }
          }

          getResponsiveSetting(settings, baseKey) {
            const device = elementorFrontend.getCurrentDeviceMode(); // 'desktop', 'tablet', 'mobile'           
            const deviceKey = device === 'desktop' ? baseKey : `${baseKey}_${device}`;           
            return settings[deviceKey] || settings[baseKey] || null;
          }

          onElementChange(propertyName) {    
          
            if('grid_rows' === propertyName) {
              //this.updateRows();  
            }           
            this.updateSliderOnOptionChange(propertyName);          
        }
       
        updateSliderOnOptionChange(propertyName) {
            const matchPrefix = ['slides_to_show', 'space_between'];
            const allow = ['autoplay', 'autoplay_delay' ,'speed', 'grid_rows', 'loop'];
            const editorSettings = this.getElementSettings();
            const device = elementorFrontend.getCurrentDeviceMode(); // desktop/tablet/mobile    


            async function inlineSvg(imgEl) {
                try {
                  // 1. Download the SVG text
                  const response = await fetch(imgEl, { mode: 'cors' });
                  const svgText  = await response.text();
                  // 2. Convert the text to a real <svg> element
                  const svgNode = new DOMParser()
                    .parseFromString(svgText, 'image/svg+xml')
                    .documentElement;

                  return svgNode; // Return the SVG node for further processing
                  // 3. Replace the <img> with the <svg>

                } catch (e) {
                 return false;
                }
            }
                                      
            if (!this.swiper) return;
            const getResponsiveValue = (key) => {
              const deviceKey = device === 'desktop' ? key : `${key}_${device}`;
              return parseInt(editorSettings[deviceKey] || editorSettings[key]) || 0;
            };
           
            matchPrefix.forEach(key => {
              if (key === 'slides_to_show') {
                this.swiper.params.slidesPerView = getResponsiveValue(key);
              } else if (key === 'space_between') {
                this.swiper.params.spaceBetween = getResponsiveValue(key);
              }
            });
           
            allow.forEach(key => {

              if (key === 'autoplay') {                
                if(editorSettings.autoplay == 'yes'){
                    this.swiper.params.autoplay = {delay : editorSettings['autoplay_delay'], disableOnInteraction: false};
                }else{
                  this.swiper.params.autoplay = false;                 
                }            
              }
              if (key === 'speed') {
                this.swiper.params.speed = editorSettings.speed;
              }

              if (key === 'loop') {
                this.swiper.params.loop = editorSettings.loop=='TRUE' ? true : false;
              } 
          
              if (key === 'grid_rows') {                
                  this.swiper.params.grid = {
                     'rows': editorSettings['grid_rows'] || 1,
                     'fill': 'row'
                  };
              } 

            });
      
            const sliderSettings = this.swiper.params;  
            sliderSettings.handleElementorBreakpoints = true; // Ensure breakpoints are handled correctly
            sliderSettings.breakpoints = {}; // Initialize breakpoints object   
            
            // Set breakpoints for responsive settings
            // pagination start 
            if(editorSettings.pagination && editorSettings.pagination === 'yes') {   
                this.$element.find('.ts-pagination').show(); // Hide the navigation for the nested slider  
                if(propertyName === 'pagination_type' || propertyName === 'pagination') {                                  
                  // Set the pagination type                
                  if(editorSettings?.pagination_type && editorSettings.pagination_type == 'fraction'  ) {    
                      if (sliderSettings.hasOwnProperty('pagination')) { 
                      
                        this.$element.find('.swiper-pagination').html(''); // Show the pagination for the nested slider                          
                          this.$element.find('.swiper-pagination').removeClass('swiper-pagination-bullets'); // Show the pagination for the nested slider               
                          this.$element.find('.swiper-pagination').removeClass('swiper-pagination-progressbar'); // Show the pagination for the nested slider               
                          sliderSettings.pagination.el = $('.swiper-pagination', this.$element)[$('.swiper-pagination', this.$element).length - 1];                                              
                          sliderSettings.pagination.formatFractionCurrent = function (number) {
                              return ('0' + number).slice(-2);
                          }
                          sliderSettings.pagination.formatFractionTotal = function (number) {
                              return ('0' + number).slice(-2);
                          }
                          sliderSettings.pagination.renderFraction = function (currentClass, totalClass) {
                              return '<span class="' + currentClass + '"></span>' +
                                  '<span class="mid-line"></span>' +
                                  '<span class="' + totalClass + '"></span>';
                          }   
                          sliderSettings.pagination.type = 'fraction';                    
                    }                        
                }else if(editorSettings?.pagination_type && editorSettings.pagination_type == 'bullets'  ) {
                          this.$element.find('.swiper-pagination').removeClass('swiper-pagination-fraction'); // Show the pagination for the nested slider               
                          this.$element.find('.swiper-pagination').removeClass('swiper-pagination-progressbar'); // Show the pagination for the nested slider               
                    if (sliderSettings.hasOwnProperty('pagination')) {
                      sliderSettings.pagination.el = $('.swiper-pagination', this.$element)[$('.swiper-pagination', this.$element).length - 1];
                      sliderSettings.pagination.type = 'bullets';
                      sliderSettings.pagination.clickable = true;
                    }
                }else if(editorSettings?.pagination_type && editorSettings.pagination_type == 'progressbar'  ) {
                          this.$element.find('.swiper-pagination').removeClass('swiper-pagination-fraction'); // Show the pagination for the nested slider               
                          this.$element.find('.swiper-pagination').removeClass('swiper-pagination-bullets'); // Show the pagination for the nested slider  
                    if (sliderSettings.hasOwnProperty('pagination')) {
                      sliderSettings.pagination.el = $('.swiper-pagination', this.$element)[$('.swiper-pagination', this.$element).length - 1];
                      sliderSettings.pagination.type = 'progressbar';
                    }
                }


              }
            }else{
              this.$element.find('.ts-navigation').hide(); // Hide the navigation for the nested slider
            }

            // pagination end
          

            // Navigation start
            if(editorSettings.navigation && editorSettings.navigation === 'yes') {

              if(propertyName === 'navigation_previous_icon' || propertyName === 'navigation_next_icon' || propertyName === 'navigation') {
                if(editorSettings?.navigation_previous_icon && editorSettings.navigation_previous_icon.library !== 'svg' && editorSettings.navigation_previous_icon.value !=''){
                  this.$element.find('.wcf-arrow-prev').html(`<i class="${editorSettings.navigation_previous_icon.value}"></i>`);
                }else if(editorSettings?.navigation_previous_icon && editorSettings.navigation_previous_icon.library == 'svg' && editorSettings.navigation_previous_icon.value?.url !=''){
              
                  const iprevsvg = inlineSvg(editorSettings.navigation_previous_icon.value.url);   
                    iprevsvg.then((svgNode) => {
                    this.$element.find('.wcf-arrow-prev').html(svgNode);
                    });
                    
                if(iprevsvg){
                    this.$element.find('.wcf-arrow-prev').html(iprevsvg);
                }              
                }

                if(editorSettings?.navigation_next_icon && editorSettings.navigation_next_icon.library !== 'svg' && editorSettings.navigation_next_icon.value !=''){
                  this.$element.find('.wcf-arrow-next').html(`<i class="${editorSettings.navigation_next_icon.value}"></i>`);
                }else if(editorSettings?.navigation_next_icon && editorSettings.navigation_next_icon.library == 'svg' && editorSettings.navigation_next_icon.value?.url !=''){
                const inextsvg = inlineSvg(editorSettings.navigation_next_icon.value.url);
                  inextsvg.then((svgNode) => {
                    this.$element.find('.wcf-arrow-next').html(svgNode);
                    });             
                }
              }
              this.$element.find('.ts-navigation').show(); // Hide the navigation for the nested slider
            }else{
              this.$element.find('.ts-navigation').hide(); // Hide the navigation for the nested slider
            }
            // Navigation end           
            if ( this.swiper ) this.swiper.destroy( true, true );
            this.swiper = new Swiper( this.$element.find( '.swiper' )[0], sliderSettings );

          }

          /**
           * @param {string}  SlideIndex
           * @param {boolean} fromUser - Whether the call is caused by the user or internal.
           */
          changeActiveSlide( slideIndex, fromUser = false, propertyName ) {
              if ( fromUser && this.isEdit && this.isElementInTheCurrentDocument() ) {
                return window.top.$e.run( 'document/repeater/select', {
                  container: elementor.getContainer( this.$element.attr( 'data-id' ) ),
                  index: parseInt( slideIndex),
                } );
              }           
             this.isActiveSlide( slideIndex );
          
          }
        
          isActiveSlide( Index ) { 

             if( !this.swiper ){
                return;
             }
            
             this.swiper.initialized = false;               
             this.swiper.init();     
                             
             this.swiper.loopDestroy();
             // 2️⃣ Flip the loop flag so future updates respect it
             this.swiper.params.loop = false;
             this.swiper.slideTo(Index-1);  
             // 3️⃣ Rebuild/update the layout
             this.swiper.update();                          
             
          }
        
          run() {
              const thisModule = this;         
              const { slider, options, slider_exist } = thisModule.getSliderOptions(thisModule.$element);  
                     
              if (slider_exist) {
                const nestedSlider = new elementorFrontend.utils.swiper(
                  slider,
                  options
                ).then((newSwiperInstance) => {  
                  return newSwiperInstance;
                });
                nestedSlider.then((newSwiperInstance) => {
                  this.swiper = newSwiperInstance;                  
                });
              }
          }
          getSliderOptions($scope){
            const slider = $($(".wcf__slider", $scope)[0]);
            const slexist = $scope.find(".wcf__slider").length;
            const sliderSettings = $($(".wcf__slider-wrapper, .wcf__t_slider-wrapper", $scope)[0]).data( "settings" ) || {};
           
            sliderSettings.handleElementorBreakpoints = true;        
            //navigation
            if (sliderSettings.hasOwnProperty("navigation")) {
              const next = $(".wcf-arrow-next", $scope)[
                $(".wcf-arrow-next", $scope).length - 1
              ];
              const prev = $(".wcf-arrow-prev", $scope)[
                $(".wcf-arrow-prev", $scope).length - 1
              ];
              sliderSettings.navigation.nextEl = next;
              sliderSettings.navigation.prevEl = prev;
            }
        
            //pagination fractions
            if (sliderSettings.hasOwnProperty("pagination")) {
              sliderSettings.pagination.el = $(".swiper-pagination", $scope)[ $(".swiper-pagination", $scope).length - 1 ];        
              if (
                sliderSettings.pagination.hasOwnProperty("type") &&
                "fraction" === sliderSettings.pagination.type
              ) {
                sliderSettings.pagination.formatFractionCurrent = function (number) {
                  return ("0" + number).slice(-2);
                };
                sliderSettings.pagination.formatFractionTotal = function (number) {
                  return ("0" + number).slice(-2);
                };
                sliderSettings.pagination.renderFraction = function (
                  currentClass,
                  totalClass
                ) {
                  return (
                    '<span class="' +
                    currentClass +
                    '"></span>' +
                    '<span class="mid-line"></span>' +
                    '<span class="' +
                    totalClass +
                    '"></span>'
                  );
                };
              }
            }
            
            //remove the attribute after getting the slider settings
            $($(".wcf__slider-wrapper", $scope)[0]).removeAttr("data-settings");            
            return { slider: slider, options: sliderSettings, slider_exist: slexist };
          }             
      }                 
   
      const widgets = [
          'wcf--nested-slider.default',         
      ];
      
      widgets.forEach(widgetName => {
          elementorFrontend.hooks.addAction(
              `frontend/element_ready/${widgetName}`,
              ($element) => {
              elementorFrontend.elementsHandler.addHandler(
                WCFNestedSliderHandler,
                  { $element }
              );
              }
          );
      });
         
  });

})(jQuery);
