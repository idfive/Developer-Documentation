"use strict";(self.webpackChunkidfive_docs=self.webpackChunkidfive_docs||[]).push([[6740],{5841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"general/design/templating","title":"Template design and integration at idfive","description":"For better or worse, the term \\"templates\\" can have a few different meanings here. New business tends to scope/sell things as a \\"number of templates\\" in order to kind of frame the scope of the project, and to make an estimation. Those numbers do not usually, however, directly correlate to templates on the backend, more so, it is usually the number of wireframes the client will receive.","source":"@site/docs/general/design/templating.md","sourceDirName":"general/design","slug":"/general/design/templating","permalink":"/docs/general/design/templating","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/general/design/templating.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Custom Views","permalink":"/docs/general/design/custom-views"},"next":{"title":"Views Implementation","permalink":"/docs/general/design/views"}}');var i=n(4848),s=n(8453);const o={},l="Template design and integration at idfive",r={},d=[{value:"Templating key concepts",id:"templating-key-concepts",level:2},{value:"Content types",id:"content-types",level:2},{value:"What a content type is",id:"what-a-content-type-is",level:3},{value:"What a content type is NOT",id:"what-a-content-type-is-not",level:3},{value:"Content type examples",id:"content-type-examples",level:3},{value:"Content types key takeaways",id:"content-types-key-takeaways",level:3},{value:"Display modes",id:"display-modes",level:3},{value:"Display mode examples",id:"display-mode-examples",level:4},{value:"Display mode key takeaways",id:"display-mode-key-takeaways",level:4},{value:"Views",id:"views",level:2},{value:"What a view is",id:"what-a-view-is",level:3},{value:"What a view is NOT",id:"what-a-view-is-not",level:3},{value:"Views examples",id:"views-examples",level:3},{value:"Views key takeaways",id:"views-key-takeaways",level:3},{value:"Components",id:"components",level:2},{value:"What a component is",id:"what-a-component-is",level:3},{value:"What a component is NOT",id:"what-a-component-is-not",level:3},{value:"Components examples",id:"components-examples",level:3},{value:"Components key takeaways",id:"components-key-takeaways",level:3}];function c(e){const t={h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"template-design-and-integration-at-idfive",children:"Template design and integration at idfive"})}),"\n",(0,i.jsx)(t.p,{children:'For better or worse, the term "templates" can have a few different meanings here. New business tends to scope/sell things as a "number of templates" in order to kind of frame the scope of the project, and to make an estimation. Those numbers do not usually, however, directly correlate to templates on the backend, more so, it is usually the number of wireframes the client will receive.'}),"\n",(0,i.jsx)(t.p,{children:"The following concepts are really aimed at how we actually put together modern CMS websites, from the UX phase, through design and development. Some terminology is borrowed from the drupal world, but we tend to use it generally when speaking about/building for any CMS. The idea is that these core concepts help us all be on the same page throughout UX and design process, to better align with how we ultimately implement modern CMS sites."}),"\n",(0,i.jsx)(t.h2,{id:"templating-key-concepts",children:"Templating key concepts"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Content type"}),"\n",(0,i.jsx)(t.li,{children:"View"}),"\n",(0,i.jsx)(t.li,{children:"Component"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"content-types",children:"Content types"}),"\n",(0,i.jsx)(t.h3,{id:"what-a-content-type-is",children:"What a content type is"}),"\n",(0,i.jsx)(t.p,{children:'A content type is a specification for a structured, standardized, reusable information entity. This really the basis of any modern CMS site. The key word, and concept here is "reusable". If it helps, think of the admin experience for site builders. "Add content, of type Article" makes sense, and is what you would expect. "Add content of type News Landing Page" does not, because there should only ever be one of those.'}),"\n",(0,i.jsx)(t.h3,{id:"what-a-content-type-is-not",children:"What a content type is NOT"}),"\n",(0,i.jsx)(t.p,{children:'With one usual, notable exception (the homepage), a content type is not to be used for "one off content". For example, we would not want to have a content type of "News Landing Page". Rather, we would use content type "Basic Page" or perhaps "Landing Page", and adjust content within it, via components to make the desired layout and design.'}),"\n",(0,i.jsx)(t.h3,{id:"content-type-examples",children:"Content type examples"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Homepage: This sometimes breaks the "reusable" rule, but is generally so specialized, that we don\'t have a real choice in some situations. It can however, if designed in a more component based manner, be reutilized as more generalized "landing pages" sometimes.'}),"\n",(0,i.jsx)(t.li,{children:'Basic page: Also called a "kitchen sink page" sometimes. The idea usually is that it can, via flexible components, be used to create almost any non standardized content desired.'}),"\n",(0,i.jsx)(t.li,{children:"Event"}),"\n",(0,i.jsx)(t.li,{children:"Article"}),"\n",(0,i.jsx)(t.li,{children:"Faculty Profile"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"content-types-key-takeaways",children:"Content types key takeaways"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Content types are the driving force behind views, or lists of content. It is sometimes tempting to combine content types, or use something like a basic page "for everything". While this sometimes has its merits, the downside is, we cannot then easily query, and list that content. For instance, we can easily say "Give me all content of type Event", we cannot easily say "Give me all the content of type basic page, that actually has to do with events, and not other stuff". Generally, if it needs its own view, it needs to be its own content type.'}),"\n",(0,i.jsx)(t.li,{children:'Combine when possible. Do we really need "short form article, long form article, and external news article", or can we simply have "article" with perhaps a tagging or field to indicate type? We can still accomplish views, via "Show me all content of type article, tagged with external news". Less content types mean less templates, less designs, and less for admins to sift through.'}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"display-modes",children:"Display modes"}),"\n",(0,i.jsx)(t.p,{children:'Each content type can have several display modes. What this means, in essence, is a definition of the fields and markups we will use when displaying the content, anywhere on the site. The only display mode each content type "MUST" have, is full content. This is sometimes referred to as a "detail page" or "full view". Essentially, it is what you see when you get to the individual content, such as an article. Additional display modes define how that content shows up in views, and possibly other components. For example, if a content type is to appear in search, we need a truncated version of that content to display there, usually something like display mode "Teaser", or similar. If you wish to display say content of typ "Article" in a cards group for "related articles" or similar, you would need a display mode "Card" in order to template/format that display.'}),"\n",(0,i.jsx)(t.h4,{id:"display-mode-examples",children:"Display mode examples"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Full content"}),"\n",(0,i.jsx)(t.li,{children:"Teaser"}),"\n",(0,i.jsx)(t.li,{children:"Card"}),"\n",(0,i.jsx)(t.li,{children:"Search result"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"display-mode-key-takeaways",children:"Display mode key takeaways"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'Display modes are global. A "Teaser" can, and should, be used for multiple content types. In that way, we can combine multiple content types into a single view, such as on a search page. For instance, a search results page would be "show me content of type Article, Basic Page, and Event, that match the search query, shown as display mode Teaser". In this way, each content type would then be shown in the search results, using its own teaser template.'}),"\n",(0,i.jsx)(t.li,{children:'Just because a display mode is global, does not mean every content type needs to use it. For instance, if a "Profile" content type will never appear as a "card" within a view, we do not need to design/template the card display mode for profiles.'}),"\n",(0,i.jsx)(t.li,{children:'Display modes use different templates for different content types. In that way, a teaser for an article, could technically be completely different than a teaser for an event. We don\'t really want this though, because they could easily be intermixed into a combined view. In essence we want them "mostly the same" or at least "intermixable", between content types. Small changes, and specific fields are definitely possible though, for instance, if an article teaser should get a published date, and an events teaser should get a start/end date, totally doable.'}),"\n",(0,i.jsx)(t.li,{children:"Less is more. Every display mode, for every content type requires templating. Do we really need to display, say, an event 5 different ways? We can of course, if required, just something to think about."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"views",children:"Views"}),"\n",(0,i.jsx)(t.h3,{id:"what-a-view-is",children:"What a view is"}),"\n",(0,i.jsx)(t.p,{children:'A listing of content. Usually, this is a listing of some, or all, of a content of a specific type. A "News Landing Page", for example, could be a listing of "All content, of type Article, with defined filters, and pagination, shown as display mode Teaser".'}),"\n",(0,i.jsx)(t.h3,{id:"what-a-view-is-not",children:"What a view is NOT"}),"\n",(0,i.jsx)(t.p,{children:'A complete page. A view can be "on a page", and can even be "most of a page", or "the main content on a page", but at its heart, it is a component, to be used throughout the site. For example, a "News Landing Page", would be content of type basic page, that could have several components (like an intro, or featured articles/etc), then a view of "All content, of type Article, with defined filters, and pagination, shown as display mode Teaser", also added as a component.'}),"\n",(0,i.jsx)(t.h3,{id:"views-examples",children:"Views examples"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Search"}),"\n",(0,i.jsx)(t.li,{children:"Homepage news feed"}),"\n",(0,i.jsx)(t.li,{children:"News archive"}),"\n",(0,i.jsx)(t.li,{children:"Events calendar"}),"\n",(0,i.jsx)(t.li,{children:"Faculty listing"}),"\n",(0,i.jsx)(t.li,{children:"Related articles"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"views-key-takeaways",children:"Views key takeaways"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'When designing pages that are "mostly views", remember, at its core, it (ideally) needs to share the same design as a basic page. Ie, it is "a unique design within the content portion of a basic page", not "a unique page".'}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,i.jsx)(t.h3,{id:"what-a-component-is",children:"What a component is"}),"\n",(0,i.jsx)(t.p,{children:'Components are reusable elements that can be added, reordered, and duplicated on (specific) content types, in order to create unique layouts and content. Sometimes referred to as "widgets" or "kitchen sink widgets", they are the building blocks for modular content throughout a site. The idfive Component Library is a great example of some stock components we maintain. Normally, a CMS site build will consist of some/all ICL components, as well as custom components needed for that client/project.'}),"\n",(0,i.jsx)(t.h3,{id:"what-a-component-is-not",children:"What a component is NOT"}),"\n",(0,i.jsx)(t.p,{children:'A single piece of unique content. Since it is a reusable template, it can be used "on any page" if desired. What this means is that the "this should never exist anywhere on the site except page xx" cannot happen. If you can add it to one page, technically you can add it to "any page".'}),"\n",(0,i.jsx)(t.h3,{id:"components-examples",children:"Components examples"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Accordion"}),"\n",(0,i.jsx)(t.li,{children:"Carousel"}),"\n",(0,i.jsx)(t.li,{children:"Call to Action"}),"\n",(0,i.jsx)(t.li,{children:"Lead in"}),"\n",(0,i.jsx)(t.li,{children:"Form"}),"\n",(0,i.jsx)(t.li,{children:'View (how we actually "insert a view onto the page")'}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"components-key-takeaways",children:"Components key takeaways"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'With great power comes great responsibility. Using a component based approach helps folks build great and interesting sites. In the wrong hands however, things can get ugly fast. Really think about the client, and their capabilities before going "hog wild on widgets".'}),"\n",(0,i.jsx)(t.li,{children:"Less is more. Too many options to choose from can cause paralysis in admins when page building. It is not uncommon for us to design and build 20 components for clients, only to see that they have chosen to use the WYSIWYG instead 90% of the time."}),"\n",(0,i.jsx)(t.li,{children:'Combine when possible. When widgets are very similar, even down to the fields required, lets combine them. For instance, call to actions are usually extremely similar, but sometimes require small style changes for different pages/etc. Ideally, we want to have one widget, "Call to Action", with maybe a select list or similar as to "style 1, style 2, etc" rather than several completely different components. This saves us time templating, creating fields, etc, but also is more manageable to the end admin user. In a perfect world, combining these would be thought about during the design phase.'}),"\n",(0,i.jsx)(t.li,{children:'Any content type (usually) can contain components, but does not always need to. An event, for instance, probably does not need the full suite of components available to it. In general, we only really want to add these sections when needed, not simply "because we can".'}),"\n",(0,i.jsx)(t.li,{children:"We can (usually) specify what components are available to specific content types, if required. For instance, it may be desired to have accordions, and a few other basic components on say, an article. We can (and should) limit what is available there. Every additional widget means more potential combinations to QC."}),"\n",(0,i.jsx)(t.li,{children:"A component does not take the place of specific fields on content types. Components are both additive, and optional. We cannot rely that they will always be there on a specific content type."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var a=n(6540);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);