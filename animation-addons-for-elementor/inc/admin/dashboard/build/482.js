"use strict";(globalThis.webpackChunkanimation_addon_for_elementor=globalThis.webpackChunkanimation_addon_for_elementor||[]).push([[482],{1440:(e,t,a)=>{a.d(t,{A:()=>h});var n=a(1609),r=a(9174),s=a(1910),l=a(1508),o=a(5072),c=a(1357),i=a(893),d=a(9785),m=a(4476),u=a(6961),p=a(1325),f=a(4721),g=a(1104),b=a(1282);const x=m.z.object({license:m.z.string().min(1,{message:"Please enter your license"})}),h=({open:e,setOpen:t})=>{const{activated:a,setActivated:m}=(0,b.bf)(),[h,v]=(0,n.useState)(""),[E,N]=(0,n.useState)(!1),{updateNotice:w}=(0,b.hN)(),y=(0,d.mN)({resolver:(0,i.u)(x),defaultValues:{license:WCF_ADDONS_ADMIN.addons_config.sl_lic||""}});return(0,n.createElement)(s.lG,{open:e,onOpenChange:t},(0,n.createElement)(s.Cf,{onOpenAutoFocus:e=>e.preventDefault(),className:"w-[498px] max-w-[498px] rounded-xl bg-background pr-0 [&>.wcf-dialog-close-button>svg]:text-[#99A0AE] [&>.wcf-dialog-close-button]:right-4 [&>.wcf-dialog-close-button]:top-4 p-6 gap-0"},(0,n.createElement)(s.c7,null,(0,n.createElement)(s.L3,{className:"text-2xl font-medium"},"Activate License"),(0,n.createElement)(s.rr,{className:"text-base mt-[9px]"},"Enter your license key to activate Animation Addons Pro. If you need guidance please go to the instructions guideline for help.")),(0,n.createElement)(u.w,{className:"my-6 bg-[#EAECF0]"}),(0,n.createElement)(l.lV,{...y},(0,n.createElement)("form",{onSubmit:y.handleSubmit((async e=>{N(!0),v("");const t={action:a?.wcf_valid?"wcf_addon_pro_sl_deactivate":"wcf_addon_pro_sl_activate",wcf_addon_sl_license_key:e.license,email:"",nonce:WCF_ADDONS_ADMIN.nonce};a?.wcf_valid&&(t.edd_license_deactivate=!0),await fetch(WCF_ADDONS_ADMIN.ajaxurl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"},body:new URLSearchParams(t)}).then((e=>e.json())).then((e=>{if(e.success){const t=(new Date).toISOString();"valid"===e?.license?(WCF_ADDONS_ADMIN.addons_config.wcf_valid=!0,m(WCF_ADDONS_ADMIN.addons_config),f.oR.success("Activate Successful",{position:"top-right"}),w({type:"notice",title:"License activation update",description:"Your license has been successfully activated. You can now enjoy all the features of the plugin. Thank you for choosing our plugin!",date:t}),window.location.reload()):(WCF_ADDONS_ADMIN.addons_config.wcf_valid=!1,m(WCF_ADDONS_ADMIN.addons_config),f.oR.success("Deactivate Successful",{position:"top-right"}),w({type:"notice",title:"License Deactivation update",description:"Your license has been successfully deactivated. Thank you for using our plugin!",date:t}),window.location.reload())}else v(e.message);N(!1)}))}))},(0,n.createElement)(l.zB,{control:y.control,name:"license",render:({field:e})=>(0,n.createElement)(l.eI,null,(0,n.createElement)("div",{className:"flex gap-1 items-center"},(0,n.createElement)(l.lR,{className:"font-normal text-text"},"License Key"),(0,n.createElement)(p.Bc,null,(0,n.createElement)(p.m_,null,(0,n.createElement)(p.k$,{className:"bg-transparent flex items-center"},(0,n.createElement)(c.nP3,{color:"#CACFD8",size:18})),(0,n.createElement)(p.ZI,{className:"max-w-[200px]"},(0,n.createElement)("p",null,"Copy the license key given in your downloaded file and paste it below."))))),(0,n.createElement)(l.MJ,{className:"relative"},(0,n.createElement)(o.p,{placeholder:"Enter your license key here",value:a?.wcf_valid?(e=>{const t=Math.max(0,e.length-6);return"*".repeat(t)+e.slice(-6)})(e.value||""):e.value,onChange:t=>{const a=t.target.value;e.onChange(a)}})),(0,n.createElement)(l.C5,null))}),h?(0,n.createElement)("div",{className:"mt-4"},(0,n.createElement)("p",{className:"text-[0.8rem] font-medium text-[#FF5733] leading-4"},h)):"",(0,n.createElement)(u.w,{className:"my-6 bg-[#EAECF0]"}),(0,n.createElement)(r.$,{type:"submit",variant:"pro",className:"w-full gap-2"},E?(0,n.createElement)(g.A,{className:"animate-spin"}):"",a?.wcf_valid?"Deactivate your license":"Activate your license")))))}},3179:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(1609),r=a(1910),s=a(9174),l=a(1357);const o=a.p+"images/pro-dialog.4eb4bab3.png";var c=a(6462),i=a(1440),d=a(1282),m=a(4721);const u=({open:e,setOpen:t})=>{const{activated:a}=(0,d.bf)(),[u,p]=(0,n.useState)(!1);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(r.lG,{open:e,onOpenChange:t},(0,n.createElement)(r.Cf,{className:"w-[380px] bg-background pr-0 gap-0 !rounded-2xl overflow-hidden [&>.wcf-dialog-close-button]:right-4 [&>.wcf-dialog-close-button]:top-4"},(0,n.createElement)(r.c7,{className:"hidden"},(0,n.createElement)(r.L3,{className:"hidden"}),(0,n.createElement)(r.rr,{className:"hidden"})),(0,n.createElement)("div",null,(0,n.createElement)("img",{src:o,className:"w-full h-[174px]",alt:"pro dialog"}),(0,n.createElement)("div",{className:"p-6 pt-2"},(0,n.createElement)("h2",{className:"text-xl text-center font-medium"},"Upgrade to premium plan and unlock every features!"),(0,n.createElement)("p",{className:"mt-2.5 text-sm text-text-secondary text-center"},"Upgrade and get access to every feature."),"Active"===a.integrations.plugins.elements["animation-addon-for-elementorpro"].action?(0,n.createElement)(s.$,{variant:"pro",onClick:()=>(async()=>{await fetch(WCF_ADDONS_ADMIN.ajaxurl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"},body:new URLSearchParams({action:"wcf_active_plugin",action_base:"animation-addons-for-elementor-pro/animation-addons-for-elementor-pro.php",nonce:WCF_ADDONS_ADMIN.nonce})}).then((e=>e.json())).then((e=>{e?.success&&(m.oR.success(e?.data?.message,{position:"top-right"}),window.location.reload())}))})(),className:"w-full mt-6"},(0,n.createElement)("span",{className:"me-2 flex"},(0,n.createElement)(l.Y6N,{size:20})),"Active Plugin"):"Download"===a.integrations.plugins.elements["animation-addon-for-elementorpro"].action?(0,n.createElement)("a",{href:"https://animation-addons.com/",target:"_blank",className:(0,c.cn)((0,s.r)({variant:"pro"}),"w-full mt-6")},(0,n.createElement)("span",{className:"me-2 flex"},(0,n.createElement)(l.Y6N,{size:20})),"Get Pro Version"):(0,n.createElement)(s.$,{variant:"pro",className:"w-full mt-6",onClick:()=>{t(!1),p(!0)}},(0,n.createElement)("span",{className:"me-1.5 flex"},(0,n.createElement)(l.rhy,{size:20})),13===a?.product_status?.item_id?"Deactivate License":"Activate License"))))),(0,n.createElement)(i.A,{open:u,setOpen:p}))}},2580:(e,t,a)=>{a.d(t,{A:()=>f});var n=a(1609),r=a(522),s=a(8613),l=a(7226),o=a(6462),c=a(3179),i=a(1282),d=a(9174),m=a(1910),u=a(1357);const p=({children:e})=>(0,n.createElement)(m.lG,null,(0,n.createElement)(m.zM,{asChild:!0},(0,n.createElement)(d.$,{variant:"link",className:(0,o.cn)("group disabled:opacity-100 p-0",e?"text-icon":"text-[#CACFD8] hover:text-[#CACFD8]"),disabled:!e},(0,n.createElement)(u.pB5,{className:(0,o.cn)(e?"text-icon group-hover:text-brand":"text-[#CACFD8] group-hover:text-[#CACFD8]"),size:20}))),(0,n.createElement)(m.Cf,{className:"w-[428px] max-w-[428px] rounded-xl bg-background pr-0 [&>.wcf-dialog-close-button>svg]:text-[#99A0AE] [&>.wcf-dialog-close-button]:right-4 [&>.wcf-dialog-close-button]:top-4"},(0,n.createElement)(m.c7,{className:"hidden"},(0,n.createElement)(m.L3,null),(0,n.createElement)(m.rr,null)),(0,n.createElement)("div",null,e))),f=({widget:e,slug:t,className:a,updateActiveItem:d,isDisable:m=!1,exSettings:u})=>{const{activated:f}=(0,i.bf)(),[g,b]=(0,n.useState)(!1),x=window.location.hash,h=x?.replace("#","");return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:(0,o.cn)("flex items-center justify-between gap-3 px-4 py-[15px] bg-background rounded-lg  box-border",h===t?"shadow-[0px_0px_0px_2px_rgba(252,104,72,0.25),0px_1px_2px_0px_rgba(10,13,20,0.03)]":"shadow-common-2",a),id:t||""},e?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:(0,o.cn)("flex items-center gap-3",e?.is_upcoming?"opacity-50 pointer-events-none":"")},(0,n.createElement)("div",{className:(0,o.cn)("border rounded-full h-11 w-11 flex justify-center items-center shadow-common text-[20px]",e?.icon)}),(0,n.createElement)("div",{className:"flex flex-col gap-1"},(0,n.createElement)("div",{className:"flex items-center"},(0,n.createElement)("h2",{className:"text-[15px] leading-6 font-medium"},e?.label),e?.is_upcoming?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(r.A,{className:"w-3.5 h-3.5 text-icon-secondary",strokeWidth:2}),(0,n.createElement)(s.E,{variant:"pro"},"COMING")):e?.is_pro?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(r.A,{className:"w-3.5 h-3.5 text-icon-secondary",strokeWidth:2}),(0,n.createElement)(s.E,{variant:"pro"},"PRO")):""),(0,n.createElement)("div",{className:"flex items-center"},(0,n.createElement)("a",{href:e?.doc_url,target:"_blank",className:(0,o.cn)("text-sm",e?.doc_url?"text-label hover:text-text":"pointer-events-none text-[#CACFD8]")},"Documentation"),(0,n.createElement)(r.A,{className:"w-3.5 h-3.5 text-icon-secondary",strokeWidth:2}),(0,n.createElement)("a",{href:e?.demo_url,target:"_blank",className:(0,o.cn)("text-sm",e?.demo_url?"text-label hover:text-text":"pointer-events-none text-[#CACFD8]")},"Preview")))),(0,n.createElement)("div",{className:"flex justify-end items-center gap-2"},u&&(0,n.createElement)("div",null,(0,n.createElement)(p,null,u)),e?.is_upcoming?"":(0,n.createElement)("div",null,(0,n.createElement)(l.d,{disabled:e?.is_upcoming||m,checked:e?.is_active,onCheckedChange:a=>((t,a)=>{e?.is_pro?f.wcf_valid?d&&d({value:t,slug:a}):b(t):d&&d({value:t,slug:a})})(a,t)})))):""),(0,n.createElement)(c.A,{open:g,setOpen:b}))}},8613:(e,t,a)=>{a.d(t,{E:()=>o});var n=a(1609),r=a(2478),s=a(6462);const l=(0,r.F)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors",{variants:{variant:{default:"bg-background text-text-primary rounded-full border",filter:"bg-background text-text-primary rounded-lg border px-3 py-1.5 text-sm hover:bg-[#FFF3F0] hover:border-[#FFE5DF] hover:text-[#ED745A] hover:font-medium",pro:"border-0 px-[7px] py-[3px] h-[18px] text-[11px] leading-[0.91] mt font-medium bg-[linear-gradient(109deg,#FFC47D_7.79%,#FFA132_92.21%)] text-white rounded-full",tPro:"border-0 pe-2.5 h-[26px] text-sm font-medium bg-[linear-gradient(45deg,#FF7A00_0%,#FFD439_100%)] text-white rounded-full",version:"bg-white text-text h-[27px] rounded-full",solid:"bg-[#E7350F] border-2 border-solid border-background rounded-full p-0 w-2.5 h-2.5",installed:"bg-[#E0FAEC] border-0 rounded-md px-2 py-1 h-6 text-[#1A7544]",inProgress:"bg-[#EBF1FF] border-0 rounded-md px-2 py-1 h-6 text-[#335CFF]",secondary:"bg-background-secondary text-text-tertiary h-7 px-3"}},defaultVariants:{variant:"default"}});function o({className:e,variant:t,...a}){return(0,n.createElement)("div",{className:(0,s.cn)(l({variant:t}),e),...a})}},1508:(e,t,a)=>{a.d(t,{C5:()=>x,MJ:()=>g,Rr:()=>b,eI:()=>p,lR:()=>f,lV:()=>c,zB:()=>d});var n=a(1609),r=a(3362),s=a(9785),l=a(6462),o=a(5882);const c=s.Op,i=n.createContext({}),d=({...e})=>(0,n.createElement)(i.Provider,{value:{name:e.name}},(0,n.createElement)(s.xI,{...e})),m=()=>{const e=n.useContext(i),t=n.useContext(u),{getFieldState:a,formState:r}=(0,s.xW)(),l=a(e.name,r);if(!e)throw new Error("useFormField should be used within <FormField>");const{id:o}=t;return{id:o,name:e.name,formItemId:`${o}-form-item`,formDescriptionId:`${o}-form-item-description`,formMessageId:`${o}-form-item-message`,...l}},u=n.createContext({}),p=n.forwardRef((({className:e,...t},a)=>{const r=n.useId();return(0,n.createElement)(u.Provider,{value:{id:r}},(0,n.createElement)("div",{ref:a,className:(0,l.cn)("space-y-1.5",e),...t}))}));p.displayName="FormItem";const f=n.forwardRef((({className:e,...t},a)=>{const{error:r,formItemId:s}=m();return(0,n.createElement)(o.J,{ref:a,className:(0,l.cn)(r&&"text-destructive",e,"leading-5 block"),htmlFor:s,...t})}));f.displayName="FormLabel";const g=n.forwardRef((({...e},t)=>{const{error:a,formItemId:s,formDescriptionId:l,formMessageId:o}=m();return(0,n.createElement)(r.DX,{ref:t,id:s,"aria-describedby":a?`${l} ${o}`:`${l}`,"aria-invalid":!!a,...e})}));g.displayName="FormControl";const b=n.forwardRef((({className:e,...t},a)=>{const{formDescriptionId:r}=m();return(0,n.createElement)("p",{ref:a,id:r,className:(0,l.cn)("text-[0.8rem] text-muted-foreground",e),...t})}));b.displayName="FormDescription";const x=n.forwardRef((({className:e,children:t,...a},r)=>{const{error:s,formMessageId:o}=m(),c=s?String(s?.message):t;return c?(0,n.createElement)("p",{ref:r,id:o,className:(0,l.cn)("text-[0.8rem] font-medium text-[#FF5733] leading-4",e),...a},c):null}));x.displayName="FormMessage"},5072:(e,t,a)=>{a.d(t,{p:()=>s});var n=a(1609),r=a(6462);const s=n.forwardRef((({className:e,type:t,...a},s)=>(0,n.createElement)("input",{type:t,className:(0,r.cn)("flex h-10 w-full rounded-[10px] border border-border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-label/50 focus-visible:outline-none focus-visible:border focus-visible:border-[#99A0AE] disabled:cursor-not-allowed disabled:opacity-50",e),ref:s,...a})));s.displayName="Input"},5882:(e,t,a)=>{a.d(t,{J:()=>c});var n=a(1609),r=a(5920),s=a(2478),l=a(6462);const o=(0,s.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=n.forwardRef((({className:e,...t},a)=>(0,n.createElement)(r.b,{ref:a,className:(0,l.cn)(o(),e),...t})));c.displayName=r.b.displayName},7226:(e,t,a)=>{a.d(t,{d:()=>A});var n=a(1609),r=a(9957),s=a(1071),l=a(2133),o=a(1351),c=a(5357),i=a(1769),d=a(2579),m=a(4848),u="Switch",[p,f]=(0,l.A)(u),[g,b]=p(u),x=n.forwardRef(((e,t)=>{const{__scopeSwitch:a,name:l,checked:c,defaultChecked:i,required:u,disabled:p,value:f="on",onCheckedChange:b,form:x,...h}=e,[v,w]=n.useState(null),y=(0,s.s)(t,(e=>w(e))),_=n.useRef(!1),A=!v||x||!!v.closest("form"),[C=!1,k]=(0,o.i)({prop:c,defaultProp:i,onChange:b});return(0,m.jsxs)(g,{scope:a,checked:C,disabled:p,children:[(0,m.jsx)(d.sG.button,{type:"button",role:"switch","aria-checked":C,"aria-required":u,"data-state":N(C),"data-disabled":p?"":void 0,disabled:p,value:f,...h,ref:y,onClick:(0,r.m)(e.onClick,(e=>{k((e=>!e)),A&&(_.current=e.isPropagationStopped(),_.current||e.stopPropagation())}))}),A&&(0,m.jsx)(E,{control:v,bubbles:!_.current,name:l,value:f,checked:C,required:u,disabled:p,form:x,style:{transform:"translateX(-100%)"}})]})}));x.displayName=u;var h="SwitchThumb",v=n.forwardRef(((e,t)=>{const{__scopeSwitch:a,...n}=e,r=b(h,a);return(0,m.jsx)(d.sG.span,{"data-state":N(r.checked),"data-disabled":r.disabled?"":void 0,...n,ref:t})}));v.displayName=h;var E=e=>{const{control:t,checked:a,bubbles:r=!0,...s}=e,l=n.useRef(null),o=(0,c.Z)(a),d=(0,i.X)(t);return n.useEffect((()=>{const e=l.current,t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,"checked").set;if(o!==a&&n){const t=new Event("click",{bubbles:r});n.call(e,a),e.dispatchEvent(t)}}),[o,a,r]),(0,m.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:a,...s,tabIndex:-1,ref:l,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function N(e){return e?"checked":"unchecked"}var w=x,y=v,_=a(6462);const A=n.forwardRef((({className:e,...t},a)=>(0,n.createElement)(w,{className:(0,_.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brand data-[state=unchecked]:bg-border-secondary",e),...t,ref:a},(0,n.createElement)(y,{className:(0,_.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")}))));A.displayName=w.displayName},1325:(e,t,a)=>{a.d(t,{Bc:()=>l,ZI:()=>i,k$:()=>c,m_:()=>o});var n=a(1609),r=a(3881),s=a(6462);const l=r.Kq,o=r.bL,c=r.l9,i=n.forwardRef((({className:e,sideOffset:t=4,...a},l)=>(0,n.createElement)(r.UC,{ref:l,sideOffset:t,className:(0,s.cn)("z-50 overflow-hidden rounded-md bg-[#222530] px-3 py-1.5 text-xs text-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...a})));i.displayName=r.UC.displayName},3662:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var n=a(1609),r=a.n(n),s=a(2580),l=a(7226),o=a(5882),c=a(6462),i=a(1282),d=a(7491);const m=()=>{const{allWidgets:e}=(0,i.XB)(),{updateActiveWidget:t,updateActiveGroupWidget:a}=(0,i.hu)(),{setupType:m}=(0,i.zV)(),[u,p]=(0,n.useState)({});return(0,n.useEffect)((()=>{e&&p(e.elements)}),[e]),(0,n.useEffect)((()=>{if(e){const t=(0,d.RR)(e,m);p(t)}}),[]),(0,n.createElement)("div",{className:"ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-background-secondary p-3 rounded-lg"},Object.keys(u)?.map((e=>(0,n.createElement)("div",{className:"mt-3 first:mt-0"},(0,n.createElement)("div",{className:"bg-background flex justify-between items-center p-5 rounded"},(0,n.createElement)("h3",{className:"text-base font-medium"},u[e].title),(0,n.createElement)("div",{className:"flex items-center space-x-2"},(0,n.createElement)(l.d,{id:e,checked:u[e].is_active,onCheckedChange:t=>{a({value:t,slug:e})}}),(0,n.createElement)(o.J,{htmlFor:e},"Enable All"))),(0,n.createElement)("div",{className:"grid grid-cols-2 xl:grid-cols-3 gap-1 mt-1"},Object.keys(u[e].elements)?.map(((a,l)=>(0,n.createElement)(r().Fragment,{key:`tab_content-${l}`},(0,n.createElement)(s.A,{widget:u[e].elements[a],slug:a,updateActiveItem:t,className:"rounded p-5"})))),Array.from({length:(0,c.Cr)()-(Object.keys(u[e].elements)?.length%(0,c.Cr)()==0?(0,c.Cr)():Object.keys(u[e].elements)?.length%(0,c.Cr)())}).map(((e,t)=>(0,n.createElement)(s.A,{key:`tab_content_empty-${t}`,className:"rounded"}))))))))},u=a.p+"images/widget-top-bg.1ec55e32.png",p=()=>{const{isSkipTerms:e}=(0,i.hx)(),t=btoa("rayhan:f1R7mK7WnjK17x7XbcxVH6b5"),a=WCF_ADDONS_ADMIN.user.email.split("@")[0].split(".").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" "),r={first_name:""==WCF_ADDONS_ADMIN.user.f_name?a:WCF_ADDONS_ADMIN.user.f_name,last_name:"",email:WCF_ADDONS_ADMIN.user.email,tags:["animation-addon"],lists:[1,4],status:"subscribed"};return(0,n.useEffect)((()=>{e||"yes"==localStorage.getItem("wcfanim_addon_subscribe")||async function(){try{const e=await fetch("https://themecrowdy.com/wp-json/fluent-crm/v2/subscribers",{method:"POST",headers:{Authorization:`Basic ${t}`,"Content-Type":"application/json"},body:JSON.stringify(r)});if(!e.ok)throw new Error(`HTTP error! Status: ${e.status}`);await e.json(),localStorage.setItem("wcfanim_addon_subscribe","yes")}catch(e){localStorage.setItem("wcfanim_addon_subscribe","yes")}}()}),[]),(0,n.createElement)("div",{className:"rounded-lg overflow-hidden mx-2.5"},(0,n.createElement)("div",{className:"bg-[linear-gradient(0deg,rgba(245,246,248,0.50)_0%,rgba(245,246,248,0.50)_100%)] rounded-lg"},(0,n.createElement)("div",{className:"min-h-[65vh] bg-no-repeat bg-contain pb-6",style:{backgroundImage:`url(${u})`}},(0,n.createElement)("div",{className:"pt-[120px] max-w-[730px] mx-auto text-center flex flex-col gap-3"},(0,n.createElement)("h1",{className:"text-[44px] font-medium leading-[1.36] tracking-[-0.44px] p-0"},"Activate Widgets You Want to Use"),(0,n.createElement)("p",{className:"text-lg text-text-secondary"},"Enhance your website's functionality by activating widgets that suit your needs.")),(0,n.createElement)("div",{className:"mt-[56px] max-w-[1184px] mx-auto border-[10px] border-white rounded-lg"},(0,n.createElement)(m,null)))))}},522:(e,t,a)=>{a.d(t,{A:()=>n});const n=(0,a(9407).A)("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]])},5357:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(1609);function r(e){const t=n.useRef({value:e,previous:e});return n.useMemo((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}}}]);