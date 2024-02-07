"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{8492:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(5893);n(7294);var r=n(1163),l=n(1664),u=n.n(l),i=n(7369);function o(e){let t=e.link?e.link:"/",n=(0,r.useRouter)(),l=e=>{n.push("/content/"+e)};return(0,a.jsxs)("header",{children:[(0,a.jsxs)("div",{id:"search-logo",children:[(0,a.jsx)(u(),{href:"/",children:(0,a.jsx)("span",{className:"symbol",children:(0,a.jsx)("img",{src:"https://raw.githubusercontent.com/jonkiky/edu/master/public/images/logo.png",alt:""})})}),(0,a.jsx)(u(),{href:t,children:(0,a.jsx)("span",{className:"title",children:(0,a.jsx)("h2",{children:"Kiddie Discovery"})})}),(0,a.jsx)("span",{className:"search-input",children:(0,a.jsx)(i.Z,{options:[{name:"Mathematical Olympiad",value:"Mathematical Olympiad"},{name:"Computing_Olympiad",value:"Computing_Olympiad"},{name:"Go",value:"Go"},{name:"Chess",value:"Chess"},{name:"Poker",value:"Poker"},{name:"Ukulele",value:"Ukulele"},{name:"Jazz Dance",value:"Jazz Dance"},{name:"Painting",value:"Painting"},{name:"Jewelry Maker",value:"Jewelry Maker"},{name:"Cooking",value:"Cooking"},{name:"Drawing",value:"Drawing"},{name:"American Football",value:"American Football"},{name:"Accordion",value:"Accordion"},{name:"Archery",value:"Archery"},{name:"Ballet",value:"Ballet"},{name:"Basketball",value:"Basketball"},{name:"Beauty Pageant",value:"Beauty Pageant"},{name:"Fencing",value:"Fencing"},{name:"Film Maker",value:"Film Maker"},{name:"Formula 1 Racing",value:"Formula 1 Racing"},{name:"Golf",value:"Golf"},{name:"Gymnastics",value:"Gymnastics"},{name:"Karate",value:"Karate"},{name:"Photographer",value:"Photographer"},{name:"Street Dance",value:"Street Dance"},{name:"Taekwondo",value:"Taekwondo"},{name:"Swimming",value:"Swimming"}],name:"activities",placeholder:"Find A Development Pathway",emptyMessage:" No thing founded",search:!0,onChange:e=>l(e)})})]}),(0,a.jsx)("div",{className:"line"})]})}n(4684)},4660:function(e,t,n){let a;n.d(t,{OK:function(){return R},td:function(){return x},x4:function(){return P},mQ:function(){return w}});var r=n(7294);function l(e){return t=>!!t.type&&t.type.tabsRole===e}let u=l("Tab"),i=l("TabList"),o=l("TabPanel");function c(e,t){return r.Children.map(e,e=>null===e?null:u(e)||i(e)||o(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?(0,r.cloneElement)(e,{...e.props,children:c(e.props.children,t)}):e)}var s=function(){for(var e,t,n=0,a="",r=arguments.length;n<r;n++)(e=arguments[n])&&(t=function e(t){var n,a,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t)){var l=t.length;for(n=0;n<l;n++)t[n]&&(a=e(t[n]))&&(r&&(r+=" "),r+=a)}else for(a in t)t[a]&&(r&&(r+=" "),r+=a)}return r}(e))&&(a&&(a+=" "),a+=t);return a};function d(e){let t=0;return!function e(t,n){return r.Children.forEach(t,t=>{null!==t&&(u(t)||o(t)?n(t):t.props&&t.props.children&&"object"==typeof t.props.children&&(i(t)&&n(t),e(t.props.children,n)))})}(e,e=>{u(e)&&t++}),t}function f(e){return e&&"getAttribute"in e}function m(e){return f(e)&&e.getAttribute("data-rttab")}function p(e){return f(e)&&"true"===e.getAttribute("aria-disabled")}let b={className:"react-tabs",focus:!1},h=e=>{let t=(0,r.useRef)([]),n=(0,r.useRef)([]),l=(0,r.useRef)();function f(t,n){if(t<0||t>=y())return;let{onSelect:a,selectedIndex:r}=e;a(t,r,n)}function h(e){let t=y();for(let n=e+1;n<t;n++)if(!p(g(n)))return n;for(let a=0;a<e;a++)if(!p(g(a)))return a;return e}function v(e){let t=e;for(;t--;)if(!p(g(t)))return t;for(t=y();t-- >e;)if(!p(g(t)))return t;return e}function y(){let{children:t}=e;return d(t)}function g(e){return t.current[`tabs-${e}`]}function k(e){let t=e.target;do if(w(t)){if(p(t))return;let n=[].slice.call(t.parentNode.children).filter(m).indexOf(t);f(n,e);return}while(null!=(t=t.parentNode))}function w(e){if(!m(e))return!1;let t=e.parentElement;do{if(t===l.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}let{children:C,className:N,disabledTabClassName:x,domRef:E,focus:j,forceRenderTabPanel:A,onSelect:R,selectedIndex:T,selectedTabClassName:D,selectedTabPanelClassName:O,environment:P,disableUpDownKeys:_,disableLeftRightKeys:F,...$}={...b,...e};return r.createElement("div",Object.assign({},$,{className:s(N),onClick:k,onKeyDown:function(t){let{direction:n,disableUpDownKeys:a,disableLeftRightKeys:r}=e;if(w(t.target)){let{selectedIndex:l}=e,u=!1,i=!1;("Space"===t.code||32===t.keyCode||"Enter"===t.code||13===t.keyCode)&&(u=!0,i=!1,k(t)),(r||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(a||38!==t.keyCode&&"ArrowUp"!==t.code)?(r||39!==t.keyCode&&"ArrowRight"!==t.code)&&(a||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(l=function(){let e=y();for(;e--;)if(!p(g(e)))return e;return null}(),u=!0,i=!0):(36===t.keyCode||"Home"===t.code)&&(l=function(){let e=y();for(let t=0;t<e;t++)if(!p(g(t)))return t;return null}(),u=!0,i=!0):(l="rtl"===n?v(l):h(l),u=!0,i=!0):(l="rtl"===n?h(l):v(l),u=!0,i=!0),u&&t.preventDefault(),i&&f(l,t)}},ref:e=>{l.current=e,E&&E(e)},"data-rttabs":!0}),function(){let l=0,{children:s,disabledTabClassName:d,focus:f,forceRenderTabPanel:m,selectedIndex:p,selectedTabClassName:b,selectedTabPanelClassName:h,environment:v}=e;n.current=n.current||[];let k=n.current.length-y(),w=(0,r.useId)();for(;k++<0;)n.current.push(`${w}${n.current.length}`);return c(s,e=>{let s=e;if(i(e)){let y=0,k=!1;null==a&&function(e){let t=e||("undefined"!=typeof window?window:void 0);try{a=!!(void 0!==t&&t.document&&t.document.activeElement)}catch(n){a=!1}}(v);let w=v||("undefined"!=typeof window?window:void 0);a&&w&&(k=r.Children.toArray(e.props.children).filter(u).some((e,t)=>w.document.activeElement===g(t))),s=(0,r.cloneElement)(e,{children:c(e.props.children,e=>{let a=`tabs-${y}`,l=p===y,u={tabRef:e=>{t.current[a]=e},id:n.current[y],selected:l,focus:l&&(f||k)};return b&&(u.selectedClassName=b),d&&(u.disabledClassName=d),y++,(0,r.cloneElement)(e,u)})})}else if(o(e)){let C={id:n.current[l],selected:p===l};m&&(C.forceRender=m),h&&(C.selectedClassName=h),l++,s=(0,r.cloneElement)(e,C)}return s})}())};h.propTypes={};let v={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},y=e=>null===e.selectedIndex?1:0,g=(e,t)=>{},k=e=>{let{children:t,defaultFocus:n,defaultIndex:a,focusTabOnClick:l,onSelect:u,...i}={...v,...e},[o,c]=(0,r.useState)(n),[s]=(0,r.useState)(y(i)),[f,m]=(0,r.useState)(1===s?a||0:null);if((0,r.useEffect)(()=>{c(!1)},[]),1===s){let p=d(t);(0,r.useEffect)(()=>{null!=f&&m(Math.min(f,Math.max(0,p-1)))},[p])}g(i,s);let b=(e,t,n)=>{("function"!=typeof u||!1!==u(e,t,n))&&(l&&c(!0),1===s&&m(e))},k={...e,...i};return k.focus=o,k.onSelect=b,null!=f&&(k.selectedIndex=f),delete k.defaultFocus,delete k.defaultIndex,delete k.focusTabOnClick,r.createElement(h,k,t)};k.propTypes={},k.tabsRole="Tabs";var w=k;let C={className:"react-tabs__tab-list"},N=e=>{let{children:t,className:n,...a}={...C,...e};return r.createElement("ul",Object.assign({},a,{className:s(n),role:"tablist"}),t)};N.tabsRole="TabList",N.propTypes={};var x=N;let E="react-tabs__tab",j={className:E,disabledClassName:`${E}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${E}--selected`},A=e=>{let t=(0,r.useRef)(),{children:n,className:a,disabled:l,disabledClassName:u,focus:i,id:o,selected:c,selectedClassName:d,tabIndex:f,tabRef:m,...p}={...j,...e};return(0,r.useEffect)(()=>{c&&i&&t.current.focus()},[c,i]),r.createElement("li",Object.assign({},p,{className:s(a,{[d]:c,[u]:l}),ref:e=>{t.current=e,m&&m(e)},role:"tab",id:`tab${o}`,"aria-selected":c?"true":"false","aria-disabled":l?"true":"false","aria-controls":`panel${o}`,tabIndex:f||(c?"0":null),"data-rttab":!0}),n)};A.propTypes={},A.tabsRole="Tab";var R=A;let T="react-tabs__tab-panel",D={className:T,forceRender:!1,selectedClassName:`${T}--selected`},O=e=>{let{children:t,className:n,forceRender:a,id:l,selected:u,selectedClassName:i,...o}={...D,...e};return r.createElement("div",Object.assign({},o,{className:s(n,{[i]:u}),role:"tabpanel",id:`panel${l}`,"aria-labelledby":`tab${l}`}),a||u?t:null)};O.tabsRole="TabPanel",O.propTypes={};var P=O}}]);