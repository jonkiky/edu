(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[174],{3651:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/[slug]",function(){return n(7193)}])},6675:function(e,t,n){"use strict";n(5893)},7193:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var i=n(5893),s=n(1163),o=n(7294),r=n(8296),a=n(1664),l=n.n(a);function d(e){let[t,n]=(0,o.useState)({loading:!0,status:"n/a",message:""});return(0,o.useEffect)(()=>{async function t(e){var t,i,s,o;let r=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system:e.prompts_system,user:e.prompts_user})}),a=await r.json();if(200!==r.status)throw a.error||Error("Request failed with status ".concat(r.status));n({loading:!1,status:"200",message:null!==(o=null===(t=null==a?void 0:null===(i=a.result)||void 0===i?void 0:i.choices[0])||void 0===t?void 0:null===(s=t.message)||void 0===s?void 0:s.content)&&void 0!==o?o:""})}e.content&&""!==e.content?n({loading:!1,status:"200",message:e.content}):t(e)},[e]),t.loading?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("p",{children:["loading.... ",(0,i.jsx)(r.Nx,{width:"200",color:"#4fa94d"})," "]})}):(0,i.jsx)("div",{className:"sections",children:(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:t.message}})})}function c(){var e;let[t,n]=(0,o.useState)(""),[r,a]=(0,o.useState)([]),c=(0,s.useRouter)(),h=null===(e=c.query)||void 0===e?void 0:e.slug;""==h&&c.push("/404"),(0,o.useEffect)(()=>{h&&u(h)},[h]);let u=function(e){fetch("https://raw.githubusercontent.com/jonkiky/edu/master/data/"+e.replace(/ /g,"_")+".json").then(t=>(t.ok||a(p(e)),t.json())).then(e=>{a(g(e))}).catch(e=>{a(e)})},p=function(e){let t=function(e){let t="please use html <p>, <ul> tag to style your response. all the link should be open in a new tag using target _blank property",n="we are looking for the information related to the  involve in an activity of "+e;return[{title:e+"  Overview",system:t,desc:"Provide the overview of "+e+", explain the benefit of participating in it",query:n+", you need to provide an overview "+e+" to kids who may interested, explain what is "+e+" in short and then highlight benefits. What is the recommended age to start learn it. is that season based activity, if yes, what season people enjoy this activity "},{title:"How to get started",system:t,desc:"Describe how to get started.",query:n+", if I am interested, tell me how to get it stated "},{title:"Devleopment path ",system:t,desc:"Describe the development path in general.",query:n+", you need to explain development path in general, please leveled up. "},{title:"Key Competitions",system:t,desc:"List key competitions you may interested.",query:n+", you need to provide at least 5 key competitions that USA based or international for Junior who like the "+e+" . Please categorize them by age , provide the link, plus briefly description, give when the contest happend during the year usually, put them in html tag ul li list. in the end, provide a way to find related competitions or shows"},{title:"Howard Gardner's theory of multiple intelligences",system:t,desc:"Howard Gardner's theory of multiple intelligences across all eight intelligences, along with the reasons for each rating",query:"Can you provide the rating of kids participating in event of "+e+" based on Howard Gardner's theory of multiple intelligences across all eight intelligences, give overall rate across all eight intelligences and list the reason."},{title:"Cost as hobby",system:t,desc:"Porvide the cost in general",query:n+"you need to provide a list of cost as developing it as hobby, provide cost range and total cost"},{title:"Professional career path overview",system:t,query:n+", you need to explain what kids need to do if they want to become pro in the future"},{title:"Schools in USA",system:t,desc:"The universities that provide good tranning program",query:n+", you need to provide best college in the USA that provide pro tranning if possible "},{title:"Career",system:t,desc:"Posible career paths in this field",query:n+", you need to provide possible career path in this field and possible income revenue for each path."},{title:"Traning Centers & Programs ",system:t,desc:"",query:n+", you need to provide tranning program and traning center near maryland, virginia and washington dc area."}]}(e);return y(t)},g=function(e){return y(e.data)},y=function(e){let t=[];console.log(e);for(var n=0;n<=e.length-1;n++){let s=e[n].response?e[n].response:"";t.push((0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:e[n].title}),(0,i.jsx)("p",{children:e[n].desc}),(0,i.jsx)(d,{title:e[n].title,prompts_system:e[n].system,prompts_user:e[n].query,content:s})]}))}return t};return console.log(r),(0,i.jsx)("div",{id:"search-page",children:(0,i.jsxs)("div",{className:"search-paper",children:[(0,i.jsxs)("header",{children:[(0,i.jsx)("div",{id:"search-logo",children:(0,i.jsx)(l(),{href:"/",children:(0,i.jsx)("h2",{children:"Kid Education Hub"})})}),(0,i.jsx)("div",{class:"line"})]}),(0,i.jsx)("div",{className:"inner",id:"content-sections",children:r})]})})}n(6675)}},function(e){e.O(0,[424,296,774,888,179],function(){return e(e.s=3651)}),_N_E=e.O()}]);