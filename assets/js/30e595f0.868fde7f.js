"use strict";(self.webpackChunkidfive_docs=self.webpackChunkidfive_docs||[]).push([[1593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Maintaining WordPress projects",s={unversionedId:"back-end/wordpress/wordpress-maintenance",id:"back-end/wordpress/wordpress-maintenance",title:"Maintaining WordPress projects",description:"Git Flow",source:"@site/docs/back-end/wordpress/wordpress-maintenance.md",sourceDirName:"back-end/wordpress",slug:"/back-end/wordpress/wordpress-maintenance",permalink:"/docs/back-end/wordpress/wordpress-maintenance",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/back-end/wordpress/wordpress-maintenance.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WP-CLI",permalink:"/docs/back-end/wordpress/wordpress-cli"},next:{title:"Commonly Used and Maintained Plugins",permalink:"/docs/back-end/wordpress/wordpress-plugins"}},l={},p=[{value:"Git Flow",id:"git-flow",level:2},{value:"WP Core Updates",id:"wp-core-updates",level:2},{value:"Institutional Considerations",id:"institutional-considerations",level:3},{value:"WP Plugins",id:"wp-plugins",level:2},{value:"Free plugins",id:"free-plugins",level:3},{value:"Paid plugins",id:"paid-plugins",level:3},{value:"Deployment",id:"deployment",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"maintaining-wordpress-projects"},"Maintaining WordPress projects"),(0,a.kt)("h2",{id:"git-flow"},"Git Flow"),(0,a.kt)("p",null,"We use Git Flow to manage updates to WordPress core and plugins. For reference purposes, create an Issue in Bitbucket, or a ticket in Bugify. Bitbucket issues can be kept alive and tagged with the date in ISO format (e.g. BB-1-20190810)."),(0,a.kt)("h2",{id:"wp-core-updates"},"WP Core Updates"),(0,a.kt)("p",null,"Update locally using WP-CLI or the admin interface."),(0,a.kt)("h3",{id:"institutional-considerations"},"Institutional Considerations"),(0,a.kt)("p",null,"Depending on a client's institutional server set-up, access policies, or hosting account, some core updates have to be approached differently."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pantheon")," - Update using the upstream GUI in the Dev environment in Pantheon, and then pull down and update your local repository.\nYou can also follow the instruction under the WordPress tab on ",(0,a.kt)("a",{parentName:"li",href:"https://pantheon.io/docs/core-updates#overwrite-core"},"Pantheon's documentation"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"WP Engine")," - WP Engine will periodically update WordPress core on their staging and live environments; if you keep the environment up to date they will skip their update."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"JHU Docker")," - ",(0,a.kt)("em",{parentName:"li"},"majority")," of WordPress sites on the JHU Docker Network receive core updates automatically. If a retainer agreement allows, ",(0,a.kt)("em",{parentName:"li"},"test")," the RC1 version of a major release (",(0,a.kt)("a",{parentName:"li",href:"https://make.wordpress.org/core/handbook/about/release-cycle/version-numbering/"},"term definition"),") on your local machine to alert clients of any issues that may arise. For specific clients, review information on their specific Jeeves entry.")),(0,a.kt)("h2",{id:"wp-plugins"},"WP Plugins"),(0,a.kt)("h3",{id:"free-plugins"},"Free plugins"),(0,a.kt)("p",null,"Update locally using WP-CLI or the admin interface."),(0,a.kt)("h3",{id:"paid-plugins"},"Paid plugins"),(0,a.kt)("p",null,"Paid plugins may have to be downloaded manually from the vendor's site. Some paid plugins like ACF Pro and Gravity Forms can be activated and updated locally using the admin interface or WP-CLI."),(0,a.kt)("h2",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"When deploying updates to a hosting environment that is unreachable by Buddy, manually updating the installation will be necessary. Perform due diligence by testing updates on your local installation and any test environment you may have access to, before manually updating the site."))}u.isMDXComponent=!0}}]);