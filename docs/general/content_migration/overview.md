# Content Migration Overview

Content migrations are, in all honesty, fickle, challenging, and labor-intensive. When we say "content migration", we mean a (usually automated) transfer of existing content from an old site to a new one. This also usually happens at the same time as a CMS upgrade, as well as content restructuring.

## Some considerations

- How many "different content types" exist on the site to be migrated? Sites that have thousands of pages, of all the same content type are vastly less work than a site with 12 content types, with a hundred pages of each.
- How many pieces of content, for each content type exist, and are to be migrated? Is it easier to do manually?
- Is the content in a CMS that allows for robust exports?
- Will all of them go over "one for one" to the new system? It is a good time to cull and modify. Do you "really" need to bring in events from 5 years ago into the new system?
- What types of assets (files/images/etc) will be moved, and how is the current system structured?
- What is the integrity of the content?
- What is the integrity of the taxonomy/tagging scheme?
- If coming from a current D7 site, or others, are there existing entity references to consider?
- How is the data structured? Distinct fields, or all in the WYSIWYG?
- Are there taxonomies that need to be maintained?
- Are there URL's that need to be maintained?

## Estimating content migrations

First, lets acknowledge, that the question "how long will it take to migrate this site", is one that gets asked, but will in no way get you an accurate answer. Oftentimes, people assume that the "number of pages" is the key factor here, and oftentimes, they are wrong. Simply speaking, the number of content types, and their individual complexity, is the determining factor. The time to build an importer for a content type is the same, whether I am importing 10 pieces of content or 1,000, and the time lies, in building and testing each importer. Page "number", only really comes into play when attempting to answer the question "Is this worth building an importer for, or can we manually migrate?".

There are several key questions we need to know the answer to, or have a ballpark on, before we can even begin to get in the neighborhood of an estimation.

### 1. How many content types are there

Unless we are specifically provided with them, or we have access to the backend of a clients existing CMS to try and figure it out, this is by all means, a guess. Looking at the frontend of an existing website, and sorting out the types of content available can be both time consuming, and inaccurate. Automation of this is also not really possible, as their is no real "standard" for what say an article, or event looks like in code. That being said, here are some tools to help:

- Look to the main navigation. Often times it will attempt to outline major sections of the site, like news, events, etc. Often times these will be unique content types.
- Older websites will often have many pages that are not accessible from the main navigation. Create a content inventory of the current site to get a sense of what/how much content exists. Use something like [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) to crawl the site, and list its inventory. Depending on the size of the site, this crawl could take several hours, and does require a license key. Be prepared to wade through some garbage if it is an older legacy site.
- Look to the URL structure. Most times, site-builders try to lay out URL's with a structure. By that, I mean that things events usually live at a URL like `/events/event_title`. If we see multiple URL's with the same pattern, like `/events/1`, `/events/2`, and `/events/3`, we can assume that there is a content type of "Event".

### 2. What do they consist of

All content, as they say, is not created equal. The difficulty of migrating each content type is in direct correlation to the structure of its data. A title and a body field? Easy peasy. References to related content, by ID, in a structure that would need to be maintained? harder.

Some common fields that take us longer:

- Terms/tags/vocabularies. It really depends on how we can get a data export. If we can get a comma separated list of say, tags, per node, this is easily done. If we only have ID's, or similar, we would need to first create a separate importer for all those terms, and maintain legacy ID's/etc.
- Internal links. It is really hard to try and parse text or even fields for old URL's, and match them to new ones. Mainly, because usually the structure and menus change at the same time.
- Non standard WYSIWYG markup. Things like WordPress, and legacy drupal tended to use things like short-codes in body text to do things like show carousels/etc. These are quite hard to pull over in the way they are designed.
- Blocks. If legacy D7 site, it sometimes relies on blocks for content. These are hard to migrate, because they rely on (usually) URL patterns or content type visibility to display unrelated content across pages.
- Images. Images, per say, are not complex, the complexities lie in that we normally want to migrate theme to something like a media entity in D8, so that they are reusable/etc.
- Entity references. These get tricky, fast. Essentially, we need to (usually) create any referenced entities first, with the same ID as prior. For example, if an event has a reference to say, an article, that article needs to exist in the system before we can create the event in question.

### 3. What CMS's are involved

Different CMS's have levels of import/export capabilities that vary from non-existent, to adequate, to robust. One we throw closed source CMS's like Omni Update, or T4 into the mix, things get complex as well, because we cannot always readily access documentation on their closed source systems, and what may/may not be available.

- What is the content currently in. Can we export both it, and any files, vocabularies, entities easily?
- What CMS is the content going in to. Platforms like drupal 8 have almost infinite flexibility for custom importers, others, well, do not.
- If not currently in a CMS, some options do exist, but generally require more time and effort.

### 4. What's changing, what's not

Since "migration" usually happens at the same time as a major rebuild, and reorganization, it's tough to know what is staying, and what is going, content wise.

- If the above 3 questions are answered, it can be somewhat straightforward to say "what will it take to move content type x over to the new site, basically how it exists now". However, more often, the question is "what will it take to move content type x over to the new site, and do a bunch of stuff we haven't really defined yet".
- Try and get a sense, wherever possible, if their are opportunities for consolidation, or removal of extraneous content, or content types.
- Consider the URL structure. Will it change? Are bulk redirects needed?

### 5. Assets

Legacy sites mean legacy files, usually, a lot of poorly managed ones. Since we usually use the migration/site build as an opportunity for cleanup, this deserves a long, hard look.

- Are there links directly to things like .pdf's that need to be maintained?
- Is the assets folder, as it currently exists, something we can move to the new CMS?
- What types of assets, other than images and docs, exist an need to be accounted for?

## Content exporting CMS specifics

### WordPress content exporting

- If the site you will be importing on is another WordPress site, simply look at the built in tools/export feature.

### Drupal 7 content exporting

- [Views data export](https://www.drupal.org/project/views_data_export) can be used to set up content exports.
- It does require a bit of setup per content type, and possibly custom views adjustments, that would need to be performed on a clone of the site we would be exporting content from. Usually this is best accomplished via a full local install of the current d7 site by an idfive developer, which could take a bit of time.

### Static content exporting

In general, this is less than desireable. While possible to scrape a site, and parse things, it is problematic for many reasons. The "best case" for this, would be something like articles, or blog posts, that have structured fields, and (hopefully) a defined, distinct template. If at all possible, exports from a CMS or similar are preferred.

- See [a video we did](https://www.dropbox.com/s/rfg1mjo5aijatte/scrapr-demo.mp4?dl=0) on testing of [importer.io](http://importer.io).
- This has lots of possibilities  to scrape static content, but does require subscription, and does require configuration and familiarization with the tool.
- Requires URL structure to be logical.

## Content importing specifics

### WordPress content importing

- If the content you will be importing is from another WordPress site (via tools/export), simply look at the built in tools/import feature.
- WordPress' native import function will only import media from remote _if_ a full export has been done. Exports of specific content types will not allow for a media import even if the checkbox is checked. A few plugins might be able to mitigate this.

#### Plugins

- WP All Import Pro includes a GUI for content mapping across fields. Combined with WP All Export, one can export existing WordPress content from an older site into the field mapping of a new site. 


### Drupal 8 content importing

For importing into drupal 8 sites, two major options exist, [Feeds](https://www.drupal.org/project/feeds) and [Migrate](https://www.drupal.org/docs/8/api/migrate-api/migrate-api-overview).

#### Feeds

Generally speaking, feeds works pretty well for importing content into drupal 8. Most "regular content" that can be "one for one matched", id quite fast to set up importers for. Complex, and custom fields can however, require custom solutions that sometimes need to be robust.

- You create a custom importer for each "content type export" you have, and match it as best as possible to the new desired, and constructed content type.
- This gives us flexibility to create custom parsers/etc, if needed, per content import. This can be used to normalize fields, adjust taxonomies, etc.

##### Feeds considerations

- Media. Most exports likely contain images/files/etc. Normally, we wish to change these to media in d8, so we can utilize the core media module.
- Entity references. If the exported content contains entity references that need to be maintained, special ordering of the imports, and care to match NID's must be maintained.
- Taxonomies. Can be created on the fly, but sometimes its best to create first, depending on the integrity of the content being imported.

#### Migrate

TBD by Anthony
