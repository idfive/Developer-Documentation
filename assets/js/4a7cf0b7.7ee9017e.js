"use strict";(self.webpackChunkidfive_docs=self.webpackChunkidfive_docs||[]).push([[5482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={},i="idfive drupal environment and common setup",l={unversionedId:"back-end/drupal/drupal-environment",id:"back-end/drupal/drupal-environment",title:"idfive drupal environment and common setup",description:"Servers and environments",source:"@site/docs/back-end/drupal/drupal-environment.md",sourceDirName:"back-end/drupal",slug:"/back-end/drupal/drupal-environment",permalink:"/docs/back-end/drupal/drupal-environment",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/back-end/drupal/drupal-environment.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entity queries in drupal",permalink:"/docs/back-end/drupal/drupal-entity-queries"},next:{title:"Feeds module",permalink:"/docs/back-end/drupal/drupal-feeds"}},s={},d=[{value:"Servers and environments",id:"servers-and-environments",level:2},{value:"Acquia/Pantheon/Platform.sh",id:"acquiapantheonplatformsh",level:3},{value:"Client controlled servers",id:"client-controlled-servers",level:3},{value:"Server specs and setup",id:"server-specs-and-setup",level:4},{value:"Example client server best practices",id:"example-client-server-best-practices",level:4},{value:"Example setup",id:"example-setup",level:5},{value:"Example use",id:"example-use",level:5},{value:"Development (DEV)",id:"development-dev",level:6},{value:"Staging (STG)",id:"staging-stg",level:6},{value:"Production (PROD)",id:"production-prod",level:6},{value:"Git repositories Continuous Integration (CI), and Continuous Deployment (CD)",id:"git-repositories-continuous-integration-ci-and-continuous-deployment-cd",level:2},{value:"Git",id:"git",level:3},{value:"CI/CD",id:"cicd",level:3},{value:"Default idfive drupal setup",id:"default-idfive-drupal-setup",level:2},{value:"Core",id:"core",level:3},{value:"Front end framework",id:"front-end-framework",level:3},{value:"Themes",id:"themes",level:3},{value:"Modules",id:"modules",level:3}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"idfive-drupal-environment-and-common-setup"},"idfive drupal environment and common setup"),(0,r.kt)("h2",{id:"servers-and-environments"},"Servers and environments"),(0,r.kt)("p",null,"In general, we commonly work on the following PaaS (Platform as a Service)/Servers for drupal:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Acquia"),(0,r.kt)("li",{parentName:"ul"},"Pantheon"),(0,r.kt)("li",{parentName:"ul"},"Platform.sh")),(0,r.kt)("p",null,"We also commonly work with IT departments, for deployment of sites to organizational controlled servers."),(0,r.kt)("h3",{id:"acquiapantheonplatformsh"},"Acquia/Pantheon/Platform.sh"),(0,r.kt)("p",null,"Since Acquia, Pantheon and Platform.sh are both optimized to run drupal sites, we rely on the following built in to these platforms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DEV/STG/PROD environments. DB/files can also be easily moved between environments, to allow for a 100% accurate testing environment for features/builds."),(0,r.kt)("li",{parentName:"ul"},"Automated DB backups. All paid plans include database backups once a day, and can be manually done on command."),(0,r.kt)("li",{parentName:"ul"},"Automated or semi automated core and security updates."),(0,r.kt)("li",{parentName:"ul"},"Local environments. Both platforms provide an easy way for additional developers to get up and tunning locally quite quickly.")),(0,r.kt)("h3",{id:"client-controlled-servers"},"Client controlled servers"),(0,r.kt)("p",null,"Most of the time, this is for universities or organizations with their own IT department and servers. If we need to utilize a client server, we will need the following, at a minimum:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Meets minimum ",(0,r.kt)("a",{parentName:"li",href:"https://www.drupal.org/docs/8/system-requirements"},"system requirements"),"."),(0,r.kt)("li",{parentName:"ul"},"We can access. This sometimes takes the form of requiring VPN instructions, SSO accounts, etc."),(0,r.kt)("li",{parentName:"ul"},"DEV/STG/PROD environments set up. These should have their own Databases/file structures/etc."),(0,r.kt)("li",{parentName:"ul"},"A git repo with deployments (via CI or similar) to each/all environments."),(0,r.kt)("li",{parentName:"ul"},"Automated backups of each environments DB on the server."),(0,r.kt)("li",{parentName:"ul"},"Access via SSH to view logs/etc, a POC who will do so, or the understanding that we may not be able to troubleshoot all issues that may arise."),(0,r.kt)("li",{parentName:"ul"},"Information on how to get current files/DB's/etc locally when onboarding new Developers."),(0,r.kt)("li",{parentName:"ul"},"Ideally, a docker or similar container duplicating the server for local testing.")),(0,r.kt)("p",null,"Essentially, ",(0,r.kt)("strong",{parentName:"p"},"idfive can accommodate almost any modern server, but it will usually require significantly more overhead to do so, over a service like Acquia or Pantheon"),". Additionally, we find that they also force us to rely on client IT personnel to manage some aspects, decreasing our ability to respond rapidly to any issues."),(0,r.kt)("h4",{id:"server-specs-and-setup"},"Server specs and setup"),(0,r.kt)("p",null,"While idfive developers maintain basic sysadmin skills, we do not set up servers for clients. If we are required to use a client server, we request that clients provide a sysadmin POC for the server who is knowledgeable in drupal best practices, and has been briefed on the project, and its scale. ",(0,r.kt)("strong",{parentName:"p"},"The sizing, performance, and other specs of a server are between the client, and hosting provider to decide.")),(0,r.kt)("h4",{id:"example-client-server-best-practices"},"Example client server best practices"),(0,r.kt)("h5",{id:"example-setup"},"Example setup"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Separate Development, Staging, and Production environments set up on server. This normally takes the form of three separate folders on the server, each with a fully functioning codebase, file system, and Database."),(0,r.kt)("li",{parentName:"ul"},"Code repository set up on github, bitbucket, or similar."),(0,r.kt)("li",{parentName:"ul"},"CI/CD chosen/enacted, to auto deploy certain branches (usually dev/stg/master) to respective environments on server."),(0,r.kt)("li",{parentName:"ul"},"An easy way to import/export Database and files of each site. This is used most often in the form of pulling DB/files prod > dev, which we need to do almost every time we make updates/add new features/etc."),(0,r.kt)("li",{parentName:"ul"},"Automated backups happening on all 3 environments.")),(0,r.kt)("h5",{id:"example-use"},"Example use"),(0,r.kt)("h6",{id:"development-dev"},"Development (DEV)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'CI/CD auto deploys "develop" branch of code repo to server.'),(0,r.kt)("li",{parentName:"ul"},"Prod database and files able to be copied down on demand, so that we can essentially replicate current prod site, on dev site. We need to do this for almost every update/fix."),(0,r.kt)("li",{parentName:"ul"},"This environment is used mainly to test new functionality requested, troubleshoot bug fixes, and test core/contrib updates."),(0,r.kt)("li",{parentName:"ul"},"Essentially, this environment is for the developers.")),(0,r.kt)("h6",{id:"staging-stg"},"Staging (STG)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'CI/CD auto deploys specific branch of code repo to server. This generally is used in a more "ad-hoc" fashion.'),(0,r.kt)("li",{parentName:"ul"},"Prod database and files able to be copied down on demand, so that we can essentially replicate current prod site, on stg site."),(0,r.kt)("li",{parentName:"ul"},'This environment is used mainly "as needed".'),(0,r.kt)("li",{parentName:"ul"},'Essentially, this environment is an "all around extra" sandbox, that can be used to train admins, test content, or as an additional development environment for larger features. It can also be used to stage large amounts of content/etc, however prod content freezes/etc would all need to be thought through.')),(0,r.kt)("h6",{id:"production-prod"},"Production (PROD)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'CI/CD auto deploys "master" branch of code repo to server.'),(0,r.kt)("li",{parentName:"ul"},"This environment is used as the live site."),(0,r.kt)("li",{parentName:"ul"},"New content, edits, etc happen directly here."),(0,r.kt)("li",{parentName:"ul"},'"Essentially, this environment is the "source of approved truth" for content and code.')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Additionally:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There are many variables that go into making an enterprise level drupal system perform smoothly, and efficiently."),(0,r.kt)("li",{parentName:"ul"},"Because of this, idfive does not provide specific recommendations for server setup (ie file storage size, memory size, etc), other than the general requirements stated above, unless specifically agreed to in the SOW by idfive."),(0,r.kt)("li",{parentName:"ul"},"If a client server is utilized, it will be on the client to provide an environment/environments set up by someone versed in drupal best practices, performance, and the scope of the project, in order to make accurate and informed decisions as to exact specs of server/environment setup."),(0,r.kt)("li",{parentName:"ul"},"It is for these reasons we recommend specific platforms, like acquia and pantheon, as they are tuned to scale for performance drupal sites. If these are not chosen, in favor of in-house assets, those assets are responsible for defining, and configuring the server environments as they see fit."),(0,r.kt)("li",{parentName:"ul"},"Essentially, server environments are necessary for the code to run, but require a skill-set for setup, performance, and maintenance that is quite different than that of a developer, especially for enterprise level projects."),(0,r.kt)("li",{parentName:"ul"},"We like to think of it like this: Michael Jordan is an amazing basketball player, but you likely would not ask him to also build the court he plays on. They are separate skills.")),(0,r.kt)("h2",{id:"git-repositories-continuous-integration-ci-and-continuous-deployment-cd"},"Git repositories Continuous Integration (CI), and Continuous Deployment (CD)"),(0,r.kt)("h3",{id:"git"},"Git"),(0,r.kt)("p",null,"idfive maintains a ",(0,r.kt)("a",{parentName:"p",href:"https://bitbucket.org/"},"bitbucket")," account, capable of private repositories, which we utilize for builds and maintenance for those with retainers. We can accommodate other vendors, such as GitHub or GitLab, under client accounts, if requested."),(0,r.kt)("h3",{id:"cicd"},"CI/CD"),(0,r.kt)("p",null,"Wherever possible, we prefer to use CI tools to automate builds and deployments. For larger builds, we usually recommend that clients use their own accounts, to ensure seamless deployments in the future, if not being maintained by us. idfive maintains a ",(0,r.kt)("a",{parentName:"p",href:"https://buddy.works/"},"buddy")," account which we utilize for builds and maintenance for those with retainers."),(0,r.kt)("p",null,"We commonly use CI to do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run npm install front end components"),(0,r.kt)("li",{parentName:"ul"},"Run npm commands to minify/compress assets for performance."),(0,r.kt)("li",{parentName:"ul"},"Run npm commands to deploy static front end style guides."),(0,r.kt)("li",{parentName:"ul"},"Run composer commands to keep modules/core/etc up to date."),(0,r.kt)("li",{parentName:"ul"},"Run drush commands on the server, post deployment.")),(0,r.kt)("p",null,"We can, of course, provide a non CI/CD codebase and workflow if desired, it may however, result in more overhead."),(0,r.kt)("h2",{id:"default-idfive-drupal-setup"},"Default idfive drupal setup"),(0,r.kt)("h3",{id:"core"},"Core"),(0,r.kt)("p",null,"If CI/CD used, we prefer to use a composer based setup for D8 core."),(0,r.kt)("h3",{id:"front-end-framework"},"Front end framework"),(0,r.kt)("p",null,"While we can accommodate any modern framework (if requested), we prefer to use the ",(0,r.kt)("a",{parentName:"p",href:"https://bitbucket.org/idfivellc/idfive-component-library"},"idfive Component Library")," for scaffolding the look and feel of client sites. We find that this minimal library we created lets us start with commonly used components in an intentionally un-styled state, to let us enact custom designs more rapidly."),(0,r.kt)("h3",{id:"themes"},"Themes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bitbucket.org/idfivellc/idfive-component-library-d8-theme"},"idfive Component Library D8 Theme"),". We utilize this as a base theme, providing commonly used functions, and features."),(0,r.kt)("li",{parentName:"ul"},"Custom client sub-theme. This is a child theme of above, and contains all custom styles and functions.")),(0,r.kt)("h3",{id:"modules"},"Modules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"idfive maintains a list of common contrib modules that we add to most projects. ",(0,r.kt)("a",{parentName:"li",href:"https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/general/partials/add_icl_modules.sh"},"Add ICL Modules")," has an up to date list of what idfive recommends as a baseline."),(0,r.kt)("li",{parentName:"ul"},"Any contrib modules that provide project specific functionality, and have been vetted by idfive DEV team."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs"},"idfive Component Library D8 Paragraphs"),". Provides a common starter to add things like accordions, tabs, etc."),(0,r.kt)("li",{parentName:"ul"},"Custom client base module. To hold any common custom functions/classes/etc, that need to be loaded via a module."),(0,r.kt)("li",{parentName:"ul"},"Further custom modules, as needed, for major functionality.")))}p.isMDXComponent=!0}}]);