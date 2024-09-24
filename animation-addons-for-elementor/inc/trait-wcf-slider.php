<?php

namespace WCF_ADDONS;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Background;
use Elementor\Group_Control_Border;
use Elementor\Icons_Manager;
use Elementor\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly

trait WCF_Slider_Trait {

	/**
	 * Register the slider controls.
	 *
	 * Adds different input fields to allow the user to change and customize the widget settings.
	 *
	 * @since 1.0.0
	 *
	 * @access protected
	 */
	protected function register_slider_controls( $default_value = [] ) {
		$default = [
			'slides_to_show'       => 'auto',
			'autoplay'             => 'yes',
			'autoplay_delay'       => 3000,
			'autoplay_interaction' => 'true',
			'allow_touch_move'     => 'false',
			'loop'                 => 'true',
			'mousewheel'           => '',
			'speed'                => 500,
			'space_between'        => 20,
			//navigation
			'navigation'           => 'yes',
			//pagination
			'pagination'           => 'yes',
			'pagination_type'      => 'bullets',
			'direction'            => 'ltr',
		];

		$default = array_merge(  $default, $default_value );

		$slides_to_show = range( 1, 10 );
		$slides_to_show = array_combine( $slides_to_show, $slides_to_show );

		$this->add_responsive_control(
			'slides_to_show',
			[
				'label'       => esc_html__( 'Slides to Show', 'animation-addons-for-elementor' ),
				'type'        => Controls_Manager::SELECT,
				'default'     => $default['slides_to_show'],
				'required'    => true,
				'options'     => [
					                 'auto' => esc_html__( 'Auto', 'animation-addons-for-elementor' ),
				                 ] + $slides_to_show,
				'render_type' => 'template',
				'selectors'   => [
					'{{WRAPPER}} .wcf__slider' => '--slides-to-show: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'autoplay',
			[
				'label'   => esc_html__( 'Autoplay', 'animation-addons-for-elementor' ),
				'type'    => Controls_Manager::SELECT,
				'default' => $default['autoplay'],
				'options' => [
					'yes' => esc_html__( 'Yes', 'animation-addons-for-elementor' ),
					'no'  => esc_html__( 'No', 'animation-addons-for-elementor' ),
				],
			]
		);

		$this->add_control(
			'autoplay_delay',
			[
				'label'     => esc_html__( 'Autoplay delay', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::NUMBER,
				'default'   => $default['autoplay_delay'],
				'condition' => [
					'autoplay' => 'yes',
				],
			]
		);

		$this->add_control(
			'autoplay_interaction',
			[
				'label'     => esc_html__( 'Autoplay Interaction', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::SELECT,
				'default'   => $default['autoplay_interaction'],
				'options'   => [
					'true'  => esc_html__( 'Yes', 'animation-addons-for-elementor' ),
					'false' => esc_html__( 'No', 'animation-addons-for-elementor' ),
				],
				'condition' => [
					'autoplay' => 'yes',
				],
			]
		);

		$this->add_control(
			'allow_touch_move',
			[
				'label'     => esc_html__( 'Allow Touch Move', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::SELECT,
				'separator' => 'before',
				'default'   => $default['allow_touch_move'],
				'options'   => [
					'true'  => esc_html__( 'Yes', 'animation-addons-for-elementor' ),
					'false' => esc_html__( 'No', 'animation-addons-for-elementor' ),
				],
			]
		);

		// Loop requires a re-render so no 'render_type = none'
		$this->add_control(
			'loop',
			[
				'label'   => esc_html__( 'Loop', 'animation-addons-for-elementor' ),
				'type'    => Controls_Manager::SELECT,
				'default' => $default['loop'],
				'options' => [
					'true'  => esc_html__( 'Yes', 'animation-addons-for-elementor' ),
					'false' => esc_html__( 'No', 'animation-addons-for-elementor' ),
				],
			]
		);

		$this->add_control(
			'mousewheel',
			[
				'label'       => esc_html__( 'Mousewheel', 'animation-addons-for-elementor' ),
				'description' => esc_html__( 'If you want to use mousewheel, please disable loop.', 'animation-addons-for-elementor' ),
				'type'        => Controls_Manager::SWITCHER,
				'label_on'    => esc_html__( 'Show', 'animation-addons-for-elementor' ),
				'label_off'   => esc_html__( 'Hide', 'animation-addons-for-elementor' ),
				'default'     => $default['mousewheel'],
			]
		);

		$this->add_control(
			'speed',
			[
				'label'   => esc_html__( 'Animation Speed', 'animation-addons-for-elementor' ),
				'type'    => Controls_Manager::NUMBER,
				'default' => $default['speed'],
			]
		);

		$this->add_responsive_control(
			'space_between',
			[
				'label'       => esc_html__( 'Space Between', 'animation-addons-for-elementor' ),
				'type'        => Controls_Manager::NUMBER,
				'default'     => $default['space_between'],
				'render_type' => 'template',
				'selectors'   => [
					'{{WRAPPER}} .wcf__slider' => '--space-between: {{VALUE}}px;',
				],
			]
		);

		//slider navigation
		$this->add_control(
			'navigation',
			[
				'label'     => esc_html__( 'Navigation', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::SWITCHER,
				'separator' => 'before',
				'label_on'  => esc_html__( 'Show', 'animation-addons-for-elementor' ),
				'label_off' => esc_html__( 'Hide', 'animation-addons-for-elementor' ),
				'default'   => $default['navigation'],
			]
		);

		$this->add_control(
			'navigation_previous_icon',
			[
				'label'            => esc_html__( 'Previous Arrow Icon', 'animation-addons-for-elementor' ),
				'type'             => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'skin'             => 'inline',
				'label_block'      => false,
				'skin_settings'    => [
					'inline' => [
						'none' => [
							'label' => 'Default',
							'icon'  => 'eicon-chevron-left',
						],
						'icon' => [
							'icon' => 'eicon-star',
						],
					],
				],
				'recommended'      => [
					'fa-regular' => [
						'arrow-alt-circle-left',
						'caret-square-left',
					],
					'fa-solid'   => [
						'angle-double-left',
						'angle-left',
						'arrow-alt-circle-left',
						'arrow-circle-left',
						'arrow-left',
						'caret-left',
						'caret-square-left',
						'chevron-circle-left',
						'chevron-left',
						'long-arrow-alt-left',
					],
				],
				'condition'        => [ 'navigation' => 'yes' ],
			]
		);

		$this->add_control(
			'navigation_next_icon',
			[
				'label'            => esc_html__( 'Next Arrow Icon', 'animation-addons-for-elementor' ),
				'type'             => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'skin'             => 'inline',
				'label_block'      => false,
				'skin_settings'    => [
					'inline' => [
						'none' => [
							'label' => 'Default',
							'icon'  => 'eicon-chevron-right',
						],
						'icon' => [
							'icon' => 'eicon-star',
						],
					],
				],
				'recommended'      => [
					'fa-regular' => [
						'arrow-alt-circle-right',
						'caret-square-right',
					],
					'fa-solid'   => [
						'angle-double-right',
						'angle-right',
						'arrow-alt-circle-right',
						'arrow-circle-right',
						'arrow-right',
						'caret-right',
						'caret-square-right',
						'chevron-circle-right',
						'chevron-right',
						'long-arrow-alt-right',
					],
				],
				'condition'        => [ 'navigation' => 'yes' ],
			]
		);

		//slider pagination
		$this->add_control(
			'pagination',
			[
				'label'     => esc_html__( 'Pagination', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::SWITCHER,
				'separator' => 'before',
				'label_on'  => esc_html__( 'Show', 'animation-addons-for-elementor' ),
				'label_off' => esc_html__( 'Hide', 'animation-addons-for-elementor' ),
				'default'   => $default['navigation'],
			]
		);

		$this->add_control(
			'pagination_type',
			[
				'label'     => esc_html__( 'Pagination Type', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::SELECT,
				'default'   => $default['pagination_type'],
				'options'   => [
					'bullets'     => esc_html__( 'Bullets', 'animation-addons-for-elementor' ),
					'fraction'    => esc_html__( 'Fraction', 'animation-addons-for-elementor' ),
					'progressbar' => esc_html__( 'Progressbar', 'animation-addons-for-elementor' ),
				],
				'condition' => [ 'pagination' => 'yes' ]
			]
		);

		$this->add_control(
			'direction',
			[
				'label'     => esc_html__( 'Left/Right Direction', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::SELECT,
				'separator' => 'before',
				'default'   => $default['direction'],
				'options'   => [
					'ltr' => esc_html__( 'Left', 'animation-addons-for-elementor' ),
					'rtl' => esc_html__( 'Right', 'animation-addons-for-elementor' ),
				],
			]
		);
	}

	/**
	 * Register the slider navigation style controls.
	 *
	 * Adds different input fields to allow the user to change and customize the widget settings.
	 *
	 * @since 1.0.0
	 *
	 * @access private
	 */
	protected function register_slider_navigation_style_controls( $default_selectors = [] ) {
		$selectors = [
			'arrow_size'              => [ '{{WRAPPER}} .wcf-arrow' => 'font-size: {{SIZE}}{{UNIT}};' ],
			'arrow_padding'           => [ '{{WRAPPER}} .wcf-arrow' => 'padding: {{SIZE}}{{UNIT}};' ],
			'arrow_color'             => [ '{{WRAPPER}} .wcf-arrow' => 'color: {{VALUE}}; fill: {{VALUE}};' ],
			'arrow_background'         => '{{WRAPPER}} .wcf-arrow',
			'arrow_hover_color'       => [ '{{WRAPPER}} .wcf-arrow:hover, {{WRAPPER}} .wcf-arrow:focus' => 'color: {{VALUE}}; fill: {{VALUE}};' ],
			'arrow_hover_background'         => '{{WRAPPER}} .wcf-arrow:hover, {{WRAPPER}} .wcf-arrow:focus',
			'arrow_hover_border_color' => [ '{{WRAPPER}} .wcf-arrow:hover, {{WRAPPER}} .wcf-arrow:focus' => 'border-color: {{VALUE}};' ],
			'arrow_border'             => '{{WRAPPER}} .wcf-arrow',
			'arrow_border_radius'      => [ '{{WRAPPER}} .wcf-arrow' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};' ],
		];

		$selectors = array_merge( $selectors, $default_selectors );

		$this->add_control(
			'arrow_size',
			[
				'label'     => esc_html__( 'Size', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::SLIDER,
				'range'     => [
					'px' => [
						'min' => 5,
						'max' => 100,
					],
				],
				'selectors' => $selectors['arrow_size'],
			]
		);

		$this->add_control(
			'arrow_padding',
			[
				'label'     => esc_html__( 'padding', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::SLIDER,
				'range'     => [
					'px' => [
						'min' => 0,
						'max' => 200,
					],
				],
				'selectors' => $selectors['arrow_padding'],
			]
		);

		$this->start_controls_tabs( 'tabs_arrow_style' );

		$this->start_controls_tab(
			'tab_arrow_normal',
			[
				'label' => esc_html__( 'Normal', 'animation-addons-for-elementor' ),
			]
		);

		$this->add_control(
			'arrow_color',
			[
				'label'     => esc_html__( 'Color', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => $selectors['arrow_color'],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'arrow_background',
				'types' => [ 'classic', 'gradient' ],
				'selector' => $selectors['arrow_background'],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_arrow_hover',
			[
				'label' => esc_html__( 'Hover', 'animation-addons-for-elementor' ),
			]
		);

		$this->add_control(
			'arrow_hover_color',
			[
				'label'     => esc_html__( 'Color', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => $selectors['arrow_hover_color'],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'arrow_hover_background',
				'types' => [ 'classic', 'gradient' ],
				'selector' => $selectors['arrow_hover_background'],
			]
		);

		$this->add_control(
			'arrow_hover_border_color',
			[
				'label'     => esc_html__( 'Border Color', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => $selectors['arrow_hover_border_color'],
				'condition' => [ 'arrow_border_border!' => '' ],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name'      => 'arrow_border',
				'selector'  => $selectors['arrow_border'],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'arrow_border_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'animation-addons-for-elementor' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors'  => $selectors['arrow_border_radius'],
			]
		);
	}

	/**
	 * Register the slider pagination style controls.
	 *
	 * Adds different input fields to allow the user to change and customize the widget settings.
	 *
	 * @since 1.0.0
	 *
	 * @access protected
	 */
	protected function register_slider_pagination_style_controls( $default_selectors = [] ) {
		$selectors = [
			'bullets_size'           => [
				'{{WRAPPER}} .swiper-pagination-bullet' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
			],
			'bullets_inactive_color' => [
				'{{WRAPPER}} .swiper-pagination-bullet:not(.swiper-pagination-bullet-active)' => 'background: {{VALUE}}; opacity: 1',
			],
			'bullets_color'          => [
				'{{WRAPPER}} .swiper-pagination-bullet' => 'background: {{VALUE}};',
			],
			'bullets_border'         => '{{WRAPPER}} .swiper-pagination-bullet',
			//fraction
			'fraction_current_color' => [
				'{{WRAPPER}} .swiper-pagination-current' => 'color: {{VALUE}}',
			],
			'fraction_total_color'   => [
				'{{WRAPPER}} .swiper-pagination-total' => 'color: {{VALUE}}',
			],
			'fraction_midline_color' => [
				'{{WRAPPER}} .mid-line' => 'background-color: {{VALUE}}',
			],
			//progressbar
			'progress_color'         => [ '{{WRAPPER}} .swiper-pagination-progressbar' => 'background-color: {{VALUE}}' ],
			'progress_fill_color'    => [ '{{WRAPPER}} .swiper-pagination-progressbar-fill' => 'background-color: {{VALUE}}' ],
		];

		$selectors = array_merge( $selectors, $default_selectors );

		//pagination bullets
		$this->add_responsive_control(
			'bullets_size',
			[
				'label'     => esc_html__( 'Size', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::SLIDER,
				'range'     => [
					'px' => [
						'min' => 2,
						'max' => 100,
					],
				],
				'selectors' => $selectors['bullets_size'],
                'condition' => ['pagination_type' => 'bullets']
			]
		);

		$this->add_control(
			'bullets_inactive_color',
			[
				'label'     => esc_html__( 'Color', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => $selectors['bullets_inactive_color'],
				'condition' => ['pagination_type' => 'bullets']
			]
		);

		$this->add_control(
			'bullets_color',
			[
				'label'     => esc_html__( 'Active Color', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => $selectors['bullets_color'],
				'condition' => ['pagination_type' => 'bullets']
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name'      => 'bullets_border',
				'selector'  => $selectors['bullets_border'],
				'separator' => 'before',
				'condition' => ['pagination_type' => 'bullets']
			]
		);

		//pagination fraction
		$this->add_control(
			'fraction_current_color',
			[
				'label'     => esc_html__( 'Current Color', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => $selectors['fraction_current_color'],
				'condition' => ['pagination_type' => 'fraction']
			]
		);

		$this->add_control(
			'fraction_total_color',
			[
				'label'     => esc_html__( 'Total Color', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => $selectors['fraction_total_color'],
				'condition' => ['pagination_type' => 'fraction']
			]
		);

		$this->add_control(
			'fraction_midline_color',
			[
				'label'     => esc_html__( 'Mid Line Color', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => $selectors['fraction_midline_color'],
				'condition' => ['pagination_type' => 'fraction']
			]
		);

		//pagination progressbar
		$this->add_control(
			'progress_color',
			[
				'label'     => esc_html__( 'Progressbar Color', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => $selectors['progress_color'],
				'condition' => [ 'pagination_type' => 'progressbar' ]
			]
		);

		$this->add_control(
			'progress_fill_color',
			[
				'label'     => esc_html__( 'Progressbar Fill Color', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => $selectors['progress_fill_color'],
				'condition' => [ 'pagination_type' => 'progressbar' ]
			]
		);
	}

	/**
	 * get slider settings.
	 *
	 *
	 * @since 1.0.0
	 *
	 * @access protected
     *
     * @return array
	 */
	protected function get_slider_attributes( $settings = [] ) {
		if ( empty( $settings ) ) {
			$settings = $this->get_settings_for_display();
		}

		//slider settings
		$slider_settings = [
			'loop'           => 'true' === $settings['loop'],
			'speed'          => $settings['speed'],
			'allowTouchMove' => 'true' === $settings['allow_touch_move'],
			'slidesPerView'  => $settings['slides_to_show'],
			'spaceBetween'   => $settings['space_between'],
		];

		if ( 'yes' === $settings['autoplay'] ) {
			$slider_settings['autoplay'] = [
				'delay'                => $settings['autoplay_delay'],
				'disableOnInteraction' => $settings['autoplay_interaction'],
			];
		}

		if ( ! empty( $settings['navigation'] ) ) {
			$slider_settings['navigation'] = [
				'nextEl' => '.elementor-element-' . $this->get_id() . ' .wcf-arrow-next',
				'prevEl' => '.elementor-element-' . $this->get_id() . ' .wcf-arrow-prev',
			];
		}

		if ( ! empty( $settings['pagination'] ) ) {
			$slider_settings['pagination'] = [
				'el'        => '.elementor-element-' . $this->get_id() . ' .swiper-pagination',
				'clickable' => true,
				'type'      => $settings['pagination_type'],
			];
		}

		if ( ! empty( $settings['mousewheel'] ) ) {
			$slider_settings['mousewheel'] = [
				'releaseOnEdges' => true,
			];
		}

		//slider breakpoints
		$active_breakpoints = Plugin::$instance->breakpoints->get_active_breakpoints();

		foreach ( $active_breakpoints as $breakpoint_name => $breakpoint ) {
			$slides_to_show = ! empty( $settings[ 'slides_to_show_' . $breakpoint_name ] ) ? $settings[ 'slides_to_show_' . $breakpoint_name ] : $settings['slides_to_show'];
			$space_between = ! empty( $settings[ 'space_between_' . $breakpoint_name ] ) ? $settings[ 'space_between_' . $breakpoint_name ] : $settings['space_between'];

			$slider_settings['breakpoints'][ $breakpoint->get_value() ]['slidesPerView'] = $slides_to_show;
			$slider_settings['breakpoints'][ $breakpoint->get_value() ]['spaceBetween'] = $space_between;
		}

		$swiper_class = Plugin::$instance->experiments->is_feature_active( 'e_swiper_latest' ) ? 'swiper' : 'swiper-container';

		$this->add_render_attribute(
			'carousel-wrapper',
			[
				'class' => 'wcf__slider ' . $swiper_class,
				'dir'   => $settings['direction'],
				'style' => 'position: static',
			]
		);

		return $slider_settings;

	}

	protected function render_slider_navigation() {
		if ( empty( $this->get_settings( 'navigation' ) ) ) {
			return;
		}
		?>
		<div class="ts-navigation">
			<div class="wcf-arrow wcf-arrow-prev" role="button" tabindex="0">
				<?php $this->render_swiper_button( 'previous' ); ?>
			</div>
			<div class="wcf-arrow wcf-arrow-next" role="button" tabindex="0">
				<?php $this->render_swiper_button( 'next' ); ?>
			</div>
		</div>
		<?php
	}

	protected function render_slider_pagination() {
		if ( empty( $this->get_settings( 'pagination' ) ) ) {
			return;
		}
		?>
        <div class="ts-pagination">
            <div class="swiper-pagination"></div>
        </div>
		<?php
	}

	/**
	 * Render swiper button.
	 *
	 * @since 1.0.0
	 *
	 * @access private
	 */
	private function render_swiper_button( $type ) {
		$direction     = 'next' === $type ? 'right' : 'left';
		$icon_settings = $this->get_settings( 'navigation_' . $type . '_icon' );

		if ( empty( $icon_settings['value'] ) ) {
			$icon_settings = [
				'library' => 'eicons',
				'value'   => 'eicon-chevron-' . $direction,
			];
		}

		Icons_Manager::render_icon( $icon_settings, [ 'aria-hidden' => 'true' ] );
	}

}
