"use strict";(self.webpackChunkidfive_docs=self.webpackChunkidfive_docs||[]).push([[371],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4425:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},i="Acquia RA Ticketing",c={unversionedId:"general/ticketing/acquia_ra",id:"general/ticketing/acquia_ra",title:"Acquia RA Ticketing",description:'In general, some clients on acquia require assistance with acquia\'s automated ticketing process. The RA ticketing on acquia only targets security updates, and will only be run automatically for contrib modules/core at current major version of that installed. If you need to update "non security policy" versions, or if you need to go up major versions, manual update is required.',source:"@site/docs/general/ticketing/acquia_ra.md",sourceDirName:"general/ticketing",slug:"/general/ticketing/acquia_ra",permalink:"/docs/general/ticketing/acquia_ra",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/general/ticketing/acquia_ra.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ticketing",permalink:"/docs/category/ticketing"},next:{title:"Support Ticketing",permalink:"/docs/general/ticketing/overview"}},l={},u=[{value:"If client support ticketing controlled via Trello",id:"if-client-support-ticketing-controlled-via-trello",level:2},{value:"If client support ticketing NOT controlled via Trello",id:"if-client-support-ticketing-not-controlled-via-trello",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"acquia-ra-ticketing"},"Acquia RA Ticketing"),(0,a.kt)("p",null,'In general, some clients on acquia require assistance with acquia\'s automated ticketing process. The RA ticketing on acquia only targets security updates, and will only be run automatically for contrib modules/core at current major version of that installed. If you need to update "non security policy" versions, or if you need to go up major versions, manual update is required.'),(0,a.kt)("h2",{id:"if-client-support-ticketing-controlled-via-trello"},"If client support ticketing controlled via Trello"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Forward RA email to particular Trello board email address that creates cards automatically."),(0,a.kt)("li",{parentName:"ul"},'When ready, move card to "in progress"'),(0,a.kt)("li",{parentName:"ul"},"Go to acquia ticket and see the overview of the update, and what may need to be tested."),(0,a.kt)("li",{parentName:"ul"},'Respond to Acquia RA ticket, with "Approved for tagging". This is because most of our clients are on multi-sites, and RA ENV does not accurately reflect that, so we need changes to go to stg before we can check.'),(0,a.kt)("li",{parentName:"ul"},"When acquia deploys to stg, check stg environment for errors related to changes made."),(0,a.kt)("li",{parentName:"ul"},'If no errors, respond "Approve for production".'),(0,a.kt)("li",{parentName:"ul"},"Once acquia deploys, check production site, including clearing all caches."),(0,a.kt)("li",{parentName:"ul"},"Change acquia ticket status to resolved."),(0,a.kt)("li",{parentName:"ul"},"Move Trello ticket to complete column.")),(0,a.kt)("h2",{id:"if-client-support-ticketing-not-controlled-via-trello"},"If client support ticketing NOT controlled via Trello"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Forward RA email to idfive PM in charge of account."),(0,a.kt)("li",{parentName:"ul"},"When added to DTL, go to acquia ticket and see the overview of the update, and what may need to be tested."),(0,a.kt)("li",{parentName:"ul"},'Respond to Acquia RA ticket, with "Approved for tagging". This is because most of our clients are on multi-sites, and RA ENV does not accurately reflect that, so we need changes to go to stg before we can check.'),(0,a.kt)("li",{parentName:"ul"},"When acquia deploys to stg, check stg environment for errors related to changes made."),(0,a.kt)("li",{parentName:"ul"},'If no errors, respond "Approve for production".'),(0,a.kt)("li",{parentName:"ul"},"Once acquia deploys, check production site, including clearing all caches."),(0,a.kt)("li",{parentName:"ul"},"Change acquia ticket status to resolved."),(0,a.kt)("li",{parentName:"ul"},"Alert idfive PM that update complete.")))}d.isMDXComponent=!0}}]);