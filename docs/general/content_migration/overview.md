# Content Migration Overview

## Some considerations

- How many "different content types" exist on the site to be migrated?
- How many pieces of content, for each content type exist, and are to be migrated?
- Is the content in a CMS that allows for robust exports?
- Will all of them go over "one for one" to the new system?
- What types of assets (files/images/etc) will be moved, and how is the current system structured?
- What is the integrity of the content?
- What is the integrity of the taxonomy/tagging scheme?
- If coming from a current D7 site, are there existing entity references to consider?
- How is the data structured? Distinct fields, or all in the WYSIWYG?
- Are there taxonomies that need to be maintained?
- Are their URL's that need to be maintained?

## Content exporting

### Wordpress content exporting

- If the site you will be importing on is another Wordpress site, simply look at the built in tools/export feature.

### Drupal 7 content exporting

- [Views data export](https://www.drupal.org/project/views_data_export) can be used to set up content exports.
- It does require a bit of setup per content type, and possibly custom views adjustments, that would need to be performed on a clone of the site we would be exporting content from. Usually this is best accomplished via a full local install of the current d7 site by an idfive developer, which could take a bit of time.

### Static content exporting

- See [a video we did](https://www.dropbox.com/s/rfg1mjo5aijatte/scrapr-demo.mp4?dl=0) on testing of [importer.io](http://importer.io).
- This has lots of possibilities  to scrape static content, but does require subscription, and does require configuration and familiarization with the tool.

## Content importing

### Wordpress content importing

- If the content you will be importing is from another wordpress site (via tools/export), simply look at the built in tools/import feature.

### Drupal 8 content importing

For importing into drupal 8 sites, two major options exist, [Feeds](https://www.drupal.org/project/feeds) and [Migrate](https://www.drupal.org/project/migrate).

#### Feeds

Generally speaking, feeds works pretty well for importing content into drupal 8. Most "regular content" that can be "one for one matched", id quite fast to set up importers for. Complex, and custom fields can however, require custom solutions that sometimes need to be robust.

- You create a custom importer for each "content type export" you have, and match it as best as possible to the new desired, and constructed content type.
- This gives us flexibility to create custom parsers/etc, if needed, per content import. This can be used to normalize fields, adjust taxonomies, etc.

##### Feeds considerations

- Media. Most exports likely contain images/files/etc. Normally, we wish to change these to media in d8, so we can utilize the core media module.
- Entity references. If the exported content contains entity references that need to be maintained, special ordering of the imports, and care to match NID's must be maintained.
- Taxonomies. Can be created on the fly, but sometimes its best to create first, depending on the integrity of the content being imported.
