"use strict";(self.webpackChunkidfive_docs=self.webpackChunkidfive_docs||[]).push([[9086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,y=d["".concat(l,".").concat(p)]||d[p]||h[p]||i;return n?o.createElement(y,r(r({ref:t},u),{},{components:n})):o.createElement(y,r({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={},r="Terminalfour",s={unversionedId:"back-end/terminalfour/terminalfour",id:"back-end/terminalfour/terminalfour",title:"Terminalfour",description:"Overview",source:"@site/docs/back-end/terminalfour/terminalfour.md",sourceDirName:"back-end/terminalfour",slug:"/back-end/terminalfour/",permalink:"/docs/back-end/terminalfour/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/back-end/terminalfour/terminalfour.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TerminalFour (T4)",permalink:"/docs/category/terminalfour-t4"},next:{title:"Wordpress",permalink:"/docs/category/wordpress"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Content Creation",id:"content-creation",level:2},{value:"Content Types",id:"content-types",level:2},{value:"Content Layouts",id:"content-layouts",level:2},{value:"Page Layouts",id:"page-layouts",level:2},{value:"Navigation",id:"navigation",level:2},{value:"Top Content",id:"top-content",level:3},{value:"Related Content",id:"related-content",level:3},{value:"Using Navigation Objects",id:"using-navigation-objects",level:3},{value:"Full Example",id:"full-example",level:3},{value:"Accordion",id:"accordion",level:4},{value:"Accordion Section",id:"accordion-section",level:4},{value:"Accordion Section Navigation Object",id:"accordion-section-navigation-object",level:4},{value:"Useful Links",id:"useful-links",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"terminalfour"},"Terminalfour"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Terminalfour (T4) is a unique CMS compared to more common CMS's Drupal and Wordpress with a somewhat steep learning curve due to the somewhat unorthodox way that it is structured and works. The biggest change from a development standpoint is that all backend work is done directly in the CMS and there is only a single environment to work in. This makes it somewhat error-prone and requires the developer to be extremely careful to not accidentally deploy features that are still in active development."),(0,a.kt)("h2",{id:"content-creation"},"Content Creation"),(0,a.kt)("p",null,"Terminalfour's approach to content is based around a few core concepts/features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Content Types"),(0,a.kt)("li",{parentName:"ul"},"Sections"),(0,a.kt)("li",{parentName:"ul"},"Branches")),(0,a.kt)("p",null,"Content Types are conceptionally similar to the same feature in most CMS's like Drupal with their own unique quirks that will be discussed in a later section. Sections are essentially just directories used to create the general site structure and typically each individual page will have its own section. Branches are portions of the IA that include both a root section and all of the child sections contained within that root."),(0,a.kt)("h2",{id:"content-types"},"Content Types"),(0,a.kt)("p",null,'The biggest difference between T4\'s Content Type implementation and something like Drupal or Wordpress is that everything that can be displayed on a page is a Content Type. With a CMS like Drupal, Content Types would be used for general "page types" like Basic Pages or News Articles and then you might have Paragraph Widgets for components that you\'d place on a page; however, in T4 Content Types include anything that can be placed on a page. For instance, in Drupal you might have a Basic Page Content Type that includes a "Body" WYSIWYG field for the main page content as well as a "Widgets" field for adding components like accordions, blockquotes, etc. to round out the page. In T4 though, the "Body" field would be a distinct Content Type containing a WYSIWYG field and then each widget would be its own Content Type as well. In some cases like accordions, it may also be multiple related Content Types, I.E. an "Accordion" Content Type that displays "Accordion Section" entities from within the same section.'),(0,a.kt)("h2",{id:"content-layouts"},"Content Layouts"),(0,a.kt)("p",null,'In a CMS like Drupal, you\'d generally have templates that correspond to things like pages, nodes, widgets, etc. Due to the nature in which Content Types work in T4 though, each Content Type has its own templates in the form of "Content Layouts". In its most basic form, a Content Type\'s Content Layouts will consist of a single "text/html" layout. This is what T4 defaults to when an instance of a Content Type is added to a section. In many cases this single layout will be sufficient but in more complex cases you may need to display content in different ways based on context (I.E. a news article displayed as a teaser versus the full article output). In those cases you\'ll create a layout for each way that the content is displayed.'),(0,a.kt)("h2",{id:"page-layouts"},"Page Layouts"),(0,a.kt)("p",null,'In addition to Content Layouts, T4 also includes Page Layouts which are templates that contain common elements like a header and footer. Page Layouts can be set on a per-section basis under the "Page Layouts" tab when editing a specific section. By setting the Page Layout and Inheritable page layout for the desired site, it will allow you to control which layout the current section uses as well as what layout child sections will use by default.'),(0,a.kt)("h2",{id:"navigation"},"Navigation"),(0,a.kt)("p",null,"In the Content Layouts section we discussed how you can create different Content Layouts for cases like a news article teaser, card, etc. but we didn't explain how exactly those layouts can be used. By default, T4 renders content in a section using each Content Type's \"text/html\" layout which is usually what you'd want to display. But in certain cases like a feed of news articles displayed as teasers, this wouldn't be appropriate as it would display the full content for each article. In order to achieve this, you'd create a new Content Layout for the corresponding Content Type. You can name these custom layouts anything you want, in the case of an article teaser something like \"text/teaser\" is a logical choice."),(0,a.kt)("p",null,'In order to render out a list of articles though you\'d need a way to source the desired content and also specify that the content being sourced should be rendered using the "text/teaser" layout. This is where Navigation objects come into play. Navigation objects allow you to select content, sections, etc. and then configure how that content should be output. There are quite a few different Navigation object types but the two most commonly used are "Top Content" and "Related Content".'),(0,a.kt)("h3",{id:"top-content"},"Top Content"),(0,a.kt)("p",null,"Top Content allows you to specify where the content being sourced should be fetched from. The choices are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use section"),(0,a.kt)("li",{parentName:"ul"},"Use branch"),(0,a.kt)("li",{parentName:"ul"},"Use current"),(0,a.kt)("li",{parentName:"ul"},"Use current section")),(0,a.kt)("p",null,'"Use section" allows you to pick a specific section from the site\'s structure, "Use branch" is similar but will include content from both the selected section and its child sections, "Use current" allows you to select content from the section where the Navigation object is contained, and "Use branch" does the same but also fetches content from child sections of the containing section.'),(0,a.kt)("p",null,'Top Content also has settings for "Content type name", "Number of pieces of content to display", "Which piece of content to start at?", "Content layouts", "Before HTML", and "After HTML". Most of these are self explanatory but "Content layouts" is the most important. This setting can be set to either "Use channel default" or "Use alternate content layout". By setting it to the latter, you can provide the name of a specific Content Layout that should be used for the sourced content (I.E. in the news article teaser example, you\'d provide "text/teaser").'),(0,a.kt)("h3",{id:"related-content"},"Related Content"),(0,a.kt)("p",null,"Related Content is functionally similar to Top Content but it lacks the ability to specify a limit, offset, or Content Type to look for. This option will usually only be used in cases where a section/branch contains entries of a single content type."),(0,a.kt)("h3",{id:"using-navigation-objects"},"Using Navigation Objects"),(0,a.kt)("p",null,"Once a Navigation Object has been created, in order to use it you need to output it in a Content Layout using a T4 Navigation Object tag."),(0,a.kt)("h3",{id:"full-example"},"Full Example"),(0,a.kt)("p",null,'As an example, we\'ll look at how an Accordion component might be created. You\'d first start off with two Content Types: "Accordion" and "Accordion Section".'),(0,a.kt)("h4",{id:"accordion"},"Accordion"),(0,a.kt)("p",null,'The "Accordion" Content Type\'s "text/html" layout would most likely look something like this:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<div class="accordion"></div>\n')),(0,a.kt)("h4",{id:"accordion-section"},"Accordion Section"),(0,a.kt)("p",null,"Since these sections need to be sourced from a Navigation object in order to be output properly inside the ",(0,a.kt)("inlineCode",{parentName:"p"},".accordion"),' element of the parent "Accordion" content entity, in this case we\'d omit the "text/html" layout entirely to prevent T4 from outputting the sections on its own. Instead, we\'d create a layout named something like "text/section" that looks like this:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<div class="accordion__section">\n  <button class="accordion__section-label">\n    <t4 type="content" name="Label" output="normal" modifiers="striptags, htmlentities" />\n  </button>\n  <div class="accordion__section-content">\n    <t4 type="content" name="Content" output="normal" modifiers="medialibrary, nav_sections" />\n  </div>\n</div>\n')),(0,a.kt)("h4",{id:"accordion-section-navigation-object"},"Accordion Section Navigation Object"),(0,a.kt)("p",null,'Once those Content Types have been created, you\'d need to create a Navigation Object to source the "Accordion Section" entities to be output inside the "Accordion" entity included within the same Section as those "Accordion Section" entities. In this case, we could use Top Content, set the Fetch Method to "Use current", specify "Accordion Section" as the Content type, and "text/section" as the Content layout. Once this is created, we need to update the "text/html" layout of the "Accordion" Content Type to include this Navigation object. The template would now look like this:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<div class="accordion">\n  <t4 type="navigation" id="123" />\n</div>\n')),(0,a.kt)("p",null,'Finally, in order to use it on a page, you\'d create an "Accordion" entity inside a Section along with "Accordion Section" entities and publish the section.'),(0,a.kt)("h2",{id:"useful-links"},"Useful Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/anthonybarsotti/keele-nav-objects-cheatsheet"},"Navigation objects cheatsheet")," This includes recipes for things like selective/conditional output."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.terminalfour.com/documentation/"},"Terminalfour Knowledge Base"))))}h.isMDXComponent=!0}}]);