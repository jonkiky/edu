(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,i,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(1268)}])},1268:function(e,i,l){"use strict";l.r(i),l.d(i,{default:function(){return m}});var s=l(5893),n=l(7294),a=l(1163);l(5675);var t=l(1664),c=l.n(t),r=l(9603),d=l(9417),h=l(4288),o=l(8492),x=l(6419);function u(e,i){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return(0,s.jsxs)("div",{id:"ads",children:[(0,s.jsx)("h2",{children:"Kiddie Discovery"}),(0,s.jsx)("p",{children:"We aim to help children in discovering their interests and passions while providing parents with guidance on nurturing hobbies that can help their children excel in a particular field."}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[" ",(0,s.jsx)(c(),{href:"/about",children:"About Us"})]}),(0,s.jsxs)("li",{children:[" ",(0,s.jsx)(c(),{href:"/use",children:"Terms of Service"})]}),(0,s.jsxs)("li",{children:[" ",(0,s.jsx)(c(),{href:"/policy",children:"Privacy Policy"})]})]}),(0,s.jsx)("div",{className:"line"}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"collection",children:[(0,s.jsx)("p",{children:" Collection "}),(0,s.jsx)("div",{className:"collected-items",children:(()=>{let n=[];for(var a=l.length-1;a>=0;a--){let t="/content/"+l[a].name,c="/images/"+l[a].name.replace(/ /g,"_")+".png";r.G,h.m6i,i.includes(l[a].name)&&l[a].ispublic&&n.push((0,s.jsxs)("div",{className:"likedItem",children:[(0,s.jsx)("a",{href:t,target:"_self",children:(0,s.jsx)("span",{className:"likedItemImage",children:(0,s.jsx)("img",{src:c,alt:""})})}),(0,s.jsx)("div",{className:"disListIcon",children:(0,s.jsx)("button",{className:"disLikeBtn","data-customproperty":l[a].name,onClick:i=>e(i),children:(0,s.jsx)(r.G,{icon:d.WA2})})})]},"liked_"+l[a].name))}return n})()})]})]})}function m(){let e="undefined"!=typeof localStorage,i=(0,a.useRouter)(),[l,t]=(0,n.useState)([]),[c,m]=(0,n.useState)([]),[j,p]=(0,n.useState)(Array.from(22,()=>!1)),[g,v]=(0,n.useState)(!1),[b,f]=(0,n.useState)(()=>{if(!e)return[];{let i=localStorage.getItem("likeList");return i?i.split(","):[]}}),[y,k]=(0,n.useState)(),N=i=>{e&&localStorage.setItem("likeList",i),f(i)};(0,n.useEffect)(()=>{t(F(x.a,c))},[x.a,c]);let C=e=>{"filter"==e&&v(!g),"about"==e&&i.push("/about")};function F(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.map(e=>{let l={ispublic:!1},s=0,n=0,a=0,t=0;for(var c,r,d,h,o=i.length-1;o>=0;o--)i[o].includes("age-")&&1==!s&&(s=(null==e?void 0:null===(c=e.tags)||void 0===c?void 0:c.includes(i[o]))?1:-1),i[o].includes("mi-")&&1!==n&&(n=(null==e?void 0:null===(r=e.tags)||void 0===r?void 0:r.includes(i[o]))?1:-1),i[o].includes("c-")&&1==!a&&(a=(null==e?void 0:null===(d=e.tags)||void 0===d?void 0:d.includes(i[o]))?1:-1),i[o].includes("s-")&&1==!t&&(t=(null==e?void 0:null===(h=e.tags)||void 0===h?void 0:h.includes(i[o]))?1:-1);return s>=0&&n>=0&&a>=0&&t>=0&&(l={ispublic:!0}),{...e,...l}})}let $=(e,i)=>{var l;let s=c;(null==e?void 0:null===(l=e.target)||void 0===l?void 0:l.checked)?(c.includes(i)||c.push(i),s=c):s=c.filter(e=>e!==i),m(s),t(F(x.a,s))},_=e=>{let i=e.currentTarget.dataset.customproperty,l=[...b];l.includes(i)?l=l.filter(e=>e!==i):l.push(i),N(l)};return(0,s.jsx)("div",{id:"search-page",children:(0,s.jsxs)("div",{className:"search-paper",children:[(0,s.jsx)(o.Z,{}),(0,s.jsxs)("div",{className:"trend-list",children:[(0,s.jsxs)("div",{id:"facetsearch",className:"filter ".concat(g?"visible":""),children:[(0,s.jsxs)("div",{className:"filter-section",children:[(0,s.jsx)("div",{className:"filter-section-header",children:"Age"}),(0,s.jsx)("div",{className:"filter-section-options",children:(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"age-3",value:"age-3",onChange:e=>$(e,"age-3")}),(0,s.jsx)("label",{htmlFor:"age-3",children:" 0 to 3 years"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"age-4",value:"age-4",onChange:e=>$(e,"age-4")}),(0,s.jsx)("label",{htmlFor:"age-4",children:" 3 to 4 years"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"age-5",value:"age-5",onChange:e=>$(e,"age-5")}),(0,s.jsx)("label",{htmlFor:"age-5",children:"4 to 5 years"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"age-6",value:"age-6",onChange:e=>$(e,"age-6")}),(0,s.jsx)("label",{htmlFor:"age-6",children:"5 to 6 years "})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"age-7",value:"age-7",onChange:e=>$(e,"age-7")}),(0,s.jsx)("label",{htmlFor:"age-7",children:"6 to 7 years"})]}),(0,s.jsxs)("li",{children:["  ",(0,s.jsx)("input",{type:"checkbox",id:"age-8",value:"age-8",onChange:e=>$(e,"age-8")}),(0,s.jsx)("label",{htmlFor:"age-8",children:"7 to 8 years"})]}),(0,s.jsxs)("li",{children:["  ",(0,s.jsx)("input",{type:"checkbox",id:"age-9",value:"age-9",onChange:e=>$(e,"age-9")}),(0,s.jsx)("label",{htmlFor:"age-9",children:"older than 8 "})]})]})})]}),(0,s.jsx)("div",{className:"line"}),(0,s.jsxs)("div",{className:"filter-section",children:[(0,s.jsx)("div",{className:"filter-section-header",children:"Multi-intelligence"}),(0,s.jsx)("div",{className:"filter-section-options",children:(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"mi-body",value:"mi-bodily-kinesthetic",onChange:e=>$(e,"mi-bodily-kinesthetic")}),(0,s.jsx)("label",{htmlFor:"mi-body",children:"Bodily Kinesthetic"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"mi-interpersonal",value:"mi-interpersonal",onChange:e=>$(e,"mi-interpersonal")}),(0,s.jsx)("label",{htmlFor:"mi-interpersonal",children:"Interpersonal"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"mi-vl",value:"mi-linguistic",onChange:e=>$(e,"mi-linguistic")}),(0,s.jsx)("label",{htmlFor:"mi-vl",children:"Verbal Linguistic"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"mi-lm",value:"mi-methematical",onChange:e=>$(e,"mi-methematical")}),(0,s.jsx)("label",{htmlFor:"mi-lm",children:"Logical Methematical"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"mi-na",value:"mi-naturalistic",onChange:e=>$(e,"mi-naturalistic")}),(0,s.jsx)("label",{htmlFor:"mi-na",children:"Naturalistic"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"mi-intrapersonal",value:"mi-intrapersonal",onChange:e=>$(e,"mi-intrapersonal")}),(0,s.jsx)("label",{htmlFor:"mi-intrapersonal",children:"Intrapersonal"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"mi-vs",value:"mi-visual",onChange:e=>$(e,"mi-visual")}),(0,s.jsx)("label",{htmlFor:"mi-vs",children:"Visual Spatial"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"mi-ms",value:"mi-musical",onChange:e=>$(e,"mi-musical")}),(0,s.jsx)("label",{htmlFor:"mi-ms",children:"Musical"})]})]})})]}),(0,s.jsx)("div",{className:"line"}),(0,s.jsxs)("div",{className:"filter-section",children:[(0,s.jsx)("div",{className:"filter-section-header",children:"Cost"}),(0,s.jsx)("div",{className:"filter-section-options",children:(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"cost1",value:"c-$",onChange:e=>$(e,"c-$")}),(0,s.jsx)("label",{htmlFor:"cost1",children:"$"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"cost2",value:"c-$$",onChange:e=>$(e,"c-$$")}),(0,s.jsx)("label",{htmlFor:"cost2",children:"$$"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"cost3",value:"c-$$$",onChange:e=>$(e,"c-$$$")}),(0,s.jsx)("label",{htmlFor:"cost3",children:"$$$"})]})]})})]}),(0,s.jsx)("div",{className:"line"}),(0,s.jsxs)("div",{className:"filter-section",children:[(0,s.jsx)("div",{className:"filter-section-header",children:"Season"}),(0,s.jsx)("div",{className:"filter-section-options",children:(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"spring",value:"s-spring",onChange:e=>$(e,"s-spring")}),(0,s.jsx)("label",{htmlFor:"spring",children:"Spring"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"summer",value:"s-summer",onChange:e=>$(e,"s-summer")}),(0,s.jsx)("label",{htmlFor:"summer",children:"Summer"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"fall",value:"s-fall",onChange:e=>$(e,"s-fall")}),(0,s.jsx)("label",{htmlFor:"fall",children:"Fall"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("input",{type:"checkbox",id:"winter",value:"s-winter",onChange:e=>$(e,"s-winter")}),(0,s.jsx)("label",{htmlFor:"winter",children:"Winter"})]})]})})]})]}),(0,s.jsx)("section",{className:"tiles",children:(()=>{let e=[];for(var i=l.length-1;i>=0;i--){let n="/content/"+l[i].name,a="/images/"+l[i].name.replace(/ /g,"_")+".png",t=(0,s.jsx)(r.G,{icon:h.m6i});b.includes(l[i].name)&&(t=(0,s.jsx)(r.G,{icon:d.m6i,style:{color:"#FF90BC"}})),l[i].ispublic&&e.push((0,s.jsxs)("article",{className:"style1",children:[(0,s.jsx)("span",{className:"image",children:(0,s.jsx)("img",{src:a,alt:""})}),(0,s.jsx)("a",{href:n,target:"_self",children:(0,s.jsx)("div",{className:"content"})}),(0,s.jsxs)("div",{className:"likeBtnGroup",children:[(0,s.jsx)("button",{className:"likeBtn","data-customproperty":l[i].name,onClick:e=>_(e),children:t}),(0,s.jsx)("span",{children:l[i].name})]})]},"list_"+l[i].name))}return 0==e.length&&(e=[(0,s.jsx)("article",{className:"nofound",children:"No result"})]),e})()}),(0,s.jsx)(u,{handleLikeBtn:_,likeList:b,cate:l})]}),(0,s.jsxs)("div",{id:"mobile-facetsearch",children:[(0,s.jsx)("div",{className:"filter-section-header",children:(0,s.jsx)("button",{onClick:()=>C("filter"),children:(0,s.jsx)(r.G,{icon:d.cRF,style:{width:"20px"},fade:!0})})}),(0,s.jsx)("div",{className:"filter-section-header",children:(0,s.jsx)("button",{onClick:()=>C("about"),children:(0,s.jsx)(r.G,{icon:d.DBf,style:{width:"20px"},fade:!0})})})]})]})})}l(4684)}},function(e){e.O(0,[976,664,450,288,225,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);