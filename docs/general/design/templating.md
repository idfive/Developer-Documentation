# Template design and integration at idfive

For better or worse, the term "templates" can have a few different meanings here. New business tends to scope/sell things as a "number of templates" in order to kind of frame the scope of the project, and to make an estimation. Those numbers do not usually, however, directly correlate to templates on the backend, more so, it is usually the number of wireframes the client will receive.

The following concepts are really aimed at how we actually put together modern CMS websites, from the UX phase, through design and development. Some terminology is borrowed from the drupal world, but we tend to use it generally when speaking about/building for any CMS. The idea is that these core concepts help us all be on the same page throughout UX and design process, to better align with how we ultimately implement modern CMS sites.

## Templating key concepts

- Content type
- View
- Component

## Content types

### What a content type is

A content type is a specification for a structured, standardized, reusable information entity. This really the basis of any modern CMS site. The key word, and concept here is "reusable". If it helps, think of the admin experience for site builders. "Add content, of type Article" makes sense, and is what you would expect. "Add content of type News Landing Page" does not, because there should only ever be one of those.

### What a content type is NOT

With one usual, notable exception (the homepage), a content type is not to be used for "one off content". For example, we would not want to have a content type of "News Landing Page". Rather, we would use content type "Basic Page" or perhaps "Landing Page", and adjust content within it, via components to make the desired layout and design.

### Content type examples

- Homepage: This sometimes breaks the "reusable" rule, but is generally so specialized, that we don't have a real choice in some situations. It can however, if designed in a more component based manner, be reutilized as more generalized "landing pages" sometimes.
- Basic page: Also called a "kitchen sink page" sometimes. The idea usually is that it can, via flexible components, be used to create almost any non standardized content desired.
- Event
- Article
- Faculty Profile

### Content types key takeaways

- Content types are the driving force behind views, or lists of content. It is sometimes tempting to combine content types, or use something like a basic page "for everything". While this sometimes has its merits, the downside is, we cannot then easily query, and list that content. For instance, we can easily say "Give me all content of type Event", we cannot easily say "Give me all the content of type basic page, that actually has to do with events, and not other stuff". Generally, if it needs its own view, it needs to be its own content type.
- Combine when possible. Do we really need "short form article, long form article, and external news article", or can we simply have "article" with perhaps a tagging or field to indicate type? We can still accomplish views, via "Show me all content of type article, tagged with external news". Less content types mean less templates, less designs, and less for admins to sift through.

### Display modes

Each content type can have several display modes. What this means, in essence, is a definition of the fields and markups we will use when displaying the content, anywhere on the site. The only display mode each content type "MUST" have, is full content. This is sometimes referred to as a "detail page" or "full view". Essentially, it is what you see when you get to the individual content, such as an article. Additional display modes define how that content shows up in views, and possibly other components. For example, if a content type is to appear in search, we need a truncated version of that content to display there, usually something like display mode "Teaser", or similar. If you wish to display say content of typ "Article" in a cards group for "related articles" or similar, you would need a display mode "Card" in order to template/format that display.

#### Display mode examples

- Full content
- Teaser
- Card
- Search result

#### Display mode key takeaways

- Display modes are global. A "Teaser" can, and should, be used for multiple content types. In that way, we can combine multiple content types into a single view, such as on a search page. For instance, a search results page would be "show me content of type Article, Basic Page, and Event, that match the search query, shown as display mode Teaser". In this way, each content type would then be shown in the search results, using its own teaser template.
- Just because a display mode is global, does not mean every content type needs to use it. For instance, if a "Profile" content type will never appear as a "card" within a view, we do not need to design/template the card display mode for profiles.
- Display modes use different templates for different content types. In that way, a teaser for an article, could technically be completely different than a teaser for an event. We don't really want this though, because they could easily be intermixed into a combined view. In essence we want them "mostly the same" or at least "intermixable", between content types. Small changes, and specific fields are definitely possible though, for instance, if an article teaser should get a published date, and an events teaser should get a start/end date, totally doable.
- Less is more. Every display mode, for every content type requires templating. Do we really need to display, say, an event 5 different ways? We can of course, if required, just something to think about.

## Views

### What a view is

A listing of content. Usually, this is a listing of some, or all, of a content of a specific type. A "News Landing Page", for example, could be a listing of "All content, of type Article, with defined filters, and pagination, shown as display mode Teaser".

### What a view is NOT

A complete page. A view can be "on a page", and can even be "most of a page", or "the main content on a page", but at its heart, it is a component, to be used throughout the site. For example, a "News Landing Page", would be content of type basic page, that could have several components (like an intro, or featured articles/etc), then a view of "All content, of type Article, with defined filters, and pagination, shown as display mode Teaser", also added as a component.

### Views examples

- Search
- Homepage news feed
- News archive
- Events calendar
- Faculty listing
- Related articles

### Views key takeaways

- When designing pages that are "mostly views", remember, at its core, it (ideally) needs to share the same design as a basic page. Ie, it is "a unique design within the content portion of a basic page", not "a unique page".

## Components

### What a component is

Components are reusable elements that can be added, reordered, and duplicated on (specific) content types, in order to create unique layouts and content. Sometimes referred to as "widgets" or "kitchen sink widgets", they are the building blocks for modular content throughout a site. The idfive Component Library is a great example of some stock components we maintain. Normally, a CMS site build will consist of some/all ICL components, as well as custom components needed for that client/project.

### What a component is NOT

A single piece of unique content. Since it is a reusable template, it can be used "on any page" if desired. What this means is that the "this should never exist anywhere on the site except page xx" cannot happen. If you can add it to one page, technically you can add it to "any page".

### Components examples

- Accordion
- Carousel
- Call to Action
- Lead in
- Form
- View (how we actually "insert a view onto the page")

### Components key takeaways

- With great power comes great responsibility. Using a component based approach helps folks build great and interesting sites. In the wrong hands however, things can get ugly fast. Really think about the client, and their capabilities before going "hog wild on widgets".
- Less is more. Too many options to choose from can cause paralysis in admins when page building. It is not uncommon for us to design and build 20 components for clients, only to see that they have chosen to use the WYSIWYG instead 90% of the time.
- Combine when possible. When widgets are very similar, even down to the fields required, lets combine them. For instance, call to actions are usually extremely similar, but sometimes require small style changes for different pages/etc. Ideally, we want to have one widget, "Call to Action", with maybe a select list or similar as to "style 1, style 2, etc" rather than several completely different components. This saves us time templating, creating fields, etc, but also is more manageable to the end admin user. In a perfect world, combining these would be thought about during the design phase.
- Any content type (usually) can contain components, but does not always need to. An event, for instance, probably does not need the full suite of components available to it. In general, we only really want to add these sections when needed, not simply "because we can".
- We can (usually) specify what components are available to specific content types, if required. For instance, it may be desired to have accordions, and a few other basic components on say, an article. We can (and should) limit what is available there. Every additional widget means more potential combinations to QC.
- A component does not take the place of specific fields on content types. Components are both additive, and optional. We cannot rely that they will always be there on a specific content type.
