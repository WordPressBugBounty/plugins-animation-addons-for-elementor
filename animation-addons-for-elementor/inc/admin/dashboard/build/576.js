"use strict";(globalThis.webpackChunkanimation_addon_for_elementor=globalThis.webpackChunkanimation_addon_for_elementor||[]).push([[576],{3179:(e,t,a)=>{a.d(t,{A:()=>p});var l=a(1609),n=a(1910),r=a(9174),s=a(1357);const c=a.p+"images/pro-dialog.4eb4bab3.png";var o=a(6462),m=a(1440),i=a(1282),d=a(4721);const p=({open:e,setOpen:t})=>{const{activated:a}=(0,i.bf)(),[p,u]=(0,l.useState)(!1);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n.lG,{open:e,onOpenChange:t},(0,l.createElement)(n.Cf,{className:"w-[380px] bg-background pr-0 gap-0 !rounded-2xl overflow-hidden [&>.wcf-dialog-close-button]:right-4 [&>.wcf-dialog-close-button]:top-4"},(0,l.createElement)(n.c7,{className:"hidden"},(0,l.createElement)(n.L3,{className:"hidden"}),(0,l.createElement)(n.rr,{className:"hidden"})),(0,l.createElement)("div",null,(0,l.createElement)("img",{src:c,className:"w-full h-[174px]",alt:"pro dialog"}),(0,l.createElement)("div",{className:"p-6 pt-2"},(0,l.createElement)("h2",{className:"text-xl text-center font-medium"},"Upgrade to premium plan and unlock every features!"),(0,l.createElement)("p",{className:"mt-2.5 text-sm text-text-secondary text-center"},"Upgrade and get access to every feature."),"Active"===a.integrations.plugins.elements["animation-addon-for-elementorpro"].action?(0,l.createElement)(r.$,{variant:"pro",onClick:()=>(async()=>{await fetch(WCF_ADDONS_ADMIN.ajaxurl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"},body:new URLSearchParams({action:"wcf_active_plugin",action_base:"animation-addons-for-elementor-pro/animation-addons-for-elementor-pro.php",nonce:WCF_ADDONS_ADMIN.nonce})}).then((e=>e.json())).then((e=>{e?.success&&(d.oR.success(e?.data?.message,{position:"top-right"}),window.location.reload())}))})(),className:"w-full mt-6"},(0,l.createElement)("span",{className:"me-2 flex"},(0,l.createElement)(s.Y6N,{size:20})),"Active Plugin"):"Download"===a.integrations.plugins.elements["animation-addon-for-elementorpro"].action?(0,l.createElement)("a",{href:"https://animation-addons.com/",target:"_blank",className:(0,o.cn)((0,r.r)({variant:"pro"}),"w-full mt-6")},(0,l.createElement)("span",{className:"me-2 flex"},(0,l.createElement)(s.Y6N,{size:20})),"Get Pro Version"):(0,l.createElement)(r.$,{variant:"pro",className:"w-full mt-6",onClick:()=>{t(!1),u(!0)}},(0,l.createElement)("span",{className:"me-1.5 flex"},(0,l.createElement)(s.rhy,{size:20})),13===a?.product_status?.item_id?"Deactivate License":"Activate License"))))),(0,l.createElement)(m.A,{open:p,setOpen:u}))}},2580:(e,t,a)=>{a.d(t,{A:()=>g});var l=a(1609),n=a(522),r=a(8613),s=a(7226),c=a(6462),o=a(3179),m=a(1282),i=a(9174),d=a(1910),p=a(1357);const u=({children:e})=>(0,l.createElement)(d.lG,null,(0,l.createElement)(d.zM,{asChild:!0},(0,l.createElement)(i.$,{variant:"link",className:(0,c.cn)("group disabled:opacity-100 p-0",e?"text-icon":"text-[#CACFD8] hover:text-[#CACFD8]"),disabled:!e},(0,l.createElement)(p.pB5,{className:(0,c.cn)(e?"text-icon group-hover:text-brand":"text-[#CACFD8] group-hover:text-[#CACFD8]"),size:20}))),(0,l.createElement)(d.Cf,{className:"w-[428px] max-w-[428px] rounded-xl bg-background pr-0 [&>.wcf-dialog-close-button>svg]:text-[#99A0AE] [&>.wcf-dialog-close-button]:right-4 [&>.wcf-dialog-close-button]:top-4"},(0,l.createElement)(d.c7,{className:"hidden"},(0,l.createElement)(d.L3,null),(0,l.createElement)(d.rr,null)),(0,l.createElement)("div",null,e))),g=({widget:e,slug:t,className:a,updateActiveItem:i,isDisable:d=!1,exSettings:p})=>{const{activated:g}=(0,m.bf)(),[h,x]=(0,l.useState)(!1),b=window.location.hash,E=b?.replace("#","");return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:(0,c.cn)("flex items-center justify-between gap-3 px-4 py-[15px] bg-background rounded-lg  box-border",E===t?"shadow-[0px_0px_0px_2px_rgba(252,104,72,0.25),0px_1px_2px_0px_rgba(10,13,20,0.03)]":"shadow-common-2",a),id:t||""},e?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:(0,c.cn)("flex items-center gap-3",e?.is_upcoming?"opacity-50 pointer-events-none":"")},(0,l.createElement)("div",{className:(0,c.cn)("border rounded-full h-11 w-11 flex justify-center items-center shadow-common text-[20px]",e?.icon)}),(0,l.createElement)("div",{className:"flex flex-col gap-1"},(0,l.createElement)("div",{className:"flex items-center"},(0,l.createElement)("h2",{className:"text-[15px] leading-6 font-medium"},e?.label),e?.is_upcoming?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n.A,{className:"w-3.5 h-3.5 text-icon-secondary",strokeWidth:2}),(0,l.createElement)(r.E,{variant:"pro"},"COMING")):e?.is_pro?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n.A,{className:"w-3.5 h-3.5 text-icon-secondary",strokeWidth:2}),(0,l.createElement)(r.E,{variant:"pro"},"PRO")):""),(0,l.createElement)("div",{className:"flex items-center"},(0,l.createElement)("a",{href:e?.doc_url,target:"_blank",className:(0,c.cn)("text-sm",e?.doc_url?"text-label hover:text-text":"pointer-events-none text-[#CACFD8]")},"Documentation"),(0,l.createElement)(n.A,{className:"w-3.5 h-3.5 text-icon-secondary",strokeWidth:2}),(0,l.createElement)("a",{href:e?.demo_url,target:"_blank",className:(0,c.cn)("text-sm",e?.demo_url?"text-label hover:text-text":"pointer-events-none text-[#CACFD8]")},"Preview")))),(0,l.createElement)("div",{className:"flex justify-end items-center gap-2"},p&&(0,l.createElement)("div",null,(0,l.createElement)(u,null,p)),e?.is_upcoming?"":(0,l.createElement)("div",null,(0,l.createElement)(s.d,{disabled:e?.is_upcoming||d,checked:e?.is_active,onCheckedChange:a=>((t,a)=>{e?.is_pro?g.wcf_valid?i&&i({value:t,slug:a}):x(t):i&&i({value:t,slug:a})})(a,t)})))):""),(0,l.createElement)(o.A,{open:h,setOpen:x}))}},7226:(e,t,a)=>{a.d(t,{d:()=>A});var l=a(1609),n=a(9957),r=a(1071),s=a(2133),c=a(1351),o=a(5357),m=a(1769),i=a(2579),d=a(4848),p="Switch",[u,g]=(0,s.A)(p),[h,x]=u(p),b=l.forwardRef(((e,t)=>{const{__scopeSwitch:a,name:s,checked:o,defaultChecked:m,required:p,disabled:u,value:g="on",onCheckedChange:x,form:b,...E}=e,[f,N]=l.useState(null),y=(0,r.s)(t,(e=>N(e))),_=l.useRef(!1),A=!f||b||!!f.closest("form"),[k=!1,C]=(0,c.i)({prop:o,defaultProp:m,onChange:x});return(0,d.jsxs)(h,{scope:a,checked:k,disabled:u,children:[(0,d.jsx)(i.sG.button,{type:"button",role:"switch","aria-checked":k,"aria-required":p,"data-state":v(k),"data-disabled":u?"":void 0,disabled:u,value:g,...E,ref:y,onClick:(0,n.m)(e.onClick,(e=>{C((e=>!e)),A&&(_.current=e.isPropagationStopped(),_.current||e.stopPropagation())}))}),A&&(0,d.jsx)(w,{control:f,bubbles:!_.current,name:s,value:g,checked:k,required:p,disabled:u,form:b,style:{transform:"translateX(-100%)"}})]})}));b.displayName=p;var E="SwitchThumb",f=l.forwardRef(((e,t)=>{const{__scopeSwitch:a,...l}=e,n=x(E,a);return(0,d.jsx)(i.sG.span,{"data-state":v(n.checked),"data-disabled":n.disabled?"":void 0,...l,ref:t})}));f.displayName=E;var w=e=>{const{control:t,checked:a,bubbles:n=!0,...r}=e,s=l.useRef(null),c=(0,o.Z)(a),i=(0,m.X)(t);return l.useEffect((()=>{const e=s.current,t=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(t,"checked").set;if(c!==a&&l){const t=new Event("click",{bubbles:n});l.call(e,a),e.dispatchEvent(t)}}),[c,a,n]),(0,d.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:a,...r,tabIndex:-1,ref:s,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function v(e){return e?"checked":"unchecked"}var N=b,y=f,_=a(6462);const A=l.forwardRef((({className:e,...t},a)=>(0,l.createElement)(N,{className:(0,_.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brand data-[state=unchecked]:bg-border-secondary",e),...t,ref:a},(0,l.createElement)(y,{className:(0,_.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")}))));A.displayName=N.displayName},6064:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});var l=a(1609),n=a(1357),r=a(6961),s=a(2580),c=a(4721),o=a(1282);const m=()=>{const[e,t]=(0,l.useState)(WCF_ADDONS_ADMIN.addons_config.dashboardProWidget),{updateActiveWidget:a}=(0,o.hu)(),m=async l=>{const n=Object.fromEntries(Object.entries(e||{}).filter((([e,t])=>e===l.slug?(t.is_active=l.value,[e,t]):[e,t])));t(n),await fetch(WCF_ADDONS_ADMIN.ajaxurl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"},body:new URLSearchParams({action:"save_settings_with_ajax_dashboard",fields:JSON.stringify(n),nonce:WCF_ADDONS_ADMIN.nonce,settings:"wcf_save_widgets"})}).then((e=>e.json())).then((e=>{a(l),c.oR.success("Save Successful",{position:"top-right"})}))};return(0,l.createElement)("div",{className:"col-span-2 border rounded-2xl p-5 shadow-common"},(0,l.createElement)("div",{className:"flex justify-between gap-11"},(0,l.createElement)("div",{className:"flex gap-2 items-center"},(0,l.createElement)(n.Y6N,{size:20,color:"#FFA132"}),(0,l.createElement)("p",{className:"font-medium"},"AAE Addons Pro Widgets"))),(0,l.createElement)(r.w,{className:"mt-4 mb-5"}),(0,l.createElement)("div",{className:"grid grid-cols-2 justify-between gap-2.5 p-3 bg-background-secondary rounded-lg"},Object.keys(e)?.map(((t,a)=>(0,l.createElement)(React.Fragment,{key:`tab_content-${a}`},(0,l.createElement)(s.A,{widget:e[t],slug:t,updateActiveItem:m}))))))};var i=a(9174),d=a(6462);const p=()=>{const e=window.location.hash,t=e?.replace("#","");return(0,l.createElement)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 h-full"},(0,l.createElement)("div",{className:(0,d.cn)("border rounded-2xl p-5 flex flex-col gap-[18px]","wcf-help-and-support"===t?"shadow-[0px_0px_0px_2px_rgba(252,104,72,0.25),0px_1px_2px_0px_rgba(10,13,20,0.03)]":"shadow-common"),id:"wcf-help-and-support"},(0,l.createElement)("div",{className:"inline-flex items-center gap-2 bg-background-secondary self-start py-1 ps-1.5 pe-2 rounded"},(0,l.createElement)(n.nZ3,{size:20,color:"#1FC16B"}),(0,l.createElement)("p",{className:"text-[13px]"},"Help & Support")),(0,l.createElement)("div",{id:"help"},(0,l.createElement)("h3",{className:"text-lg font-medium"},"Need Any Help?"),(0,l.createElement)("p",{className:"text-sm text-text-secondary mt-2"},"Feel like you want to consult with an expert? Take live chat support immediately from our"," ",(0,l.createElement)("a",{href:"https://wealcoder.com/",className:"text-[#2587EC] underline underline-offset-2"},"Website"),".")),(0,l.createElement)("div",null,(0,l.createElement)("a",{href:"https://crowdyflow.ticksy.com/submit",target:"_blank",className:(0,d.cn)((0,i.r)({variant:"secondary"}),"w-full")},"Create a ticket"," ",(0,l.createElement)(n.SJ3,{size:20,className:"ml-[6px]",color:"#525866"})))),(0,l.createElement)("div",{className:(0,d.cn)("border rounded-2xl p-5 flex flex-col gap-[18px]","wcf-feedback"===t?"shadow-[0px_0px_0px_2px_rgba(252,104,72,0.25),0px_1px_2px_0px_rgba(10,13,20,0.03)]":"shadow-common"),id:"wcf-feedback"},(0,l.createElement)("div",{className:"inline-flex items-center gap-2 bg-background-secondary self-start py-1 ps-1.5 pe-2 rounded"},(0,l.createElement)(n.WN7,{size:20,color:"#FFA132"}),(0,l.createElement)("p",{className:"text-[13px]"},"Feedback")),(0,l.createElement)("div",null,(0,l.createElement)("h3",{className:"text-lg font-medium"},"Show Your Love"),(0,l.createElement)("p",{className:"text-sm text-text-secondary mt-2"},"If you are happy with our product and support, please support us by giving us ",(0,l.createElement)("span",{className:"text-[#FFA132]"},"★★★★★")," 5 star rating.")),(0,l.createElement)("div",null,(0,l.createElement)("a",{href:"https://wordpress.org/plugins/animation-addons-for-elementor/#reviews",target:"_blank",className:(0,d.cn)((0,i.r)({variant:"secondary"}),"w-full")},"Give your feedback"," ",(0,l.createElement)(n.SJ3,{size:20,className:"ml-[6px]",color:"#525866"})))),(0,l.createElement)("div",{className:(0,d.cn)("border rounded-2xl p-5 flex flex-col gap-[18px]","wcf-community"===t?"shadow-[0px_0px_0px_2px_rgba(252,104,72,0.25),0px_1px_2px_0px_rgba(10,13,20,0.03)]":"shadow-common"),id:"wcf-community"},(0,l.createElement)("div",{className:"inline-flex items-center gap-2 bg-background-secondary self-start py-1 ps-1.5 pe-2 rounded"},(0,l.createElement)(n.cm,{size:20,color:"#7D52F4"}),(0,l.createElement)("p",{className:"text-[13px]"},"Join Community")),(0,l.createElement)("div",null,(0,l.createElement)("h3",{className:"text-lg font-medium"},"Contribute to Us"),(0,l.createElement)("p",{className:"text-sm text-text-secondary mt-2"},"Join our community of developers and designers and help us by recommending features.")),(0,l.createElement)("div",null,(0,l.createElement)("a",{href:"#","aria-disabled":"true",className:(0,d.cn)((0,i.r)({variant:"secondary"}),"w-full pointer-events-none opacity-50")},"Join Our Community"," ",(0,l.createElement)(n.SJ3,{size:20,className:"ml-[6px]",color:"#525866"})))))},u=[{title:"AAE Posts",subTitle:"Comprehensive guides and resources to help you get the most out of our amazing tools.",url:"https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-posts"},{title:"AAE Image Gallery",subTitle:"Comprehensive guides and resources to help you get the most out of our amazing tools.",url:"https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-image-gallery"}],g=()=>{const e=u,t=window.location.hash,a=t?.replace("#","");return(0,l.createElement)("div",{className:(0,d.cn)("border rounded-2xl p-5","wcf-documentation"===a?"shadow-[0px_0px_0px_2px_rgba(252,104,72,0.25),0px_1px_2px_0px_rgba(10,13,20,0.03)]":"shadow-common")},(0,l.createElement)("div",{className:"flex justify-between gap-11"},(0,l.createElement)("div",{className:"flex gap-2 items-center",id:"wcf-documentation"},(0,l.createElement)(n.HKL,{size:20,color:"#4870FF"}),(0,l.createElement)("p",{className:"font-medium"},"Documentation")),(0,l.createElement)("div",null,(0,l.createElement)("a",{href:"https://support.crowdytheme.com/docs/widgets/wcf-widgets",target:"_blank",className:(0,d.cn)((0,i.r)({variant:"secondary",size:"sm"}))},"View all ",(0,l.createElement)(n.SJ3,{size:18,className:"ml-1"})))),(0,l.createElement)(r.w,{className:"mt-4 mb-5"}),(0,l.createElement)("div",null,e?.map(((t,a)=>(0,l.createElement)("div",{key:`document_list-${a}`},(0,l.createElement)("div",{className:"flex flex-col gap-2"},(0,l.createElement)("a",{href:t.url,target:"_blank",className:(0,d.cn)("text-sm font-medium inline-flex items-center gap-[6px] hover:text-brand")},t.title," ",(0,l.createElement)(n.D8V,{size:16})),(0,l.createElement)("p",{className:"text-sm text-text-secondary"},t.subTitle)),a+1!==e.length?(0,l.createElement)(r.w,{className:"my-4 bg-border-secondary"}):"")))))},h=[{title:"Best Insurance Consultancy Agency WordPress Themes",thumbnail:"https://crowdytheme.com/wp-content/uploads/2024/10/Best-Insurance-Consultancy-Agency-WordPress-Themes.webp",createAt:"October 22, 2024",readingTime:"10 min read",url:"https://crowdytheme.com/best-insurance-consultancy-agency-wordpress-themes"},{title:"What are the Common Issues of WordPress Themes and How to Fix Them?",thumbnail:"https://crowdytheme.com/wp-content/uploads/2024/09/What-are-the-Common-Issues-of-WordPress-Themes-and-How-to-Fix-Them.webp",createAt:"October 16, 2024",readingTime:"10 min read",url:"https://crowdytheme.com/what-are-the-common-issues-of-wordpress-themes"},{title:"Best AI Startup and Agency WordPress Themes",thumbnail:"https://crowdytheme.com/wp-content/uploads/2024/10/Best-AI-Startup-and-Agency-WordPress-Themes.webp",createAt:"October 9, 2024",readingTime:"10 min read",url:"https://crowdytheme.com/best-ai-startup-and-agency-wordpress-themes"},{title:"Best Video Production Agency WordPress Themes",thumbnail:"https://crowdytheme.com/wp-content/uploads/2024/10/Best-Video-Production-Agency-WordPress-Themes.webp",createAt:"October 3, 2024",readingTime:"10 min read",url:"https://crowdytheme.com/best-video-production-agency-wordpress-themes"}],x=a.p+"images/b1.7596230d.png",b=()=>{const e=h,t=window.location.hash,a=t?.replace("#","");return(0,l.createElement)("div",{className:(0,d.cn)("border rounded-2xl p-5","wcf-blog"===a?"shadow-[0px_0px_0px_2px_rgba(252,104,72,0.25),0px_1px_2px_0px_rgba(10,13,20,0.03)]":"shadow-common"),id:"wcf-blog"},(0,l.createElement)("div",{className:"flex justify-between gap-11"},(0,l.createElement)("div",{className:"flex gap-2 items-center"},(0,l.createElement)(n.N2T,{size:20,color:"#47C2FF"}),(0,l.createElement)("p",{className:"font-medium"},"Latest Blogs & Articles")),(0,l.createElement)("div",null,(0,l.createElement)("a",{href:"https://crowdytheme.com/blog",target:"_blank",className:(0,d.cn)((0,i.r)({variant:"secondary",size:"sm"}))},"View all ",(0,l.createElement)(n.SJ3,{size:18,className:"ml-1"})))),(0,l.createElement)(r.w,{className:"mt-4 mb-5"}),(0,l.createElement)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"},e?.map(((e,t)=>(0,l.createElement)("div",{key:`latest_blog-${t}`,className:"group"},(0,l.createElement)("div",{className:"overflow-hidden h-[170px] rounded-lg"},(0,l.createElement)("img",{className:"transition-all group-hover:scale-110 h-[170px] object-cover",src:e.thumbnail,onError:e=>{e.currentTarget.src=x},alt:"Thumbnail"})),(0,l.createElement)("div",{className:"mt-3"},(0,l.createElement)("a",{href:e.url,target:"_blank"},(0,l.createElement)("h3",{className:"text-sm font-medium group-hover:text-brand"},e.title)),(0,l.createElement)("div",{className:"flex h-5 items-center space-x-1.5 text-xs text-text-secondary mt-2"},(0,l.createElement)("div",null,e.createAt),(0,l.createElement)(r.w,{orientation:"vertical",className:"h-3 text-label bg-label"}),(0,l.createElement)("div",null,e.readingTime))))))))},E=[{title:"Arolax",subTitle:"Creative Digital Agency Theme",url:"https://crowdytheme.com/wp/arolax-preview",logo:a.p+"images/arolex.9b32ad9f.png"},{title:"Sassly",subTitle:"SaaS, AI & Tech Startup Theme",url:"https://crowdytheme.com/wp/sassly-preview",logo:a.p+"images/sassly.7193ca6d.png"},{title:"Binox",subTitle:"Business Consulting Theme",url:"https://crowdytheme.com/wp/binox-preview",logo:a.p+"images/binox.f6070a24.png"},{title:"Builder",subTitle:"Architecture Construction WordPress Theme",url:"https://crowdytheme.com/wp/bilder-preview",logo:a.p+"images/builder.1c5d8387.png"}],f=()=>{const e=E,t=window.location.hash,a=t?.replace("#","");return(0,l.createElement)("div",{className:(0,d.cn)("border rounded-2xl p-5","wcf-recommended-plugins"===a?"shadow-[0px_0px_0px_2px_rgba(252,104,72,0.25),0px_1px_2px_0px_rgba(10,13,20,0.03)]":"shadow-common"),id:"wcf-recommended-plugins"},(0,l.createElement)("div",{className:"flex justify-between gap-11"},(0,l.createElement)("div",{className:"flex gap-2 items-center"},(0,l.createElement)(n.WEF,{size:20,color:"#7D52F4"}),(0,l.createElement)("p",{className:"font-medium"},"Recommended Themes")),(0,l.createElement)("div",null,(0,l.createElement)("a",{href:"https://crowdytheme.com/wordpress-portfolio",target:"_blank",className:(0,d.cn)((0,i.r)({variant:"secondary",size:"sm"}))},"View all ",(0,l.createElement)(n.SJ3,{size:18,className:"ml-1"})))),(0,l.createElement)(r.w,{className:"mt-4 mb-5"}),(0,l.createElement)("div",null,e?.map(((t,a)=>(0,l.createElement)("div",{key:`reco_plugin_list-${a}`},(0,l.createElement)("a",{href:t.url,target:"_blank",className:" group flex items-center justify-between gap-3"},(0,l.createElement)("div",{className:"flex items-center gap-3"},(0,l.createElement)("div",null,(0,l.createElement)("img",{src:t.logo,alt:"Plugins logo",style:{width:"40px",height:"40px"}})),(0,l.createElement)("div",null,(0,l.createElement)("p",{className:(0,d.cn)("text-sm font-medium group-hover:text-brand")},t.title),(0,l.createElement)("p",{className:"text-sm text-text-secondary"},t.subTitle))),(0,l.createElement)("div",{className:"overflow-hidden relative w-5 h-5"},(0,l.createElement)(n.SJ3,{size:20,color:"#99A0AE",className:"absolute top-0 left-0 transition-all group-hover:!text-brand group-hover:translate-x-6 group-hover:-translate-y-6"}),(0,l.createElement)(n.SJ3,{size:20,color:"#99A0AE",className:"absolute top-0 left-0 transition-all group-hover:!text-brand -translate-x-6 translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0"}))),a+1!==e.length?(0,l.createElement)(r.w,{className:"my-4 bg-border-secondary"}):"")))))};var w=a(1910);const v=({open:e,setOpen:t})=>(0,l.createElement)(w.lG,{open:e,onOpenChange:e=>t(e)},(0,l.createElement)(w.Cf,{className:"max-w-[1000px]"},(0,l.createElement)(w.c7,null,(0,l.createElement)(w.L3,{className:"hidden"}),(0,l.createElement)(w.rr,null,(0,l.createElement)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/Zb2kBjp2m4I?si=ngqdMyOSFjIxytFD&controls=0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0,className:"rounded-md aspect-video"}))))),N=a.p+"images/tutorial-thumb.5fb353b9.png",y=a.p+"images/play-button.7702f139.png",_=()=>{const[e,t]=(0,l.useState)(!1);return(0,l.createElement)("div",{className:"col-span-2 border rounded-2xl p-5 ps-6 flex justify-between items-center gap-6 shadow-common"},(0,l.createElement)("div",{className:"w-[362px]"},(0,l.createElement)("h2",{className:"text-xl font-medium "},"Watch The Beginner's Guide on How to Use Animation Addons."),(0,l.createElement)("p",{className:"text-sm mt-[10px] text-text-secondary"},"Get started with ease by watching our step-by-step beginner's tutorial on Elementor."),(0,l.createElement)("a",{href:"https://www.youtube.com/",className:(0,d.cn)((0,i.r)({variant:"secondary"}),"mt-7"),target:"_blank"},(0,l.createElement)("span",{className:"me-1.5 flex"},(0,l.createElement)(n.SCP,{size:20})),"Watch Tutorials")),(0,l.createElement)("div",{className:"flex-1"},(0,l.createElement)("div",{className:"relative"},(0,l.createElement)("img",{className:"w-full h-full object-cover",src:N,alt:"thumbnail"}),(0,l.createElement)("div",{className:"absolute top-[93px] left-0 right-0 mx-auto w-fit cursor-pointer",onClick:()=>t(!0)},(0,l.createElement)("img",{width:50,height:50,src:y,alt:"play"})))),(0,l.createElement)(v,{open:e,setOpen:t}))};var A=a(8613);const k=a.p+"images/hero-banner.e351d768.jpg",C=(0,a(9407).A)("SquareArrowUp",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]),F=({item:e,className:t})=>{const a=WCF_ADDONS_ADMIN.addons_config.extensions.elements["general-extensions"].elements;if(e)return(0,l.createElement)("div",{className:(0,d.cn)("group bg-background box-border",t)},(0,l.createElement)("a",{href:(e=>e?.slug&&a[e.slug]?"custom-fonts"!==e?.slug||a[e.slug].is_active?e.url:`${WCF_ADDONS_ADMIN.adminURL}/admin.php?page=wcf_addons_settings&tab=extensions&cTab=general#custom-fonts`:e.url)(e),target:"_blank","aria-disabled":!e.url,className:(0,d.cn)(e.url?"":"pointer-events-none")},(0,l.createElement)("div",{className:"flex items-center justify-between gap-3 "},(0,l.createElement)("div",{className:"flex items-center gap-3"},(0,l.createElement)("div",{className:(0,d.cn)("border rounded-full h-11 w-11 flex justify-center items-center shadow-common text-[20px]",e.url?"":"border-border-secondary [&>svg]:!text-[#99A0AE]")},e.icon),(0,l.createElement)("div",{className:"flex flex-col gap-1"},(0,l.createElement)("div",{className:"flex items-center"},(0,l.createElement)("h2",{className:(0,d.cn)("text-base font-medium",e.url?"":"text-[#99A0AE]")},e.title)),(0,l.createElement)("div",{className:"flex items-center"},(0,l.createElement)("p",{className:(0,d.cn)("text-sm text-label",e.url?"":"text-[#CACFD8]")},e.subTitle)))),e.url?(0,l.createElement)("div",null,(0,l.createElement)(n.D8V,{size:24,className:"text-icon-secondary group-hover:text-brand"})):(0,l.createElement)("div",null,(0,l.createElement)(A.E,{variant:"pro",className:"px-2.5 py-1.5 h-7 bg-[linear-gradient(180deg,#FFA184_0%,#F2754F_100%)] mr-1"},"COMING SOON!")))))},D=[{title:"Global Settings",subTitle:"Customize global settings",url:WCF_ADDONS_ADMIN.global_settings_url,icon:(0,l.createElement)(n.pB5,{size:22,className:"text-[#46A1FF]"})},{title:"Theme Builder",subTitle:"Customize theme builder",url:WCF_ADDONS_ADMIN.theme_builder_url,icon:(0,l.createElement)(n.THe,{size:22,className:"text-[#7772FC]"})},{title:"Pro Widgets",subTitle:"Customize pro widgets",url:`${WCF_ADDONS_ADMIN.adminURL}/admin.php?page=wcf_addons_settings&tab=widgets&filter=pro`,icon:(0,l.createElement)(n.Y6N,{size:22,className:"text-[#FFA132]"})},{title:"Custom Fonts",slug:"custom-fonts",subTitle:"Upload Custom fonts",url:`${WCF_ADDONS_ADMIN.adminURL}/edit.php?post_type=wcf-custom-fonts`,icon:(0,l.createElement)(n._2w,{size:22,className:"text-[#A281FF]"})},{title:"Popup",subTitle:"Customize popups",url:`${WCF_ADDONS_ADMIN.adminURL}/admin.php?page=wcf_addons_settings&tab=extensions&cTab=general#popup`,icon:(0,l.createElement)(C,{size:22,className:"text-[#A281FF]"})},{title:"Custom Icons",subTitle:"Upload custom icons",url:`${WCF_ADDONS_ADMIN.adminURL}/admin.php?page=wcf_addons_settings&tab=extensions&cTab=general#custom-icon`,icon:(0,l.createElement)(n.hvg,{size:22,className:"text-[#A281FF]"})}],T=()=>(0,l.createElement)("div",{className:"border rounded-2xl p-5"},(0,l.createElement)("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"},D.map(((e,t)=>(0,l.createElement)("div",{key:`quick_access-${t}`,className:(0,d.cn)("px-4 border-0 lg:border-r lg:[&:nth-child(2n)]:border-r-0 xl:[&:nth-child(2n)]:border-r xl:[&:nth-child(3n)]:border-r-0 border-border-secondary [&>div]:border-t [&>div]:pb-4 lg:[&:nth-child(-n+2)>div]:pt-1 xl:[&:nth-child(-n+3)>div]:pt-1 [&:nth-child(-n+1)>div]:border-t-0 lg:[&:nth-child(-n+2)>div]:border-t-0 xl:[&:nth-child(-n+3)>div]:border-t-0")},(0,l.createElement)(F,{item:e,className:"border-border-secondary pt-4"})))))),S=()=>(0,l.createElement)("div",{className:"flex flex-col gap-6"},(0,l.createElement)("div",{className:"relative"},(0,l.createElement)("img",{src:k,className:"w-full h-full rounded-[10px]",alt:"Banner"}),(0,l.createElement)(A.E,{className:"absolute bottom-[34px] right-[20px]",variant:"version"},"Ver. ",WCF_ADDONS_ADMIN?.version)),(0,l.createElement)("div",{className:"mt-2"},(0,l.createElement)(T,null)),(0,l.createElement)("div",{className:"grid grid-cols-2 xl:grid-cols-3 gap-6 h-full"},(0,l.createElement)(_,null),(0,l.createElement)(g,null)),(0,l.createElement)("div",{className:"grid grid-cols-2 xl:grid-cols-3 gap-6 h-full"},(0,l.createElement)(m,null),(0,l.createElement)(f,null)),(0,l.createElement)(p,null),(0,l.createElement)(b,null))},522:(e,t,a)=>{a.d(t,{A:()=>l});const l=(0,a(9407).A)("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]])}}]);