# Content Migration Overview

Content migrations are, in all honesty, fickle, challenging, and labor-intensive. When we say "content migration", we mean a transfer of existing content from an old site to a new one, and/or actually building different pages on the site from Copy Docs. This also usually happens at the same time as a CMS upgrade, as well as content restructuring. For the purposes of this document, we are focusing on what can, or cannot be automated for those migrations.

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

Consider looking into content migration as part of the TechScan to answer the questions we have laid out here as early in the project as possible, to adjust expectation ASAP.

Use the SiteMap as soon as we have one to ensure/find a solution for some of the proposed “existing content” sections. There might be an opportunity there to either find which areas can have “automatic migration” and which will have to be manual.

## Estimating content migrations

First, lets acknowledge, that the question "how long will it take to migrate this site", is one that gets asked, but will in no way get you an accurate answer. Oftentimes, people assume that the "number of pages" is the key factor here, and oftentimes, they are wrong. Simply speaking, the number of content types, and their individual complexity, is the determining factor. The time to build an importer for a content type is the same, whether I am importing 10 pieces of content or 1,000, and the time lies, in building and testing each importer. Page "number", only really comes into play when attempting to answer the question "Is this worth building an importer for, or can we manually migrate?".

Some extremely rough ballparks to keep in mind:

- Manual migrations: 3 pages per hour, simple pages.
- Manual migrations: 1-2 hours per page, complex pages.
- Automated migrations: 2-4 hours per content type, simple content type.
- Automated migrations: 4-? hours per content type, complex content type.

There are several key questions we need to know the answer to, or have a some details on, before we can even begin to get in the neighborhood of a decent estimation.

### 1. How many content types are there

Unless we are specifically provided with them, or we have access to the backend of clients existing CMS to try and figure it out, this is, by all means, a guess. Looking at the frontend of an existing website, and sorting out the types of content available can be both time consuming, and inaccurate. Automation of this is also not really possible, as there is no real "standard" for what say an article, or event looks like in code. That being said, here are some tools to help:

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

### 3. What CMSs are involved

Different CMSs have levels of import/export capabilities that vary from non-existent, to adequate, to robust. One we throw closed source CMSs like Omni Update, or T4 into the mix, things get complex as well, because we cannot always readily access documentation on their closed source systems, and what may/may not be available.

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

- See [a video we did](https://www.dropbox.com/s/rfg1mjo5aijatte/scrapr-demo.mp4?dl=0) on testing of [import.io](http://import.io).
- This has lots of possibilities  to scrape static content, but does require subscription, and does require configuration and familiarization with the tool.
- Requires URL structure to be logical.

## Content importing specifics

### WordPress content importing

- If the content you will be importing is from another WordPress site (via tools/export), simply look at the built in tools/import feature.
- WordPress' native import function will only import media from remote _if_ a full export has been done. Exports of specific content types will not allow for a media import even if the checkbox is checked. A few plugins might be able to mitigate this.

#### Plugins

- WP All Import Pro includes a GUI for content mapping across fields. Combined with WP All Export, one can export existing WordPress content from an older site into the field mapping of a new site.


### Drupal 8 content importing

For importing into drupal 8 sites, two major options exist, [Feeds](https://www.drupal.org/project/feeds) and [Migrate API](https://www.drupal.org/docs/8/api/migrate-api/migrate-api-overview).

#### Feeds

Generally speaking, feeds works pretty well for importing content into drupal 8. Most "regular content" that can be "one for one matched", id quite fast to set up importers for. Complex, and custom fields can however, require custom solutions that sometimes need to be robust.

- You create a custom importer for each "content type export" you have, and match it as best as possible to the new desired, and constructed content type.
- This gives us flexibility to create custom parsers/etc, if needed, per content import. This can be used to normalize fields, adjust taxonomies, etc.

##### Feeds considerations

- Media. Most exports likely contain images/files/etc. Normally, we wish to change these to media in d8, so we can utilize the core media module.
- Entity references. If the exported content contains entity references that need to be maintained, special ordering of the imports, and care to match NID's must be maintained.
- Taxonomies. Can be created on the fly, but sometimes its best to create first, depending on the integrity of the content being imported.

#### Migrate API

The Migrate API provides services for migrating data from a source system to Drupal 8. The migration api uses the following modules for managing migrations
- Drupal 8 core Migrate module implements the general-purpose framework.
- Drupal 8 core Migrate Drupal module builds on that foundation to provide an upgrade path from Drupal 6 and Drupal 7 to Drupal 8.
- Drupal 8 core Migrate Drupal UI module provides a browser user interface for Migrate Drupal.

Migrations use the process of [Extract - Transform - Load (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load). These processes translate to
- **[Source (extract phase)](https://www.drupal.org/docs/8/api/migrate-api/migrate-source-plugins):** In this phase we pull all data from the source and prepare for processing. This can utilize existing [core plugins](https://www.drupal.org/docs/8/api/migrate-api/migrate-source-plugins/overview-of-migrate-source-plugins) or a custom plugin by existing the SourcePluginBase class.
- **[Transform (process phase)](https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins):** In this phase the data that has been pulled from the extract phase is manipulated and prepared for import in the destination phase. This can utilize existing [core plugins](https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/list-of-core-migrate-process-plugins) or a [custom plugin](https://www.drupal.org/docs/8/api/migrate-api/migrate-process/writing-a-process-plugin) by extending the ProcessPluginBase class.
- **[Destination (load phase)](https://www.drupal.org/docs/drupal-apis/migrate-api/migrate-destination-plugins-examples):** In this phase the extracted and processed information gets sent to the destination within Drupal. Typical destinations include any entity in Drupal such as users, content, media and taxonomies. There is no limit to the type of destinations that can be targeted as custom destination plugins can be written to allow mappings to any type of data.

In the source phase, a set of data, called the row, is retrieved from the data source. The data can be migrated from a database, loaded from a file (for example CSV, JSON or XML) or fetched from a web service (for example RSS or REST). The row is sent to the process phase where it is transformed as needed or marked to be skipped. After processing, the transformed row is passed to the destination phase where it is loaded (saved) into the target Drupal site.

Migrations are create using migration plugins in YML format. Several [examples](https://www.drupal.org/docs/drupal-apis/migrate-api/migrate-destination-plugins-examples) can be found on the Migrate API documentation page.

Additional features provided by the Migrate API

- **[Stubs](https://www.drupal.org/docs/drupal-apis/migrate-api/migrate-api-overview#s-stubs):**: Process of handling references to parent references where the child entity is created before the parent. Taxonomies are a good example of this issue. If a child term gets imported before the parent then a 'stub' is created to allow a reference to the parent entity. Once the parent row is processed the stub is then updated with the correct parent information.
- **[Map Tables](https://www.drupal.org/docs/drupal-apis/migrate-api/migrate-api-overview#s-map-tables):** Map tables are used to track information about an imported item. This allows for continuous migrations where any updates to previously imported items can be processed and tracked as well as new items imported.
- **[Highwater marks](https://www.drupal.org/docs/drupal-apis/migrate-api/migrate-api-overview#s-highwater-marks):** Tracks the "highest" imported item from previous imports. An example of a highwater mark would be a node id where follow up imports would only import nids higher than the previous import. This could also be tracked to a created/updated timestamp.
- **[Rollbacks](https://www.drupal.org/docs/drupal-apis/migrate-api/migrate-api-overview#s-rollbacks):** Rollbacks allow reverting previous migrations. This is useful for situations where the data did not migrate properly. This is the major benefit to use the migrate api over the feeds approach referenced above. With feeds you have one chance to handle your migrations and need to do a full db restore to go back to a previous state.

##### Writing a process plugin
If the default provided process plugins do not fit the needs a custom one can be written. Consider checking the [migrate plus](https://www.drupal.org/docs/8/api/migrate-api/migrate-process-plugins/list-of-process-plugins-provided-by-migrate-plus) before starting any custom work as many additional process plugins are provided by this module.

##### Custom row processing
In the event custom row logic is needed the following function can be implemented [hook_migrate_prepare_row](https://api.drupal.org/api/drupal/core%21modules%21migrate%21migrate.api.php/function/hook_migrate_prepare_row/9.2.x) which allows you to add custom transformation logic prior to processing.

##### Migrate events
Several events are avaible which can be utilized during the migration process.

| Event | Description |
| :--- | :--- |
| MAP_DELETE | fired when removing an entry from a migration's map |
| MAP_SAVE | fired when saving to a migration's map |
| POST_IMPORT | fired when finishing a migration import operation |
| POST_ROLLBACK | fired when finishing a migration rollback operation |
| POST_ROW_DELETE | fired just after a single item has been deleted |
| POST_ROW_SAVE | fired just after a single item has been imported |
| PRE_IMPORT | fired when beginning a migration import operation |
| PRE_ROLLBACK | fired when beginning a migration rollback operation |
| PRE_ROW_DELETE | fired when about to delete a single item |
| PRE_ROW_SAVE | fired when about to import a single item |

Example usage: https://kevinquillen.com/using-migratepostrowsave-event-append-data-migrated-item