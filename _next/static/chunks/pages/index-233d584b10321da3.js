(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2264)}])},2264:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ef}});var i=n(5893),o=n(5332),r=n(7696),s=n(4343),l=n(7747),a=n(7239),d=n(6702),x=n(2757),c=n(4e3),p=n(1163);function u(){let e=(0,p.useRouter)();return(0,i.jsxs)(l.xu,{id:"main",position:"relative",overflow:"hidden",minH:"100vh",children:[(0,i.jsx)(l.xu,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundImage:"url('/assets/main/cover_bg.png')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-1"}),(0,i.jsx)(l.xu,{position:"absolute",left:"calc(100vw - 500px)",width:"1000px",height:"100vh",background:"radial-gradient(50% 50% at 50% 50%, #83D0CB 0%, rgba(131, 208, 203, 0.00) 100%)",zIndex:"0",opacity:"0.1",filter:"blur(2px)",display:["none","block"]}),(0,i.jsx)(s.ContentContainer,{children:(0,i.jsx)(a.M,{minH:"100vh",children:(0,i.jsxs)(d.K,{direction:"column",spacing:"32px",textAlign:"center",alignItems:"center",position:"relative",children:[(0,i.jsx)(a.M,{top:"-120px",position:"absolute",zIndex:1,children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"171",height:"256",viewBox:"0 0 203 274",fill:"none",children:[(0,i.jsx)("path",{d:"M18 274V114C18 60.9807 61.093 18 114.251 18C144.423 18 171.352 31.8467 189 53.5165",stroke:"url(#paint0_linear_57_2051)",strokeWidth:"36"}),(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:"paint0_linear_57_2051",x1:"114.251",y1:"18",x2:"114.251",y2:"274",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"white"}),(0,i.jsx)("stop",{offset:"0.596574",stopColor:"white",stopOpacity:"0"}),(0,i.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]})})]})}),(0,i.jsxs)(d.K,{direction:"column",spacing:["16px","12px"],textAlign:"center",children:[(0,i.jsxs)(x.X,{fontWeight:700,style:s.uncageFont.style,textAlign:"center",fontSize:["28px","56px"],textTransform:"uppercase",lineHeight:"normal",children:["Свобода интернета",(0,i.jsx)("br",{}),"без границ"]}),(0,i.jsxs)(c.x,{fontSize:["14px","16px"],color:"#A7A7A7",lineHeight:"normal",children:["Подключитесь к любой точке мира в одно касание.",(0,i.jsx)("br",{}),"Безопасность и скорость без компромиссов."]})]}),(0,i.jsxs)(d.K,{w:["full","auto"],direction:(0,r.Ef)("column-reverse","row","row"),spacing:(0,r.Ef)("16px","16px","24px"),children:[(0,i.jsx)(o.Z,{onClick:()=>(0,r.kI)("why",e),width:["full","auto"],children:"Узнать подробнее"}),(0,i.jsx)(o.Z,{variant:"primary",width:["full","auto"],onClick:()=>e.push("/welcome"),children:"Начать использовать"})]})]})})})]})}var h=n(1827),f=n.n(h),g=n(7294),b=Object.defineProperty,m=(e,t,n)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,C=(e,t,n)=>(m(e,"symbol"!=typeof t?t+"":t,n),n);function j(e){return e.sort((e,t)=>{let n=e.compareDocumentPosition(t);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return -1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(!(n&Node.DOCUMENT_POSITION_DISCONNECTED)&&!(n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC))return 0;throw Error("Cannot sort the given nodes.")})}var w=e=>"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function v(e,t,n){let i=e+1;return n&&i>=t&&(i=0),i}function y(e,t,n){let i=e-1;return n&&i<0&&(i=t),i}var _="undefined"!=typeof window?g.useLayoutEffect:g.useEffect,L=e=>e,k=class{constructor(){C(this,"descendants",new Map),C(this,"register",e=>{if(null!=e)return w(e)?this.registerNode(e):t=>{this.registerNode(t,e)}}),C(this,"unregister",e=>{this.descendants.delete(e);let t=j(Array.from(this.descendants.keys()));this.assignIndex(t)}),C(this,"destroy",()=>{this.descendants.clear()}),C(this,"assignIndex",e=>{this.descendants.forEach(t=>{let n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})}),C(this,"count",()=>this.descendants.size),C(this,"enabledCount",()=>this.enabledValues().length),C(this,"values",()=>Array.from(this.descendants.values()).sort((e,t)=>e.index-t.index)),C(this,"enabledValues",()=>this.values().filter(e=>!e.disabled)),C(this,"item",e=>{if(0!==this.count())return this.values()[e]}),C(this,"enabledItem",e=>{if(0!==this.enabledCount())return this.enabledValues()[e]}),C(this,"first",()=>this.item(0)),C(this,"firstEnabled",()=>this.enabledItem(0)),C(this,"last",()=>this.item(this.descendants.size-1)),C(this,"lastEnabled",()=>{let e=this.enabledValues().length-1;return this.enabledItem(e)}),C(this,"indexOf",e=>{var t,n;return e&&null!=(n=null==(t=this.descendants.get(e))?void 0:t.index)?n:-1}),C(this,"enabledIndexOf",e=>null==e?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(e))),C(this,"next",(e,t=!0)=>{let n=v(e,this.count(),t);return this.item(n)}),C(this,"nextEnabled",(e,t=!0)=>{let n=this.item(e);if(!n)return;let i=v(this.enabledIndexOf(n.node),this.enabledCount(),t);return this.enabledItem(i)}),C(this,"prev",(e,t=!0)=>{let n=y(e,this.count()-1,t);return this.item(n)}),C(this,"prevEnabled",(e,t=!0)=>{let n=this.item(e);if(!n)return;let i=y(this.enabledIndexOf(n.node),this.enabledCount()-1,t);return this.enabledItem(i)}),C(this,"registerNode",(e,t)=>{if(!e||this.descendants.has(e))return;let n=j(Array.from(this.descendants.keys()).concat(e));(null==t?void 0:t.disabled)&&(t.disabled=!!t.disabled);let i={node:e,index:-1,...t};this.descendants.set(e,i),this.assignIndex(n)})}},I=n(5227),E=n(1103),[M,A]=(0,I.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),[N,H]=(0,I.k)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[V,S]=(0,I.k)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[O,F,B,D]=[L(M),()=>L(A()),()=>(function(){let e=(0,g.useRef)(new k);return _(()=>()=>e.current.destroy()),e.current})(),e=>(function(e){let t=A(),[n,i]=(0,g.useState)(-1),o=(0,g.useRef)(null);_(()=>()=>{o.current&&t.unregister(o.current)},[]),_(()=>{if(!o.current)return;let e=Number(o.current.dataset.index);n==e||Number.isNaN(e)||i(e)});let r=e?L(t.register(e)):L(t.register);return{descendants:t,index:n,enabledIndex:t.enabledIndexOf(o.current),register:(0,E.lq)(r,o)}})(e)],T=n(5155),Z=n(5432),[z,K]=(0,I.k)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"}),R=n(6554),P=n(6914),W=(0,R.G)(function(e,t){let{children:n,className:o}=e,{htmlProps:r,...s}=function(e){var t;let{isDisabled:n,isFocusable:i,id:o,...r}=e,{getAccordionItemProps:s,setFocusedIndex:l}=K(),a=(0,g.useRef)(null),d=(0,g.useId)(),x=null!=o?o:d,c=`accordion-button-${x}`,p=`accordion-panel-${x}`;(0,Z.ZK)({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `});let{register:u,index:h,descendants:f}=D({disabled:n&&!i}),{isOpen:b,onChange:m}=s(-1===h?null:h);t={isOpen:b,isDisabled:n},(0,Z.ZK)({condition:t.isOpen&&!!t.isDisabled,message:"Cannot open a disabled accordion item"});let C=(0,g.useCallback)(()=>{null==m||m(!b),l(h)},[h,l,b,m]),j=(0,g.useCallback)(e=>{let t={ArrowDown:()=>{let e=f.nextEnabled(h);null==e||e.node.focus()},ArrowUp:()=>{let e=f.prevEnabled(h);null==e||e.node.focus()},Home:()=>{let e=f.firstEnabled();null==e||e.node.focus()},End:()=>{let e=f.lastEnabled();null==e||e.node.focus()}}[e.key];t&&(e.preventDefault(),t(e))},[f,h]),w=(0,g.useCallback)(()=>{l(h)},[l,h]),v=(0,g.useCallback)(function(e={},t=null){return{...e,type:"button",ref:(0,E.lq)(u,a,t),id:c,disabled:!!n,"aria-expanded":!!b,"aria-controls":p,onClick:(0,Z.v0)(e.onClick,C),onFocus:(0,Z.v0)(e.onFocus,w),onKeyDown:(0,Z.v0)(e.onKeyDown,j)}},[c,n,b,C,w,j,p,u]),y=(0,g.useCallback)(function(e={},t=null){return{...e,ref:t,role:"region",id:p,"aria-labelledby":c,hidden:!b}},[c,b,p]);return{isOpen:b,isDisabled:n,isFocusable:i,onOpen:()=>{null==m||m(!0)},onClose:()=>{null==m||m(!1)},getButtonProps:v,getPanelProps:y,htmlProps:r}}(e),l={...H().container,overflowAnchor:"none"},a=(0,g.useMemo)(()=>s,[s]);return(0,i.jsx)(V,{value:a,children:(0,i.jsx)(P.m.div,{ref:t,...r,className:(0,Z.cx)("chakra-accordion__item",o),__css:l,children:"function"==typeof n?n({isExpanded:!!s.isOpen,isDisabled:!!s.isDisabled}):n})})});W.displayName="AccordionItem";var G=(0,R.G)(function(e,t){let{getButtonProps:n}=S(),o=n(e,t),r={display:"flex",alignItems:"center",width:"100%",outline:0,...H().button};return(0,i.jsx)(P.m.button,{...o,className:(0,Z.cx)("chakra-accordion__button",e.className),__css:r})});G.displayName="AccordionButton";var U=n(6948),X=[.25,.1,.25,1],q={enter:(e,t)=>({...e,delay:"number"==typeof t?t:null==t?void 0:t.enter}),exit:(e,t)=>({...e,delay:"number"==typeof t?t:null==t?void 0:t.exit})},J=n(3114),Q=n(2344),$=e=>null!=e&&parseInt(e.toString(),10)>0,Y={exit:{height:{duration:.2,ease:X},opacity:{duration:.3,ease:X}},enter:{height:{duration:.3,ease:X},opacity:{duration:.4,ease:X}}},ee={exit:({animateOpacity:e,startingHeight:t,transition:n,transitionEnd:i,delay:o})=>{var r;return{...e&&{opacity:$(t)?1:0},height:t,transitionEnd:null==i?void 0:i.exit,transition:null!=(r=null==n?void 0:n.exit)?r:q.exit(Y.exit,o)}},enter:({animateOpacity:e,endingHeight:t,transition:n,transitionEnd:i,delay:o})=>{var r;return{...e&&{opacity:1},height:t,transitionEnd:null==i?void 0:i.enter,transition:null!=(r=null==n?void 0:n.enter)?r:q.enter(Y.enter,o)}}},et=(0,g.forwardRef)((e,t)=>{let{in:n,unmountOnExit:o,animateOpacity:r=!0,startingHeight:s=0,endingHeight:l="auto",style:a,className:d,transition:x,transitionEnd:c,...p}=e,[u,h]=(0,g.useState)(!1);(0,g.useEffect)(()=>{let e=setTimeout(()=>{h(!0)});return()=>clearTimeout(e)},[]),(0,Z.ZK)({condition:Number(s)>0&&!!o,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});let f=parseFloat(s.toString())>0,b={startingHeight:s,endingHeight:l,animateOpacity:r,transition:u?x:{enter:{duration:0}},transitionEnd:{enter:null==c?void 0:c.enter,exit:o?null==c?void 0:c.exit:{...null==c?void 0:c.exit,display:f?"block":"none"}}},m=!o||n,C=n||o?"enter":"exit";return(0,i.jsx)(J.M,{initial:!1,custom:b,children:m&&(0,i.jsx)(Q.E.div,{ref:t,...p,className:(0,Z.cx)("chakra-collapse",d),style:{overflow:"hidden",display:"block",...a},custom:b,variants:ee,initial:!!o&&"exit",animate:C,exit:"exit"})})});et.displayName="Collapse";var en=n(7030),ei=n(3179),eo=(0,R.G)(function({children:e,reduceMotion:t,...n},o){let r=(0,en.jC)("Accordion",n),{htmlProps:s,descendants:l,...a}=function(e){let{onChange:t,defaultIndex:n,index:i,allowMultiple:o,allowToggle:r,...s}=e;(function(e){let t=e.index||e.defaultIndex,n=null!=t&&!Array.isArray(t)&&e.allowMultiple;(0,Z.ZK)({condition:!!n,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`})})(e),(0,Z.ZK)({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"});let l=B(),[a,d]=(0,g.useState)(-1);(0,g.useEffect)(()=>()=>{d(-1)},[]);let[x,c]=function(e){let{value:t,defaultValue:n,onChange:i,shouldUpdate:o=(e,t)=>e!==t}=e,r=(0,T.W)(i),s=(0,T.W)(o),[l,a]=(0,g.useState)(n),d=void 0!==t,x=d?t:l,c=(0,T.W)(e=>{let t="function"==typeof e?e(x):e;s(x,t)&&(d||a(t),r(t))},[d,r,x,s]);return[x,c]}({value:i,defaultValue:()=>o?null!=n?n:[]:null!=n?n:-1,onChange:t});return{index:x,setIndex:c,htmlProps:s,getAccordionItemProps:e=>{let t=!1;return null!==e&&(t=Array.isArray(x)?x.includes(e):x===e),{isOpen:t,onChange:t=>{null!==e&&(o&&Array.isArray(x)?c(t?x.concat(e):x.filter(t=>t!==e)):t?c(e):r&&c(-1))}}},focusedIndex:a,setFocusedIndex:d,descendants:l}}((0,ei.Lr)(n)),d=(0,g.useMemo)(()=>({...a,reduceMotion:!!t}),[a,t]);return(0,i.jsx)(O,{value:l,children:(0,i.jsx)(z,{value:d,children:(0,i.jsx)(N,{value:r,children:(0,i.jsx)(P.m.div,{ref:o,...s,className:(0,Z.cx)("chakra-accordion",n.className),__css:r.root,children:e})})})})});eo.displayName="Accordion";var er=n(2883);function es(e){let{question:t,answer:n}=e;return(0,i.jsx)(W,{w:"full",borderTop:"none",children:e=>{let{isExpanded:o}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(G,{borderTop:"none",p:0,paddingInline:0,w:"full",outline:"none",children:(0,i.jsxs)(d.K,{w:"full",bgColor:"#191919",border:"1px solid",borderColor:o?"#BFFFFF":"#252525",borderRadius:"24px",p:"24px",textAlign:"start",_hover:{bgColor:"#191919",color:"#bfffff"},direction:"column",spacing:"4px",position:"relative",className:f().button,children:[(0,i.jsx)(l.xu,{w:"370px",h:"370px",position:"absolute",left:"-238px",top:"-238px",borderRadius:"999px",opacity:o?"0.1":"0",className:f().shadow,background:"radial-gradient(50% 50% at 50% 50%, #83D0CB 0%, rgba(131, 208, 203, 0.00) 100%)",filter:"blur(2px)"}),(0,i.jsx)(x.X,{className:[o?f()["question-expanded"]:void 0].join(" "),fontSize:(0,r.Ef)("16px","18px","24px"),fontWeight:700,lineHeight:"normal",children:t}),(0,i.jsxs)(a.M,{position:"absolute",w:"36px",h:"36px",top:"8px",right:"8px",className:[f().arrow,o?f()["arrow-expanded"]:void 0].join(" "),bgColor:"#242424",borderRadius:"999px",p:"12px",children:[(0,i.jsx)(l.xu,{w:"523px",h:"523px",position:"absolute",left:"-244px",top:"-244px",borderRadius:"999px",opacity:o?"0.1":"0",className:f().shadow,background:"radial-gradient(50% 50% at 50% 50%, #83D0CB 0%, rgba(131, 208, 203, 0.00) 100%)",filter:"blur(2px)",zIndex:2}),(0,i.jsx)(U.J,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",w:"24px",h:"24px",children:(0,i.jsx)("path",{d:"M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"})})]}),(0,i.jsx)(et,{in:o,animateOpacity:!0,children:(0,i.jsx)(c.x,{color:"#BFFFFF",fontWeight:400,fontSize:"16px",children:n})})]})})})}})}function el(){return(0,i.jsx)(l.xu,{id:"faq",position:"relative",overflow:"hidden",children:(0,i.jsx)(s.ContentContainer,{children:(0,i.jsx)(a.M,{w:"full",h:"full",mt:(0,r.Ef)("92px","92px","164px"),mb:(0,r.Ef)("92px","92px","164px"),children:(0,i.jsxs)(d.K,{direction:"column",spacing:(0,r.Ef)("32px","32px","24px"),alignItems:"center",textAlign:"center",w:"full",children:[(0,i.jsx)(x.X,{fontWeight:700,style:s.uncageFont.style,textAlign:"center",fontSize:(0,r.Ef)("22px","36px","48px"),textTransform:"uppercase",lineHeight:"normal",children:"Частые вопросы"}),(0,i.jsx)(eo,{w:"full",alignItems:"center",justifyContent:"center",display:"flex",allowToggle:!0,children:(0,i.jsxs)(d.K,{maxW:(0,r.Ef)("full","652px","787px"),w:"full",direction:"column",spacing:"16px",children:[(0,i.jsx)(es,{question:"Как подключиться к NotBlockNet?",answer:"Для подключения используйте нашего Telegram бота или наше расширение для браузера."}),(0,i.jsx)(es,{question:"Безопасен ли ваш сервис?",answer:"Да, мы не храним никаких логов и используем современные технологии шифрования для защиты вашего интернет-трафика и обеспечения анонимности."}),(0,i.jsx)(es,{question:"Сколько устройств я могу подключить?",answer:"Количество устройств для подключения неограниченно."}),(0,i.jsx)(es,{question:"Что делать, если у меня проблемы с подключением?",answer:"Мы рекомендуем вам обратиться в нашу службу поддержки, ссылка на поддержку есть внизу страницы."}),(0,i.jsx)(es,{question:"Есть ли у вас бесплатный пробный период?",answer:'Да, мы даем пробный период на 1 час. Активировать его можно в разделе "Подписка" в Telegram боте.'}),(0,i.jsx)(a.M,{border:"1px solid #252525",borderRadius:"24px",w:"full",p:"24px",children:(0,i.jsxs)(d.K,{direction:"column",spacing:"8px",children:[(0,i.jsx)(c.x,{fontSize:"16px",lineHeight:"normal",fontWeight:400,children:"Не нашли ответ на нужный вопрос?"}),(0,i.jsx)(er.r,{color:"#BFFFFF",fontWeight:500,fontSize:"16px",href:"https://t.me/NotBlockNetSupportBot",isExternal:!0,children:"Обратитесь в нашу поддержку"})]})})]})})]})})})})}var ea=n(2177);function ed(e){let{title:t,description:n,icon:o,background:s,opacity:p="0.1",backgroundBlendMode:u}=e;return(0,i.jsxs)(d.K,{direction:"column",spacing:"auto",minH:["auto","247px"],maxW:["full","full","652px","652px","427px"],p:"16px",transitionProperty:"var(--notblocknet-transition-property-common)",transitionDuration:"350ms",userSelect:"none",borderRadius:["12px","24px"],border:"1px solid",borderColor:"#252525",backgroundColor:"#191919",w:"full",h:"full",alignItems:"start",textAlign:"start",position:"relative",overflow:"hidden",backgroundBlendMode:u,_hover:{borderColor:"#434343"},children:[(0,i.jsx)(l.xu,{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"url(".concat(s,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",zIndex:0,opacity:p,borderRadius:"24px"}),(0,i.jsx)(U.J,{w:"128px",h:"128px",viewBox:"0 0 24 24",fill:"currentColor",color:"#83D0CB",position:"absolute",right:"-36px",top:"-36px",opacity:"0.1",children:o}),(0,i.jsx)(a.M,{bgColor:"rgba(255, 255, 255, 0.10)",borderRadius:"999px",w:"56px",h:"56px",mb:"24px",children:(0,i.jsx)(U.J,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"24px",height:"24px",children:o})}),(0,i.jsxs)(d.K,{mt:"auto",direction:"column",spacing:"4px",children:[(0,i.jsx)(x.X,{fontSize:(0,r.Ef)("22px","24px","32px"),fontWeight:700,children:t}),(0,i.jsx)(c.x,{fontSize:"16px",fontWeight:400,color:"#A7A7A7",children:n})]})]})}function ex(){return(0,i.jsxs)(l.xu,{id:"features",position:"relative",overflow:"hidden",children:[(0,i.jsx)(l.xu,{position:"absolute",right:"-250px",bottom:"-250px",width:"500px",height:"500px",background:"radial-gradient(50% 50% at 50% 50%, #83D0CB 0%, rgba(131, 208, 203, 0.00) 100%)",zIndex:"0",filter:"blur(2px)",opacity:"0.1"}),(0,i.jsx)(l.xu,{position:"absolute",left:"-250px",top:"-250px",width:"500px",height:"500px",background:"radial-gradient(50% 50% at 50% 50%, #83D0CB 0%, rgba(131, 208, 203, 0.00) 100%)",zIndex:"0",filter:"blur(2px)",opacity:"0.1"}),(0,i.jsx)(s.ContentContainer,{children:(0,i.jsx)(a.M,{w:"full",h:"full",mt:(0,r.Ef)("92px","92px","164px"),mb:(0,r.Ef)("92px","92px","164px"),children:(0,i.jsxs)(d.K,{direction:"column",spacing:(0,r.Ef)("32px","32px","24px"),alignItems:"center",textAlign:"center",w:"full",children:[(0,i.jsx)(x.X,{fontWeight:700,style:s.uncageFont.style,textAlign:"center",fontSize:(0,r.Ef)("22px","36px","48px"),textTransform:"uppercase",lineHeight:"normal",children:"Наши преимущества"}),(0,i.jsxs)(ea.M,{columns:(0,r.Ef)(1,1,2),spacing:"16px",children:[(0,i.jsx)(ed,{title:"Безлимитный трафик",description:"Наслаждайтесь интернетом без ограничений по трафику",icon:(0,i.jsx)("path",{d:"M11 7V4C11 3.44772 11.4477 3 12 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V8C2 7.44772 2.44772 7 3 7H11ZM5 16V18H10V16H5ZM14 16V18H19V16H14ZM14 13V15H19V13H14ZM14 10V12H19V10H14ZM5 13V15H10V13H5Z"}),background:"/assets/main/features/1.png"}),(0,i.jsx)(ed,{title:"Высокая скорость",description:"Используйте стабильное соединение с максимальной скоростью передачи данных",icon:(0,i.jsx)("path",{d:"M12 13.3334L2.77735 19.4818C2.54759 19.635 2.23715 19.5729 2.08397 19.3432C2.02922 19.261 2 19.1645 2 19.0658V4.93433C2 4.65818 2.22386 4.43433 2.5 4.43433C2.59871 4.43433 2.69522 4.46355 2.77735 4.5183L12 10.6667V4.93433C12 4.65818 12.2239 4.43433 12.5 4.43433C12.5987 4.43433 12.6952 4.46355 12.7774 4.5183L23.376 11.584C23.6057 11.7372 23.6678 12.0477 23.5146 12.2774C23.478 12.3323 23.4309 12.3795 23.376 12.4161L12.7774 19.4818C12.5476 19.635 12.2372 19.5729 12.084 19.3432C12.0292 19.261 12 19.1645 12 19.0658V13.3334Z"}),background:"/assets/main/features/2.png",opacity:"0.05",backgroundBlendMode:"hard-light"}),(0,i.jsx)(ed,{title:"Ключи никогда не сбрасываются",description:"Ваш доступ к сети всегда активен, никакого сброса ключей",icon:(0,i.jsx)("path",{d:"M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17ZM11 14V18H13V14H11Z"}),background:"/assets/main/features/3.png",opacity:"0.03"}),(0,i.jsx)(ed,{title:"Неограниченное количество устройств",description:"Подключайте к сети сразу все свои устройства без ограничений",icon:(0,i.jsx)("path",{d:"M19 6H11C10.4477 6 10 6.44772 10 7V20H4C3.44772 20 3 19.5523 3 19V3C3 2.44772 3.44772 2 4 2H18C18.5523 2 19 2.44772 19 3V6ZM13 8H21C21.5523 8 22 8.44772 22 9V21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21V9C12 8.44772 12.4477 8 13 8Z"}),background:"/assets/main/features/4.png",opacity:"0.03",backgroundBlendMode:"soft-light"})]})]})})})]})}function ec(e){let{title:t,description:n,icon:o,numberIcon:s,isPrimary:l}=e;return(0,i.jsxs)(d.K,{direction:"row",spacing:"24px",alignItems:"center",background:l?"linear-gradient(267deg, #BFFFFF -0.95%, #83D0CB 99.13%)":"#191919",border:l?"1px solid #83D0CB":"1px solid #252525",borderRadius:"24px",p:(0,r.Ef)("12px","24px","24px"),position:"relative",minW:(0,r.Ef)("full","806px"),boxShadow:l?"0px 0px 48px 0px rgba(131, 208, 203, 0.16)":void 0,children:[(0,i.jsx)(a.M,{w:"48px",h:"48px",p:"12px",bgColor:l?"rgba(0, 0, 0, 0.08)":"#242424",borderRadius:"999px",position:"absolute",right:"8px",top:"8px",display:(0,r.Ef)("none","flex","flex"),children:(0,i.jsx)(U.J,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"24px",color:l?"#000000":void 0,height:"24px",children:s})}),(0,i.jsx)(a.M,{w:"56px",h:"56px",p:"16px",bgColor:l?"#191919":"rgba(255, 255, 255, 0.10)",borderRadius:"999px",children:(0,i.jsx)(U.J,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",width:"24px",height:"24px",children:o})}),(0,i.jsxs)(d.K,{textAlign:"start",direction:"column",spacing:"4px",children:[(0,i.jsx)(x.X,{fontSize:(0,r.Ef)("22px","24px","32px"),color:l?"#191919":void 0,fontWeight:700,lineHeight:"normal",children:t}),(0,i.jsx)(c.x,{fontSize:"16px",fontWeight:400,lineHeight:"normal",color:l?"#191919":"#A7A7A7",children:n})]})]})}function ep(){return(0,i.jsxs)(l.xu,{id:"how",position:"relative",overflow:"hidden",children:[(0,i.jsx)(l.xu,{position:"absolute",right:"-250px",top:"-250px",width:"500px",height:"500px",background:"radial-gradient(50% 50% at 50% 50%, #83D0CB 0%, rgba(131, 208, 203, 0.00) 100%)",zIndex:"0",filter:"blur(2px)",opacity:"0.1"}),(0,i.jsx)(s.ContentContainer,{children:(0,i.jsx)(a.M,{w:"full",h:"full",mt:(0,r.Ef)("92px","92px","164px"),mb:(0,r.Ef)("92px","92px","164px"),children:(0,i.jsxs)(d.K,{direction:"column",spacing:(0,r.Ef)("32px","32px","24px"),alignItems:"center",textAlign:"center",w:"full",children:[(0,i.jsx)(x.X,{fontWeight:700,style:s.uncageFont.style,textAlign:"center",fontSize:(0,r.Ef)("22px","36px","48px"),textTransform:"uppercase",lineHeight:"normal",children:"Как это работает?"}),(0,i.jsxs)(d.K,{direction:"column",spacing:"0px",children:[(0,i.jsx)(ec,{title:"Запуск Телеграм-бота",description:"Откройте Телеграм и начните общение с нашим ботом для подключения",icon:(0,i.jsx)("path",{d:"M13 4.05493C17.5 4.55237 21 8.36745 21 13V22H3V13C3 8.36745 6.50005 4.55237 11 4.05493V1H13V4.05493ZM12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18ZM12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10C13.6569 10 15 11.3431 15 13C15 14.6569 13.6569 16 12 16ZM12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z"}),numberIcon:(0,i.jsx)("path",{d:"M14 1.5V22H12V3.704L7.5 4.91V2.839L12.5 1.5H14Z"})}),(0,i.jsx)(l.xu,{h:"24px",w:"full",position:"relative",children:(0,i.jsx)(l.xu,{display:(0,r.Ef)("none","block","block"),zIndex:2,h:"34px",w:"4px",bgColor:"#242424",position:"absolute",right:"31px"})}),(0,i.jsx)(ec,{title:"Выбор страны",description:"Выберите нужное местоположение для безопасного подключения",icon:(0,i.jsx)("path",{d:"M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"}),numberIcon:(0,i.jsx)("path",{d:"M16.0002 7.5C16.0002 5.29086 14.2094 3.5 12.0002 3.5C9.7911 3.5 8.00024 5.29086 8.00024 7.5H6.00024C6.00024 4.18629 8.68653 1.5 12.0002 1.5C15.314 1.5 18.0002 4.18629 18.0002 7.5C18.0002 8.93092 17.4993 10.2448 16.6633 11.276L9.344 19.9991L18.0002 20V22H6.00024L6 20.8731L15.0642 10.071C15.6485 9.37595 16.0002 8.47905 16.0002 7.5Z"})}),(0,i.jsx)(l.xu,{h:"24px",w:"full",position:"relative",children:(0,i.jsx)(l.xu,{display:(0,r.Ef)("none","block","block"),zIndex:2,h:"34px",w:"4px",bgColor:"#242424",position:"absolute",right:"31px"})}),(0,i.jsx)(ec,{title:"Подключение одним нажатием",description:"Нажмите на кнопку в боте, чтобы мгновенно подключиться к VPN",icon:(0,i.jsx)("path",{d:"M17 14H12.6586C11.8349 16.3304 9.61244 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C9.61244 6 11.8349 7.66962 12.6586 10H23V14H21V18H17V14ZM7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z"}),numberIcon:(0,i.jsx)("path",{d:"M18.0001 2V3.36217L12.8087 9.54981C16.0169 9.94792 18.5001 12.684 18.5001 16C18.5001 19.5899 15.5899 22.5 12.0001 22.5C8.95434 22.5 6.39789 20.4052 5.69287 17.5778L7.63351 17.0922C8.12156 19.0497 9.89144 20.5 12.0001 20.5C14.4853 20.5 16.5001 18.4853 16.5001 16C16.5001 13.5147 14.4853 11.5 12.0001 11.5C11.2795 11.5 10.5985 11.6694 9.99465 11.9705L9.76692 12.0923L9.07705 10.8852L14.8551 3.99917L6.50006 4V2H18.0001Z"})}),(0,i.jsx)(l.xu,{h:"24px",w:"full",position:"relative",children:(0,i.jsx)(l.xu,{display:(0,r.Ef)("none","block","block"),zIndex:2,h:"34px",w:"4px",background:"linear-gradient(to bottom, rgba(36,36,36,1) 0%, rgba(174,234,233,1) 100%)",position:"absolute",right:"31px"})}),(0,i.jsx)(ec,{title:"Безопасный и свободный интернет",description:"Наслаждайтесь защищённым и анонимным интернетом без ограничений",icon:(0,i.jsx)("path",{d:"M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598Z"}),numberIcon:(0,i.jsx)("path",{d:"M16.0001 1.5L16 16H19.0001V18H16L16.0001 22H14.0001L14 18H4V16.898L14.0001 1.5H16.0001ZM14 16V5.171L6.968 16H14Z"}),isPrimary:!0})]})]})})})]})}function eu(){return(0,i.jsx)(l.xu,{id:"referral",position:"relative",overflow:"hidden",children:(0,i.jsx)(s.ContentContainer,{children:(0,i.jsx)(a.M,{w:"full",h:"full",mt:(0,r.Ef)("92px","92px","164px"),mb:(0,r.Ef)("92px","92px","164px"),children:(0,i.jsxs)(d.K,{direction:"column",spacing:"36px",alignItems:"center",textAlign:"center",w:"full",children:[(0,i.jsxs)(U.J,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",w:"138px",h:"138px",children:[(0,i.jsx)("defs",{children:(0,i.jsxs)("linearGradient",{id:"gradient1",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,i.jsx)("stop",{offset:"0%",style:{stopColor:"rgba(191,255,255,1)",stopOpacity:1}}),(0,i.jsx)("stop",{offset:"100%",style:{stopColor:"rgba(131,208,203,1)",stopOpacity:1}})]})}),(0,i.jsx)("path",{d:"M14 14.252V22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM18.5858 17L16.7574 15.1716L18.1716 13.7574L22.4142 18L18.1716 22.2426L16.7574 20.8284L18.5858 19H15V17H18.5858Z",fill:"url(#gradient1)"})]}),(0,i.jsxs)(d.K,{direction:"column",alignItems:"center",textAlign:"center",spacing:"16px",children:[(0,i.jsx)(x.X,{fontWeight:700,style:s.uncageFont.style,textAlign:"center",fontSize:(0,r.Ef)("22px","36px","48px"),textTransform:"uppercase",lineHeight:"normal",children:"Неделя бесплатно"}),(0,i.jsxs)(c.x,{color:"#A7A7A7",lineHeight:"normal",fontWeight:400,fontSize:"16px",children:["Приглашай друзей и получай за каждый оформленный другом месяц",(0,i.jsx)("br",{}),"подписки - дополнительную неделю к своей подписке!"]})]})]})})})})}function eh(){return(0,i.jsxs)(l.xu,{id:"why",position:"relative",height:(0,r.Ef)("auto","auto","100vh"),pb:(0,r.Ef)("92px","113px","0px"),overflow:"hidden",children:[(0,i.jsx)(l.xu,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundImage:"url('/assets/main/storm_bg.png')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",zIndex:"-1"}),(0,i.jsx)(l.xu,{position:"absolute",left:"-250px",bottom:"-250px",width:"500px",height:"500px",background:"radial-gradient(50% 50% at 50% 50%, #83D0CB 0%, rgba(131, 208, 203, 0.00) 100%)",zIndex:"0",filter:"blur(2px)",opacity:"0.1"}),(0,i.jsx)(l.xu,{position:"absolute",left:"calc(100vw - 250px)",top:"-250px",width:"500px",height:"500px",background:"radial-gradient(50% 50% at 50% 50%, #83D0CB 0%, rgba(131, 208, 203, 0.00) 100%)",zIndex:"0",filter:"blur(2px)",opacity:"0.1"}),(0,i.jsxs)(d.K,{direction:"column",spacing:"32px",textAlign:"center",alignItems:"center",children:[(0,i.jsxs)("svg",{width:"147",height:"259",viewBox:"0 0 147 259",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsxs)("g",{filter:"url(#filter0_bd_13_834)",children:[(0,i.jsx)("path",{d:"M50.2036 75.9127L87.4851 206.239L102.516 100.486L132.414 107.777L109.79 42.7736L142.611 49.4652L127.634 -114H4L85.5733 20.7871L54.9833 11.5464L87.4851 83.2416L50.2036 75.9127Z",fill:"url(#paint0_linear_13_834)","shape-rendering":"crispEdges"}),(0,i.jsx)("path",{d:"M55.8937 12.3437L85.4287 21.2657L86.6753 21.6423L86.001 20.5282L4.88704 -113.5H127.178L142.052 48.8409L109.89 42.2837L109.029 42.1082L109.318 42.938L131.64 107.074L102.635 100.001L102.099 99.8701L102.021 100.416L87.3204 203.845L50.9091 76.561L87.3887 83.7322L88.3414 83.9195L87.9405 83.0352L55.8937 12.3437Z",stroke:"url(#paint1_linear_13_834)","shape-rendering":"crispEdges"})]}),(0,i.jsx)("path",{d:"M83.7022 159.469L74.3946 155.304L56.7128 162.055L40.0556 199.285L46.8061 216.967L56.1137 221.131",stroke:"white","stroke-width":"16"}),(0,i.jsx)("path",{d:"M73.6135 243.908L81.7538 250.049L100.498 247.425L125.06 214.864L122.436 196.12L114.296 189.979",stroke:"white","stroke-width":"16"}),(0,i.jsx)("path",{d:"M100.726 159.123L100.305 146.019",stroke:"white","stroke-width":"12"}),(0,i.jsx)("path",{d:"M107.879 175.618L123.593 166.242",stroke:"white","stroke-width":"12"}),(0,i.jsx)("path",{d:"M117.438 150.072L128.852 137.307",stroke:"white","stroke-width":"12"}),(0,i.jsx)("rect",{x:"79.8906",y:"185.485",width:"21.6679",height:"21.6679",transform:"rotate(29.8595 79.8906 185.485)",fill:"white"}),(0,i.jsx)("path",{d:"M83.625 195.494L82.6091 186.271L89.397 190.311L86.813 197.653L81.4662 198.683L79.8287 202.606L79.8955 198.415L83.625 195.494Z",fill:"#0F0F0F"}),(0,i.jsxs)("defs",{children:[(0,i.jsxs)("filter",{id:"filter0_bd_13_834",x:"-64.5",y:"-182.5",width:"275.611",height:"457.239",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB",children:[(0,i.jsx)("feFlood",{"flood-opacity":"0",result:"BackgroundImageFix"}),(0,i.jsx)("feGaussianBlur",{in:"BackgroundImageFix",stdDeviation:"34.25"}),(0,i.jsx)("feComposite",{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_13_834"}),(0,i.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,i.jsx)("feOffset",{dy:"4"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"2"}),(0,i.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,i.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),(0,i.jsx)("feBlend",{mode:"normal",in2:"effect1_backgroundBlur_13_834",result:"effect2_dropShadow_13_834"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect2_dropShadow_13_834",result:"shape"})]}),(0,i.jsxs)("linearGradient",{id:"paint0_linear_13_834",x1:"78.5631",y1:"205.92",x2:"72.5759",y2:"-114",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{offset:"0.171171","stop-color":"#83D0CB","stop-opacity":"0"}),(0,i.jsx)("stop",{offset:"1","stop-color":"#83D0CB"})]}),(0,i.jsxs)("linearGradient",{id:"paint1_linear_13_834",x1:"78.5631",y1:"205.92",x2:"72.5759",y2:"-114",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{"stop-color":"#83D0CB","stop-opacity":"0"}),(0,i.jsx)("stop",{offset:"1","stop-color":"#83D0CB"})]})]})]}),(0,i.jsxs)(d.K,{direction:"column",spacing:["16px","12px"],textAlign:"center",alignItems:"center",children:[(0,i.jsxs)(x.X,{fontWeight:700,style:s.uncageFont.style,textAlign:"center",fontSize:["22px","48px"],textTransform:"uppercase",lineHeight:"normal",children:["Молниеносно обходим",(0,i.jsx)("br",{}),"любые блокировки"]}),(0,i.jsx)(c.x,{fontSize:["16px"],color:"#A7A7A7",lineHeight:"normal",children:"Как со стороны сервисов, так и от государственных блокировок"})]})]})]})}function ef(){return(0,i.jsxs)(d.K,{direction:"column",spacing:0,children:[(0,i.jsx)(u,{}),(0,i.jsx)(eh,{}),(0,i.jsx)(ex,{}),(0,i.jsx)(ep,{}),(0,i.jsx)(eu,{}),(0,i.jsx)(el,{})]})}},1827:function(e){e.exports={button:"FAQ_button___cUlY","question-expanded":"FAQ_question-expanded__n_edu",arrow:"FAQ_arrow__9eLvi","arrow-expanded":"FAQ_arrow-expanded__zV5eJ",shadow:"FAQ_shadow__nchCJ"}},2177:function(e,t,n){"use strict";n.d(t,{M:function(){return x}});var i=n(6554),o=n(6914),r=n(5893),s=(0,i.G)(function(e,t){let{templateAreas:n,gap:i,rowGap:s,columnGap:l,column:a,row:d,autoFlow:x,autoRows:c,templateRows:p,autoColumns:u,templateColumns:h,...f}=e;return(0,r.jsx)(o.m.div,{ref:t,__css:{display:"grid",gridTemplateAreas:n,gridGap:i,gridRowGap:s,gridColumnGap:l,gridAutoColumns:u,gridColumn:a,gridRow:d,gridAutoFlow:x,gridAutoRows:c,gridTemplateRows:p,gridTemplateColumns:h},...f})});s.displayName="Grid";var l=n(8940),a=n(7634),d=n(3951),x=(0,i.G)(function(e,t){let{columns:n,spacingX:i,spacingY:o,spacing:x,minChildWidth:c,...p}=e,u=(0,l.F)(),h=c?(0,d.XQ)(c,e=>{let t=(0,a.LP)("sizes",e,"number"==typeof e?`${e}px`:e)(u);return null===e?null:`repeat(auto-fit, minmax(${t}, 1fr))`}):(0,d.XQ)(n,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`);return(0,r.jsx)(s,{ref:t,gap:x,columnGap:i,rowGap:o,templateColumns:h,...p})});x.displayName="SimpleGrid"}},function(e){e.O(0,[888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);