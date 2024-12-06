"use strict";(self.webpackChunkidfive_docs=self.webpackChunkidfive_docs||[]).push([[121],{3905:(A,e,o)=>{o.d(e,{Zo:()=>d,kt:()=>l});var t=o(7294);function i(A,e,o){return e in A?Object.defineProperty(A,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):A[e]=o,A}function a(A,e){var o=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),o.push.apply(o,t)}return o}function r(A){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){i(A,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(o,e))}))}return A}function n(A,e){if(null==A)return{};var o,t,i=function(A,e){if(null==A)return{};var o,t,i={},a=Object.keys(A);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||(i[o]=A[o]);return i}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(A,o)&&(i[o]=A[o])}return i}var y=t.createContext({}),s=function(A){var e=t.useContext(y),o=e;return A&&(o="function"==typeof A?A(e):r(r({},e),A)),o},d=function(A){var e=s(A.components);return t.createElement(y.Provider,{value:e},A.children)},v="mdxType",u={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(A,e){var o=A.components,i=A.mdxType,a=A.originalType,y=A.parentName,d=n(A,["components","mdxType","originalType","parentName"]),v=s(o),m=i,l=v["".concat(y,".").concat(m)]||v[m]||u[m]||a;return o?t.createElement(l,r(r({ref:e},d),{},{components:o})):t.createElement(l,r({ref:e},d))}));function l(A,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof A||i){var a=o.length,r=new Array(a);r[0]=m;var n={};for(var y in e)hasOwnProperty.call(e,y)&&(n[y]=e[y]);n.originalType=A,n[v]="string"==typeof A?A:i,r[1]=n;for(var s=2;s<a;s++)r[s]=o[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9986:(A,e,o)=>{o.r(e),o.d(e,{assets:()=>y,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>s});var t=o(7462),i=(o(7294),o(3905));const a={description:"Variations, Structure, Notes"},r="Site Header",n={unversionedId:"front-end/site-header",id:"front-end/site-header",title:"Site Header",description:"Variations, Structure, Notes",source:"@site/docs/front-end/site-header.md",sourceDirName:"front-end",slug:"/front-end/site-header",permalink:"/docs/front-end/site-header",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/front-end/site-header.md",tags:[],version:"current",frontMatter:{description:"Variations, Structure, Notes"},sidebar:"tutorialSidebar",previous:{title:"Performance",permalink:"/docs/front-end/performance"},next:{title:"Support",permalink:"/docs/category/support"}},y={},s=[{value:"Changing the Site Header Variation",id:"changing-the-site-header-variation",level:2},{value:"Variables",id:"variables",level:2},{value:"Parts and Variations",id:"parts-and-variations",level:2},{value:"Mobile",id:"mobile",level:3},{value:"Full Variation",id:"full-variation",level:3},{value:"Hybrid Variation",id:"hybrid-variation",level:3},{value:"Hamburger Variation",id:"hamburger-variation",level:3},{value:"Popover Menu (Desktop - Hybrid and Hamburger)",id:"popover-menu-desktop---hybrid-and-hamburger",level:3},{value:"Search",id:"search",level:3}],d={toc:s},v="wrapper";function u(A){let{components:e,...a}=A;return(0,i.kt)(v,(0,t.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"site-header"},"Site Header"),(0,i.kt)("p",null,"The site header comes with 3 built-in variations.\n",(0,i.kt)("a",{parentName:"p",href:"https://www.figma.com/proto/6rjiTrzRov6VwxFgwVPbXg/UX-Starter-Doc?page-id=1%3A98&node-id=141-699&viewport=755%2C325%2C0.08&t=eN5CbnlbijyARmGo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=355%3A13806"},"More information can be found in the wireframes"),"."),(0,i.kt)("h2",{id:"changing-the-site-header-variation"},"Changing the Site Header Variation"),(0,i.kt)("p",null,'The default mode fort he site header is "Full" (see below). To change to a different variation, go into ',(0,i.kt)("strong",{parentName:"p"},"data.json")," (at ",(0,i.kt)("strong",{parentName:"p"},"source/","_","data/data.json"),') and change the "type" under "site header".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'When "type" is left blank - it will show the "full" version'),":"),(0,i.kt)("p",null,"For ",(0,i.kt)("em",{parentName:"p"},"Full"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"site_header": {\n    "type": "",\n}\n')),(0,i.kt)("p",null,"For ",(0,i.kt)("em",{parentName:"p"},"Hamburger"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"site_header": {\n    "type": "hamburger",\n}\n')),(0,i.kt)("p",null,"For ",(0,i.kt)("em",{parentName:"p"},"Hybrid"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"site_header": {\n    "type": "hybrid",\n}\n')),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("p",null,"The partial file ",(0,i.kt)("strong",{parentName:"p"},"_","base.scss")," (located at ",(0,i.kt)("inlineCode",{parentName:"p"},"source/scss/core/_base.scss"),") contains custom properties (variables) used in conjunction with the site header, to be updated per project based on design needs. These custom properties need to be kept in place as they are used in various formulas (for example, to determine the ",(0,i.kt)("inlineCode",{parentName:"p"},"padding-top")," value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<main>")," section). The relevant variables and default values are as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},":root {\n  --header-top-height: #{rem(90)};\n  --header-logo-width: #{rem(106)};\n  --header-main-menu-height: #{rem(100)};\n  @include mq($min, $lg_desktop) {\n    --header-top-height: #{rem(64)};\n    --header-logo-width: #{rem(212)};\n  }\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--header-top-height")," refers to the top section applied to ",(0,i.kt)("inlineCode",{parentName:"li"},"site-header__top")," which appears on mobile and desktop, typically containing utility and audience links"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--header-main-menu-height")," refers to the height of the lower section of the header, typically containing main menu links and dropdowns"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--header-logo-width")," refers to the width of the site logo")),(0,i.kt)("h2",{id:"parts-and-variations"},"Parts and Variations"),(0,i.kt)("h3",{id:"mobile"},"Mobile"),(0,i.kt)("p",null,"The mobile version for all variations is identical. A hamburger menu opens the popover menu with submenus sliding in from the right side:\n",(0,i.kt)("img",{alt:"Site Header Mobile",src:o(9637).Z,width:"1106",height:"1172"})),(0,i.kt)("h3",{id:"full-variation"},"Full Variation"),(0,i.kt)("p",null,"(",(0,i.kt)("a",{parentName:"p",href:"https://www.figma.com/proto/6rjiTrzRov6VwxFgwVPbXg/UX-Starter-Doc?page-id=1%3A98&node-id=141-699&viewport=755%2C325%2C0.08&t=eN5CbnlbijyARmGo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=355%3A13806"},"Description from wireframes"),") The Primary Navigation operates by click. Clicking any of the Primary Navigation labels shows a drop-down menu with links to child pages and a link to the top-level page at the bottom of the menu. This toplevel page link should be styled slightly different to indicate that it is the top-level link. Clicking the Primary navigation label once more closes the menu. If a Primary Navigation section does not have any child pages, instead of showing the drop-down menu, the user will be navigated to that page. The Audience menu operates by click to show Audience links. In the Audience menu, there is not a link to a top-level page. Clicking any of the Utility or Calls to Action links take users directly to a page.\n",(0,i.kt)("img",{alt:"Site Header Full",src:o(7842).Z,width:"1722",height:"654"})),(0,i.kt)("h3",{id:"hybrid-variation"},"Hybrid Variation"),(0,i.kt)("p",null,"(",(0,i.kt)("a",{parentName:"p",href:"https://www.figma.com/proto/6rjiTrzRov6VwxFgwVPbXg/UX-Starter-Doc?page-id=1%3A98&node-id=141-699&viewport=755%2C325%2C0.08&t=eN5CbnlbijyARmGo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=355%3A13806"},"Description from wireframes"),') This shows "Priority links", which are those deemed to be priority and featured outside of the hamburger menu. Clicking any of these links takes users directly to a page. These Priority links can be any link in the sitemap, not just Top Level pages. Clicking the Priority links operates by click. Clicking the hamburger button opens the full hamburger menu. The Audience menu operates by click to show Audience links. Clicking any of the Utility or Calls to Action links take users directly to a page.\n',(0,i.kt)("img",{alt:"Site Header Hybrid",src:o(365).Z,width:"1730",height:"274"})),(0,i.kt)("h3",{id:"hamburger-variation"},"Hamburger Variation"),(0,i.kt)("p",null,"(",(0,i.kt)("a",{parentName:"p",href:"https://www.figma.com/proto/6rjiTrzRov6VwxFgwVPbXg/UX-Starter-Doc?page-id=1%3A98&node-id=141-699&viewport=755%2C325%2C0.08&t=eN5CbnlbijyARmGo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=355%3A13806"},"Description from wireframes"),") This has all menu items collapsed into a hamburger menu.\n",(0,i.kt)("img",{alt:"Site Header Hamburger",src:o(7156).Z,width:"1718",height:"202"})),(0,i.kt)("h3",{id:"popover-menu-desktop---hybrid-and-hamburger"},"Popover Menu (Desktop - Hybrid and Hamburger)"),(0,i.kt)("p",null,"(",(0,i.kt)("a",{parentName:"p",href:"https://www.figma.com/proto/6rjiTrzRov6VwxFgwVPbXg/UX-Starter-Doc?page-id=1%3A98&node-id=141-699&viewport=755%2C325%2C0.08&t=eN5CbnlbijyARmGo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=355%3A13806"},"Description from wireframes"),") This shows the Primary Navigation, CTAs, Utility Navigation, and Audience Navigation. Clicking any of the CTAs, Utility, or Audience Links takes users to a page. Clicking any of the Primary Navigation links toggles that section label and then shows the Primary Navigation submenu with link to the parent page and links to child pages. The arrow is optional, as it is used to indicate if the menu link shows child links or not.\n",(0,i.kt)("img",{alt:"Site Header Popover",src:o(600).Z,width:"1720",height:"960"})),(0,i.kt)("h3",{id:"search"},"Search"),(0,i.kt)("p",null,"(",(0,i.kt)("a",{parentName:"p",href:"https://www.figma.com/proto/6rjiTrzRov6VwxFgwVPbXg/UX-Starter-Doc?page-id=1%3A98&node-id=141-699&viewport=755%2C325%2C0.08&t=eN5CbnlbijyARmGo-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=355%3A13806"},"Description from wireframes"),") Clicking the search icon displays a search field underneath the header. Clicking the search button takes users to the search page. When this search is open, users cannot scroll. This search can be dismissed by clicking outside the search modal or the x button.\n",(0,i.kt)("img",{alt:"Site Header Search",src:o(4092).Z,width:"1724",height:"674"})))}u.isMDXComponent=!0},7842:(A,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/images/site-header-full-dd4e8ae05b5cf66d185ae017e5ae3e4b.jpg"},7156:(A,e,o)=>{o.d(e,{Z:()=>t});const t="data:image/jpeg;base64,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B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N1dA9eG6ugevDdXQPXhuroHrw3V0D14bq6B68N0VQqu0azu0KjS6M7xQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GQtHIyFo5GVKEesav5RZvVX//xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAECAQE/AC+f/8QAFBEBAAAAAAAAAAAAAAAAAAAAoP/aAAgBAwEBPwAvn//Z"},365:(A,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/images/site-header-hybrid-cf9d2d92657094235de40657d6016e8d.jpg"},9637:(A,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/images/site-header-mobile-6768a46decc4c062143a9bac5e3b2442.jpg"},600:(A,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/images/site-header-popover-c32ce22d355035ace8f1f97648efb9f2.jpg"},4092:(A,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/images/site-header-search-5c63ff8a7129d597730211b756132a53.jpg"}}]);