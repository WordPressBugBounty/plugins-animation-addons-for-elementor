"use strict";(globalThis.webpackChunkanimation_addon_for_elementor=globalThis.webpackChunkanimation_addon_for_elementor||[]).push([[857],{3179:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(1609),l=a(1910),s=a(9174),r=a(1357);const c=a.p+"images/pro-dialog.4eb4bab3.png";var o=a(6462),i=a(1440),d=a(1282),m=a(4721);const u=({open:e,setOpen:t})=>{const{activated:a}=(0,d.bf)(),[u,p]=(0,n.useState)(!1);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(l.lG,{open:e,onOpenChange:t},(0,n.createElement)(l.Cf,{className:"w-[380px] bg-background pr-0 gap-0 !rounded-2xl overflow-hidden [&>.wcf-dialog-close-button]:right-4 [&>.wcf-dialog-close-button]:top-4"},(0,n.createElement)(l.c7,{className:"hidden"},(0,n.createElement)(l.L3,{className:"hidden"}),(0,n.createElement)(l.rr,{className:"hidden"})),(0,n.createElement)("div",null,(0,n.createElement)("img",{src:c,className:"w-full h-[174px]",alt:"pro dialog"}),(0,n.createElement)("div",{className:"p-6 pt-2"},(0,n.createElement)("h2",{className:"text-xl text-center font-medium"},"Upgrade to premium plan and unlock every features!"),(0,n.createElement)("p",{className:"mt-2.5 text-sm text-text-secondary text-center"},"Upgrade and get access to every feature."),"Active"===a.integrations.plugins.elements["animation-addon-for-elementorpro"].action?(0,n.createElement)(s.$,{variant:"pro",onClick:()=>(async()=>{await fetch(WCF_ADDONS_ADMIN.ajaxurl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"},body:new URLSearchParams({action:"wcf_active_plugin",action_base:"animation-addons-for-elementor-pro/animation-addons-for-elementor-pro.php",nonce:WCF_ADDONS_ADMIN.nonce})}).then((e=>e.json())).then((e=>{e?.success&&(m.oR.success(e?.data?.message,{position:"top-right"}),window.location.reload())}))})(),className:"w-full mt-6"},(0,n.createElement)("span",{className:"me-2 flex"},(0,n.createElement)(r.Y6N,{size:20})),"Active Plugin"):"Download"===a.integrations.plugins.elements["animation-addon-for-elementorpro"].action?(0,n.createElement)("a",{href:"https://animation-addons.com/",target:"_blank",className:(0,o.cn)((0,s.r)({variant:"pro"}),"w-full mt-6")},(0,n.createElement)("span",{className:"me-2 flex"},(0,n.createElement)(r.Y6N,{size:20})),"Get Pro Version"):(0,n.createElement)(s.$,{variant:"pro",className:"w-full mt-6",onClick:()=>{t(!1),p(!0)}},(0,n.createElement)("span",{className:"me-1.5 flex"},(0,n.createElement)(r.rhy,{size:20})),13===a?.product_status?.item_id?"Deactivate License":"Activate License"))))),(0,n.createElement)(i.A,{open:u,setOpen:p}))}},2580:(e,t,a)=>{a.d(t,{A:()=>f});var n=a(1609),l=a(522),s=a(8613),r=a(7226),c=a(6462),o=a(3179),i=a(1282),d=a(9174),m=a(1910),u=a(1357);const p=({children:e})=>(0,n.createElement)(m.lG,null,(0,n.createElement)(m.zM,{asChild:!0},(0,n.createElement)(d.$,{variant:"link",className:(0,c.cn)("group disabled:opacity-100 p-0",e?"text-icon":"text-[#CACFD8] hover:text-[#CACFD8]"),disabled:!e},(0,n.createElement)(u.pB5,{className:(0,c.cn)(e?"text-icon group-hover:text-brand":"text-[#CACFD8] group-hover:text-[#CACFD8]"),size:20}))),(0,n.createElement)(m.Cf,{className:"w-[428px] max-w-[428px] rounded-xl bg-background pr-0 [&>.wcf-dialog-close-button>svg]:text-[#99A0AE] [&>.wcf-dialog-close-button]:right-4 [&>.wcf-dialog-close-button]:top-4"},(0,n.createElement)(m.c7,{className:"hidden"},(0,n.createElement)(m.L3,null),(0,n.createElement)(m.rr,null)),(0,n.createElement)("div",null,e))),f=({widget:e,slug:t,className:a,updateActiveItem:d,isDisable:m=!1,exSettings:u})=>{const{activated:f}=(0,i.bf)(),[g,b]=(0,n.useState)(!1),h=window.location.hash,x=h?.replace("#","");return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:(0,c.cn)("flex items-center justify-between gap-3 px-4 py-[15px] bg-background rounded-lg  box-border",x===t?"shadow-[0px_0px_0px_2px_rgba(252,104,72,0.25),0px_1px_2px_0px_rgba(10,13,20,0.03)]":"shadow-common-2",a),id:t||""},e?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:(0,c.cn)("flex items-center gap-3",e?.is_upcoming?"opacity-50 pointer-events-none":"")},(0,n.createElement)("div",{className:(0,c.cn)("border rounded-full h-11 w-11 flex justify-center items-center shadow-common text-[20px]",e?.icon)}),(0,n.createElement)("div",{className:"flex flex-col gap-1"},(0,n.createElement)("div",{className:"flex items-center"},(0,n.createElement)("h2",{className:"text-[15px] leading-6 font-medium"},e?.label),e?.is_upcoming?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(l.A,{className:"w-3.5 h-3.5 text-icon-secondary",strokeWidth:2}),(0,n.createElement)(s.E,{variant:"pro"},"COMING")):e?.is_pro?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(l.A,{className:"w-3.5 h-3.5 text-icon-secondary",strokeWidth:2}),(0,n.createElement)(s.E,{variant:"pro"},"PRO")):""),(0,n.createElement)("div",{className:"flex items-center"},(0,n.createElement)("a",{href:e?.doc_url,target:"_blank",className:(0,c.cn)("text-sm",e?.doc_url?"text-label hover:text-text":"pointer-events-none text-[#CACFD8]")},"Documentation"),(0,n.createElement)(l.A,{className:"w-3.5 h-3.5 text-icon-secondary",strokeWidth:2}),(0,n.createElement)("a",{href:e?.demo_url,target:"_blank",className:(0,c.cn)("text-sm",e?.demo_url?"text-label hover:text-text":"pointer-events-none text-[#CACFD8]")},"Preview")))),(0,n.createElement)("div",{className:"flex justify-end items-center gap-2"},u&&(0,n.createElement)("div",null,(0,n.createElement)(p,null,u)),e?.is_upcoming?"":(0,n.createElement)("div",null,(0,n.createElement)(r.d,{disabled:e?.is_upcoming||m,checked:e?.is_active,onCheckedChange:a=>((t,a)=>{e?.is_pro?f.wcf_valid?d&&d({value:t,slug:a}):b(t):d&&d({value:t,slug:a})})(a,t)})))):""),(0,n.createElement)(o.A,{open:g,setOpen:b}))}},9818:(e,t,a)=>{a.d(t,{bq:()=>m,eb:()=>g,gC:()=>f,l6:()=>o,s3:()=>i,yv:()=>d});var n=a(1609),l=a(7049),s=a(854),r=a(6462),c=a(1357);const o=s.bL,i=s.YJ,d=s.WT,m=n.forwardRef((({className:e,children:t,...a},l)=>(0,n.createElement)(s.l9,{ref:l,className:(0,r.cn)("flex h-9 w-full items-center justify-between whitespace-nowrap font-inter font-medium rounded-md border bg-background px-3 py-2 text-sm text-text placeholder:text-text-secondary focus:outline-none data-[state=open]:border data-[state=open]:border-[#99A0AE] disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...a},t,(0,n.createElement)(s.In,{asChild:!0},(0,n.createElement)(c.eQr,{className:"h-4 w-4 text-icon-secondary"})))));m.displayName=s.l9.displayName;const u=n.forwardRef((({className:e,...t},a)=>(0,n.createElement)(s.PP,{ref:a,className:(0,r.cn)("flex cursor-default items-center justify-center py-1",e),...t},(0,n.createElement)(l.Mtm,null))));u.displayName=s.PP.displayName;const p=n.forwardRef((({className:e,...t},a)=>(0,n.createElement)(s.wn,{ref:a,className:(0,r.cn)("flex cursor-default items-center justify-center py-1",e),...t},(0,n.createElement)(l.D3D,null))));p.displayName=s.wn.displayName;const f=n.forwardRef((({className:e,children:t,position:a="popper",...l},c)=>(0,n.createElement)(s.ZL,null,(0,n.createElement)(s.UC,{ref:c,className:(0,r.cn)("wcf-select-content relative z-50 max-h-96 font-inter min-w-[8rem] overflow-hidden rounded-md bg-background text-text shadow-select data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===a&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1.5",e),position:a,...l},(0,n.createElement)(u,null),(0,n.createElement)(s.LM,{className:(0,r.cn)("p-1.5","popper"===a&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")},t),(0,n.createElement)(p,null)))));f.displayName=s.UC.displayName,n.forwardRef((({className:e,...t},a)=>(0,n.createElement)(s.JU,{ref:a,className:(0,r.cn)("px-2 py-1.5 text-sm font-semibold",e),...t}))).displayName=s.JU.displayName;const g=n.forwardRef((({className:e,children:t,...a},l)=>(0,n.createElement)(s.q7,{ref:l,className:(0,r.cn)("relative flex my-[2px] w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none text-text hover:bg-background-secondary hover:rounded-lg focus:bg-secondary focus:text-text data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:text-text data-[state=checked]:font-medium data-[state=checked]:bg-background-secondary data-[state=checked]:rounded-lg",e),...a},(0,n.createElement)("span",{className:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center"},(0,n.createElement)(s.VF,null,(0,n.createElement)(c.s0,{className:"h-4 w-4"}))),(0,n.createElement)(s.p4,null,t))));g.displayName=s.q7.displayName,n.forwardRef((({className:e,...t},a)=>(0,n.createElement)(s.wv,{ref:a,className:(0,r.cn)("-mx-1 my-1 h-px bg-muted",e),...t}))).displayName=s.wv.displayName},7226:(e,t,a)=>{a.d(t,{d:()=>C});var n=a(1609),l=a(9957),s=a(1071),r=a(2133),c=a(1351),o=a(5357),i=a(1769),d=a(2579),m=a(4848),u="Switch",[p,f]=(0,r.A)(u),[g,b]=p(u),h=n.forwardRef(((e,t)=>{const{__scopeSwitch:a,name:r,checked:o,defaultChecked:i,required:u,disabled:p,value:f="on",onCheckedChange:b,form:h,...x}=e,[v,y]=n.useState(null),w=(0,s.s)(t,(e=>y(e))),k=n.useRef(!1),C=!v||h||!!v.closest("form"),[_=!1,A]=(0,c.i)({prop:o,defaultProp:i,onChange:b});return(0,m.jsxs)(g,{scope:a,checked:_,disabled:p,children:[(0,m.jsx)(d.sG.button,{type:"button",role:"switch","aria-checked":_,"aria-required":u,"data-state":N(_),"data-disabled":p?"":void 0,disabled:p,value:f,...x,ref:w,onClick:(0,l.m)(e.onClick,(e=>{A((e=>!e)),C&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())}))}),C&&(0,m.jsx)(E,{control:v,bubbles:!k.current,name:r,value:f,checked:_,required:u,disabled:p,form:h,style:{transform:"translateX(-100%)"}})]})}));h.displayName=u;var x="SwitchThumb",v=n.forwardRef(((e,t)=>{const{__scopeSwitch:a,...n}=e,l=b(x,a);return(0,m.jsx)(d.sG.span,{"data-state":N(l.checked),"data-disabled":l.disabled?"":void 0,...n,ref:t})}));v.displayName=x;var E=e=>{const{control:t,checked:a,bubbles:l=!0,...s}=e,r=n.useRef(null),c=(0,o.Z)(a),d=(0,i.X)(t);return n.useEffect((()=>{const e=r.current,t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,"checked").set;if(c!==a&&n){const t=new Event("click",{bubbles:l});n.call(e,a),e.dispatchEvent(t)}}),[c,a,l]),(0,m.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:a,...s,tabIndex:-1,ref:r,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function N(e){return e?"checked":"unchecked"}var y=h,w=v,k=a(6462);const C=n.forwardRef((({className:e,...t},a)=>(0,n.createElement)(y,{className:(0,k.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brand data-[state=unchecked]:bg-border-secondary",e),...t,ref:a},(0,n.createElement)(w,{className:(0,k.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")}))));C.displayName=y.displayName},7263:(e,t,a)=>{a.d(t,{tU:()=>R,av:()=>I,j7:()=>W,Xi:()=>P});var n=a(1609),l=a(9957),s=a(2133),r=a(6278),c=a(7971),o=a(2579),i=a(1427),d=a(1351),m=a(8723),u=a(4848),p="Tabs",[f,g]=(0,s.A)(p,[r.RG]),b=(0,r.RG)(),[h,x]=f(p),v=n.forwardRef(((e,t)=>{const{__scopeTabs:a,value:n,onValueChange:l,defaultValue:s,orientation:r="horizontal",dir:c,activationMode:p="automatic",...f}=e,g=(0,i.jH)(c),[b,x]=(0,d.i)({prop:n,onChange:l,defaultProp:s});return(0,u.jsx)(h,{scope:a,baseId:(0,m.B)(),value:b,onValueChange:x,orientation:r,dir:g,activationMode:p,children:(0,u.jsx)(o.sG.div,{dir:g,"data-orientation":r,...f,ref:t})})}));v.displayName=p;var E="TabsList",N=n.forwardRef(((e,t)=>{const{__scopeTabs:a,loop:n=!0,...l}=e,s=x(E,a),c=b(a);return(0,u.jsx)(r.bL,{asChild:!0,...c,orientation:s.orientation,dir:s.dir,loop:n,children:(0,u.jsx)(o.sG.div,{role:"tablist","aria-orientation":s.orientation,...l,ref:t})})}));N.displayName=E;var y="TabsTrigger",w=n.forwardRef(((e,t)=>{const{__scopeTabs:a,value:n,disabled:s=!1,...c}=e,i=x(y,a),d=b(a),m=_(i.baseId,n),p=A(i.baseId,n),f=n===i.value;return(0,u.jsx)(r.q7,{asChild:!0,...d,focusable:!s,active:f,children:(0,u.jsx)(o.sG.button,{type:"button",role:"tab","aria-selected":f,"aria-controls":p,"data-state":f?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:m,...c,ref:t,onMouseDown:(0,l.m)(e.onMouseDown,(e=>{s||0!==e.button||!1!==e.ctrlKey?e.preventDefault():i.onValueChange(n)})),onKeyDown:(0,l.m)(e.onKeyDown,(e=>{[" ","Enter"].includes(e.key)&&i.onValueChange(n)})),onFocus:(0,l.m)(e.onFocus,(()=>{const e="manual"!==i.activationMode;f||s||!e||i.onValueChange(n)}))})})}));w.displayName=y;var k="TabsContent",C=n.forwardRef(((e,t)=>{const{__scopeTabs:a,value:l,forceMount:s,children:r,...i}=e,d=x(k,a),m=_(d.baseId,l),p=A(d.baseId,l),f=l===d.value,g=n.useRef(f);return n.useEffect((()=>{const e=requestAnimationFrame((()=>g.current=!1));return()=>cancelAnimationFrame(e)}),[]),(0,u.jsx)(c.C,{present:s||f,children:({present:a})=>(0,u.jsx)(o.sG.div,{"data-state":f?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":m,hidden:!a,id:p,tabIndex:0,...i,ref:t,style:{...e.style,animationDuration:g.current?"0s":void 0},children:a&&r})})}));function _(e,t){return`${e}-trigger-${t}`}function A(e,t){return`${e}-content-${t}`}C.displayName=k;var j=v,S=N,D=w,F=C,O=a(6462);const R=j,W=n.forwardRef((({className:e,...t},a)=>(0,n.createElement)(S,{ref:a,className:(0,O.cn)("inline-flex h-11 items-center self-start rounded-lg bg-background-secondary p-1",e),...t})));W.displayName=S.displayName;const P=n.forwardRef((({className:e,...t},a)=>(0,n.createElement)(D,{ref:a,className:(0,O.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm text-text-secondary font-medium ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none bg-transparent disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-text data-[state=active]:shadow-tab-trigger cursor-pointer",e),...t})));P.displayName=D.displayName;const I=n.forwardRef((({className:e,...t},a)=>(0,n.createElement)(F,{ref:a,className:(0,O.cn)("mt-6 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t})));I.displayName=F.displayName},1683:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(1609),l=a.n(n),s=a(7263),r=a(9174),c=a(2580),o=a(7226),i=a(5882),d=a(6462),m=a(1282),u=a(4721),p=a(555);const f=({searchKey:e,filterKey:t,searchParam:a,urlParams:f,setWidgetCount:g})=>{const{allWidgets:b}=(0,m.XB)(),{updateNotice:h}=(0,m.hN)(),{updateActiveWidget:x,updateActiveGroupWidget:v}=(0,m.hu)(),[E,N]=(0,n.useState)("all"),[y,w]=(0,n.useState)({}),[k,C]=(0,n.useState)(!1),[_,A]=(0,n.useState)([]);(0,n.useEffect)((()=>{if(b){const e=[];for(let t in b.elements){let a={title:b.elements[t].title?.replace("Widgets",""),value:t};e.push(a)}A(e)}}),[b]),(0,n.useEffect)((()=>{if(b)if(e){const e=j();e&&Object.keys(e).length?C(!1):C(!0);const a=(0,d.Yp)(e,t);w(a)}else{C(!1);const e=(0,d.Yp)(b.elements,t);w(e)}}),[b,t,e]),(0,n.useEffect)((()=>{e&&N("all")}),[e]),(0,n.useEffect)((()=>{a&&N(a)}),[a,f]);const j=()=>Object.fromEntries(Object.entries(b.elements).map((([t,a])=>{const n=Object.fromEntries(Object.entries(a.elements||{}).filter((([t,a])=>a.label.toLowerCase().includes(e.toLowerCase()))));return[t,{...a,elements:n}]})).filter((([e,t])=>Object.keys(t.elements).length>0))),S=e=>{v(e)};return(0,n.createElement)(s.tU,{defaultValue:"all",value:E,onValueChange:N},(0,n.createElement)("div",{className:"flex justify-between items-center"},(0,n.createElement)(p.F,{className:"max-w-[465px] xl:max-w-[800px] rounded-lg bg-background-secondary"},(0,n.createElement)(s.j7,{className:"gap-1 h-11"},(0,n.createElement)(s.Xi,{key:"all-widgets_tab",value:"all"},"All Widgets"),_?.map((e=>(0,n.createElement)(s.Xi,{key:e.value,value:e.value},e.title)))),(0,n.createElement)(p.$,{orientation:"horizontal"})),(0,n.createElement)("div",{className:"flex gap-2.5 items-center justify-end"},(0,n.createElement)(r.$,{onClick:()=>(async()=>{const e=(0,d.n4)(b,JSON.parse(JSON.stringify(WCF_ADDONS_ADMIN?.addons_config?.widgets))||{});if(e&&Object.keys(e).length){const e=(new Date).toISOString();h({type:"notice",title:"Widgets Activity Log",description:"Your widget settings have been successfully updated in the following time period.",date:e})}await fetch(WCF_ADDONS_ADMIN.ajaxurl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json"},body:new URLSearchParams({action:"save_settings_with_ajax",fields:JSON.stringify(b),nonce:WCF_ADDONS_ADMIN.nonce,settings:"wcf_save_widgets"})}).then((e=>e.json())).then((e=>{g((t=>({...t,active:e.total}))),u.oR.success("Save Successful",{position:"top-right"})}))})()},"Save Settings"))),(0,n.createElement)(s.av,{key:"all-widgets_content",value:"all",className:"bg-background-secondary p-3 rounded-lg"},k?(0,n.createElement)("div",{className:"bg-background flex justify-center items-center p-5 rounded"},(0,n.createElement)("h3",{className:"text-base font-medium"},"No Result Found")):Object.keys(y)?.map((e=>(0,n.createElement)("div",{className:"mt-3 first:mt-0"},(0,n.createElement)("div",{className:"bg-background flex justify-between items-center p-5 rounded"},(0,n.createElement)("h3",{className:"text-base font-medium"},y[e].title),(0,n.createElement)("div",{className:"flex items-center space-x-2"},(0,n.createElement)(o.d,{id:e,checked:y[e].is_active,onCheckedChange:t=>S({value:t,slug:e})}),(0,n.createElement)(i.J,{htmlFor:e},"Enable All"))),(0,n.createElement)("div",{className:"grid grid-cols-2 xl:grid-cols-3 gap-1 mt-1"},Object.keys(y[e].elements)?.map(((t,a)=>(0,n.createElement)(l().Fragment,{key:`tab_content-${a}`},(0,n.createElement)(c.A,{widget:y[e].elements[t],slug:t,updateActiveItem:x,className:"rounded p-5"})))),Array.from({length:(0,d.Cr)()-(Object.keys(y[e].elements)?.length%(0,d.Cr)()==0?(0,d.Cr)():Object.keys(y[e].elements)?.length%(0,d.Cr)())}).map(((e,t)=>(0,n.createElement)(c.A,{key:`tab_content_empty-${t}`,className:"rounded"})))))))),Object.keys(y)?.map((e=>(0,n.createElement)(s.av,{key:e,value:e,className:"bg-background-secondary p-3 rounded-lg"},(0,n.createElement)("div",null,(0,n.createElement)("div",{className:"bg-background flex justify-between items-center p-5 rounded"},(0,n.createElement)("h3",{className:"text-base font-medium"},y[e].title),(0,n.createElement)("div",{className:"flex items-center space-x-2"},(0,n.createElement)(o.d,{id:e,checked:y[e].is_active,onCheckedChange:t=>S({value:t,slug:e})}),(0,n.createElement)(i.J,{htmlFor:e},"Enable All"))),(0,n.createElement)("div",{className:"grid grid-cols-2 xl:grid-cols-3 gap-1 mt-1"},Object.keys(y[e].elements)?.map(((t,a)=>(0,n.createElement)(l().Fragment,{key:`tab_content-${a}`},(0,n.createElement)(c.A,{widget:y[e].elements[t],slug:t,updateActiveItem:x,className:"rounded p-5"})))),Array.from({length:(0,d.Cr)()-(Object.keys(y[e].elements)?.length%(0,d.Cr)()==0?(0,d.Cr)():Object.keys(y[e].elements)?.length%(0,d.Cr)())}).map(((e,t)=>(0,n.createElement)(c.A,{key:`tab_content_empty-${t}`,className:"rounded"})))))))))};var g=a(1357),b=a(522),h=a(9818),x=a(5072);const v=({filterKey:e,setFilterKey:t,searchKey:a,setSearchKey:l,widgetCount:s})=>{const{allWidgets:r}=(0,m.XB)(),{updateActiveFullWidget:c}=(0,m.hu)();return(0,n.createElement)("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-11 justify-between items-center"},(0,n.createElement)("div",{className:"flex items-center gap-3"},(0,n.createElement)("div",{className:"border rounded-full h-[52px] w-[52px] flex justify-center items-center shadow-common"},(0,n.createElement)(g.xbe,{size:24,color:"#FC6848"})),(0,n.createElement)("div",{className:"flex flex-col gap-1"},(0,n.createElement)("div",{className:"flex items-center"},(0,n.createElement)("h2",{className:"text-[18px] font-medium "},"Widgets")),(0,n.createElement)("div",{className:"flex items-center"},(0,n.createElement)("p",{className:"text-sm text-label "},s?.total," Total Widgets"),(0,n.createElement)(b.A,{className:"w-4 h-4 text-icon-secondary",strokeWidth:4}),(0,n.createElement)("p",{className:"text-sm text-label "},s?.active," Active Widgets")))),(0,n.createElement)("div",{className:"flex justify-between xl:justify-end items-center"},(0,n.createElement)("div",{className:"flex items-center space-x-2"},(0,n.createElement)(o.d,{id:"global-enable-all",checked:r.is_active,onCheckedChange:e=>{c({value:e})}}),(0,n.createElement)(i.J,{htmlFor:"global-enable-all"},"Enable All")),(0,n.createElement)("div",{className:"ml-6 mr-2"},(0,n.createElement)("div",{className:"relative"},(0,n.createElement)(g.uBk,{className:"absolute left-3 top-2.5 h-5 w-5 text-icon-secondary"}),(0,n.createElement)(x.p,{value:a,onChange:e=>l(e.target.value),placeholder:"Search Widgets",className:"px-9"}),a?(0,n.createElement)(g.Qks,{onClick:()=>l(""),className:"absolute right-3 top-2.5 h-5 w-5 cursor-pointer text-icon-secondary"}):"")),(0,n.createElement)("div",null,(0,n.createElement)(h.l6,{value:e,onValueChange:t},(0,n.createElement)(h.bq,{className:"w-[119px] rounded-[10px] h-10"},(0,n.createElement)(h.yv,{placeholder:"Filter"})),(0,n.createElement)(h.gC,{className:"w-[119px] rounded-[10px]",align:"end"},(0,n.createElement)(h.s3,null,(0,n.createElement)(h.eb,{value:"free-pro"},"Free + Pro"),(0,n.createElement)(h.eb,{value:"free"},"Free"),(0,n.createElement)(h.eb,{value:"pro"},"Pro")))))))},E=()=>{const[e,t]=(0,n.useState)(""),[a,l]=(0,n.useState)(""),[s,r]=(0,n.useState)("free-pro"),[c,o]=(0,n.useState)(WCF_ADDONS_ADMIN.widgets),i=new URLSearchParams(window.location.search);return(0,n.useEffect)((()=>{const e=i.get("cTab");e&&l(e);const t=i.get("filter");t&&r(t)}),[i]),(0,n.createElement)("div",{className:"min-h-screen px-8 py-6 border rounded-2xl"},(0,n.createElement)("div",{className:"pb-6 border-b"},(0,n.createElement)(v,{filterKey:s,setFilterKey:r,searchKey:e,setSearchKey:t,widgetCount:c})),(0,n.createElement)("div",{className:"mt-4"},(0,n.createElement)(f,{filterKey:s,searchKey:e,searchParam:a,urlParams:i,setWidgetCount:o})))}}}]);