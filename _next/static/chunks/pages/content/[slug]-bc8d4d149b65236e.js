(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[174],{3651:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/[slug]",function(){return n(7193)}])},8492:function(e,a,n){"use strict";n.d(a,{Z:function(){return r}});var i=n(5893);n(7294),n(1163);var t=n(1664),l=n.n(t),o=n(7369);function r(){let e=e=>{let a=window.open("/content/"+e,"_blank");a.focus()};return(0,i.jsxs)("header",{children:[(0,i.jsxs)("div",{id:"search-logo",children:[(0,i.jsx)(l(),{href:"/",children:(0,i.jsx)("span",{className:"symbol",children:(0,i.jsx)("img",{src:"https://raw.githubusercontent.com/jonkiky/edu/master/public/images/logo.png",alt:""})})}),(0,i.jsx)(l(),{href:"/",children:(0,i.jsx)("h2",{children:"Activities Hub"})}),(0,i.jsx)("span",{className:"search-input",children:(0,i.jsx)(o.Z,{options:[{name:"Accordion",value:"Accordion"},{name:"Aerospace Engineering",value:"Aerospace_Engineering"},{name:"Archery",value:"Archery"},{name:"Artificial Intelligence",value:"Artificial_Intelligence"},{name:"Artistic Swimming",value:"Artistic_Swimming"},{name:"Astronomy",value:"Astronomy"},{name:"Auto Racing Simulations eSports",value:"Auto_Racing_Simulations_eSports"},{name:"Badminton",value:"Badminton"},{name:"Ballroom Dance",value:"Ballroom_Dance"},{name:"Banjo",value:"Banjo"},{name:"Baseball",value:"Baseball"},{name:"Basketball",value:"Basketball"},{name:"Beach Volleyball",value:"Beach_Volleyball"},{name:"Bead Art",value:"Bead_Art"},{name:"Beauty Pageant",value:"Beauty_Pageant"},{name:"Biathlon",value:"Biathlon"},{name:"Biology",value:"Biology"},{name:"Bobsleigh",value:"Bobsleigh"},{name:"Boxing",value:"Boxing"},{name:"Breakdancing",value:"Breakdancing"},{name:"Calligraphy",value:"Calligraphy"},{name:"Canoeing",value:"Canoeing"},{name:"Cello",value:"Cello"},{name:"Cooking",value:"Cooking"},{name:"Chemistry",value:"Chemistry"},{name:"Clarinet",value:"Clarinet"},{name:"Clay Modeling",value:"Clay_Modeling"},{name:"Computer Science",value:"Computer_Science"},{name:"Contemporary Dance",value:"Contemporary_Dance"},{name:"Curling",value:"Curling"},{name:"Cycling",value:"Cycling"},{name:"Digital Art",value:"Digital_Art"},{name:"Fancy Diving",value:"Fancy_Diving"},{name:"Drawing",value:"Drawing"},{name:"Drums",value:"Drums"},{name:"Equestrian",value:"Equestrian"},{name:"Fencing",value:"Fencing"},{name:"Film Maker",value:"Film_Maker"},{name:"Flag Football",value:"Flag_Football"},{name:"Flamenco Dance",value:"Flamenco_Dance"},{name:"Flute",value:"Flute"},{name:"Go-Kart Racing",value:"Go-Kart_Racing"},{name:"Formula 1 Racing",value:"Formula_1_Racing"},{name:"Golf",value:"Golf"},{name:"Guitar",value:"Guitar"},{name:"Gymnastics",value:"Gymnastics"},{name:"Handball",value:"Handball"},{name:"Harp",value:"Harp"},{name:"Hip-Hop Dance",value:"Hip-Hop_Dance"},{name:"Hockey",value:"Hockey"},{name:"Horse Racing",value:"Horse_Racing"},{name:"Hula Dance",value:"Hula_Dance"},{name:"Ice Hockey",value:"Ice_Hockey"},{name:"Jewelry Making",value:"Jewelry_Making"},{name:"Judo",value:"Judo"},{name:"Karate",value:"Karate"},{name:"Luge",value:"Luge"},{name:"Latin Dance",value:"Latin_Dance"},{name:"Mathematics",value:"Mathematics"},{name:"Modern Pentathlon",value:"Modern_Pentathlon"},{name:"Mosaics",value:"Mosaics"},{name:"Oboe",value:"Oboe"},{name:"Origami",value:"Origami"},{name:"Photography",value:"Photography"},{name:"Papercraft",value:"Papercraft"},{name:"Painting",value:"Painting"},{name:"Piano",value:"Piano"},{name:"Pottery",value:"Pottery"},{name:"Robotics",value:"Robotics"},{name:"Rowing",value:"Rowing"},{name:"Rugby",value:"Rugby"},{name:"Sailing",value:"Sailing"},{name:"Saxophone",value:"Saxophone"},{name:"Sculpting",value:"Sculpting"},{name:"Sewing and Embroidery",value:"Sewing_and_Embroidery"},{name:"Singing",value:"Singing"},{name:"Skiing and Snowboarding",value:"Skiing_and_Snowboarding"},{name:"Soccer",value:"Soccer"},{name:"String Art",value:"String_Art"},{name:"Trombone",value:"Trombone"},{name:"Trumpet",value:"Trumpet"},{name:"Ukulele",value:"Ukulele"},{name:"Violin",value:"Violin"},{name:"Volleyball",value:"Volleyball"},{name:"Water Polo",value:"Water_Polo"},{name:"Weightlifting",value:"Weightlifting"},{name:"Wrestling",value:"Wrestling"},{name:"Chocolate_Maker",value:"Chocolate_Maker"},{name:"Fishing",value:"Fishing"},{name:"Ping Pong",value:"Ping_Pong"},{name:"Sport Climbing",value:"Sport_Climbing"},{name:"Swimming",value:"Swimming"},{name:"Tennis",value:"Tennis"},{name:"Girl_Group",value:"Girl_Group"},{name:"Bowling",value:"Bowling"},{name:"American Football",value:"American_Football"},{name:"Lacrosse",value:"Lacrosse"},{name:"Rifle",value:"Rifle"},{name:"Taekwondo_Sport",value:"Taekwondo_Sport"},{name:"Figure Skating",value:"Figure_Skating"}],name:"activities",placeholder:"Find Activity",emptyMessage:" No thing founded",search:!0,onChange:a=>e(a)})})]}),(0,i.jsx)("div",{className:"line"})]})}n(4684)},7193:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return m}});var i=n(5893),t=n(1163),l=n(7294),o=n(8296),r=n(1664),s=n.n(r),u=n(8492);function c(e){let[a,n]=(0,l.useState)({loading:!0,status:"n/a",message:""});return(0,l.useEffect)(()=>{async function a(e){var a,i,t,l;let o=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system:e.prompts_system,user:e.prompts_user})}),r=await o.json();if(200!==o.status)throw r.error||Error("Request failed with status ".concat(o.status));n({loading:!1,status:"200",message:null!==(l=null===(a=null==r?void 0:null===(i=r.result)||void 0===i?void 0:i.choices[0])||void 0===a?void 0:null===(t=a.message)||void 0===t?void 0:t.content)&&void 0!==l?l:""})}e.content&&""!==e.content?n({loading:!1,status:"200",message:e.content}):a(e)},[e]),a.loading?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("p",{children:["loading.... ",(0,i.jsx)(o.Nx,{width:"200",color:"#4fa94d"})," "]})}):(0,i.jsx)("div",{className:"sections",children:(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:a.message}})})}function m(){var e;let[a,n]=(0,l.useState)([]),o=(0,t.useRouter)(),r=null===(e=o.query)||void 0===e?void 0:e.slug;""==r&&o.push("/404"),(0,l.useEffect)(()=>{r&&m(r)},[r]);let m=function(e){fetch("../../data/"+e.replace(/ /g,"_")+".json").then(a=>(a.ok||n(d(e)),a.json())).then(e=>{n(g(e))}).catch(e=>{n(e)})},d=function(e){let a=function(e){let a="please use html <p>, <ul> tag to style your response. all the link should be open in a new tag using target _blank property",n="we are looking for the information related to the  involve in an activity of "+e;return[{title:e+"  Overview",system:a,desc:"Provide the overview of "+e+", explain the benefit of participating in it",query:n+", you need to provide an overview "+e+" to kids who may interested, explain what is "+e+" in short and then highlight benefits. What is the recommended age to start learn it. is that season based activity, if yes, what season people enjoy this activity "},{title:"How to get started",system:a,desc:"Describe how to get started.",query:n+", if I am interested, tell me how to get it stated "},{title:"Devleopment path ",system:a,desc:"Describe the development path in general.",query:n+", you need to explain development path in general, please leveled up. "},{title:"Key Competitions",system:a,desc:"List key competitions you may interested.",query:n+", you need to provide at least 5 key competitions that USA based or international for Junior who like the "+e+" . Please categorize them by age , provide the link, plus briefly description, give when the contest happend during the year usually, put them in html tag ul li list. in the end, provide a way to find related competitions or shows"},{title:"Howard Gardner's theory of multiple intelligences",system:a,desc:"Howard Gardner's theory of multiple intelligences across all eight intelligences, along with the reasons for each rating",query:"Can you provide the rating of kids participating in event of "+e+" based on Howard Gardner's theory of multiple intelligences across all eight intelligences, give overall rate across all eight intelligences and list the reason."},{title:"Cost as hobby",system:a,desc:"Porvide the cost in general",query:n+"you need to provide a list of cost as developing it as hobby, provide cost range and total cost"},{title:"Professional career path overview",system:a,query:n+", you need to explain what kids need to do if they want to become pro in the future"},{title:"Schools in USA",system:a,desc:"The universities that provide good tranning program",query:n+", you need to provide best college in the USA that provide pro tranning if possible "},{title:"Career",system:a,desc:"Posible career paths in this field",query:n+", you need to provide possible career path in this field and possible income revenue for each path."},{title:"Traning Centers & Programs ",system:a,desc:"",query:n+", you need to provide tranning program and traning center near maryland, virginia and washington dc area."}]}(e);return v(a)},g=function(e){return v(e.data)},v=function(e){let a=[];for(var n=0;n<=e.length-1;n++)if(!(e[n].hide&&e[n].hide)){let t=e[n].response?e[n].response:"";a.push((0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"content-header",children:e[n].title}),(0,i.jsx)(c,{title:e[n].title,prompts_system:e[n].system,prompts_user:e[n].query,content:t})]}))}return a};return(0,i.jsx)("div",{id:"search-page",children:(0,i.jsxs)("div",{className:"search-paper",children:[(0,i.jsx)(u.Z,{}),(0,i.jsxs)("div",{className:"trend-list",children:[(0,i.jsx)("div",{className:"inner",id:"content-sections",children:a}),(0,i.jsxs)("div",{id:"ads",children:[(0,i.jsx)("h2",{children:"Activities Hub"}),(0,i.jsx)("p",{children:"We aim to help children in discovering their interests and passions while providing parents with guidance on nurturing hobbies that can help their children excel in a particular field."}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[" ",(0,i.jsx)(s(),{href:"/about",children:"About Us"})]}),(0,i.jsxs)("li",{children:[" ",(0,i.jsx)(s(),{href:"/use",children:"Terms of Service"})]}),(0,i.jsxs)("li",{children:[" ",(0,i.jsx)(s(),{href:"/policy",children:"Privacy Policy"})]})]})]})]})]})})}}},function(e){e.O(0,[231,296,774,888,179],function(){return e(e.s=3651)}),_N_E=e.O()}]);