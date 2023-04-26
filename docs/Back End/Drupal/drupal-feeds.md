# Feeds module

Feeds is a good way to import content into sites that are either already built, or where migrated content types require quite a bit of changes, or the site being "migrated from" is not a previous version of drupal, where something like the Migrate API may make more sense.

## Helpful modules

- [Feeds](https://www.drupal.org/project/feeds)
- [Feeds Extensible Parser](https://www.drupal.org/project/feeds_ex) | Allows parsing of json/others
- [Feeds Tamper](https://www.drupal.org/project/feeds_tamper) | Allows things like an "explode" on comma separated strings/etc.

## General overview

At its simplest, creating content via feeds looks like:

- Create a Feed Type.
- Create an Importer that uses that type.
- Save and run that importer.

However, things get more complex once things like relationships, and files get involved.

## Importing Nodes

- Whenever possible, keep the same ID's.
- **Any separate entity that the node references will need to be imported first**, then looked for via either name or id when you run the actual node importer.
- Shortcodes, and other embeds/etc within things like WYSIWYG's do not always translate.

## Importing Media/files

- Whenever possible, keep the same ID's.
- Whenever possible, import D7 files as media entities. This will help keep things tidy going forward.
- You may need to choose update/replace in feed settings in order to override any ID's that exist/etc.

### Media importer mappings

#### Image

The most common media type is image. All other media types (file, video, audio, etc) are similar, but may require different field mapping than below.

##### Export

Example export of image files from D7, to be converted to media (type: image) in new site. This was created with a simple views data export in D7, of:

- Name
- Alt Text
- File ID
- Path (make this an absolute URL!!)

```csv
"title","alt","id","path"
"img_1.png","alt text here","20","https://MY_D7_SITE.com/sites/programs.howard.edu/files/img_1.png"
"img_2.png","alt text here","21","https://MY_D7_SITE.com/sites/programs.howard.edu/files/img_2.png"
```

Regardless of the source, something similar to the above CSV is what is needed to create media entities in drupal. You can also do JSON or another format if desired.

##### Feed config

Create a new "Media Image" feed Type of Processor: Media, Media Type: Image, with the following field mappings:

- ID (mid): required | whenever possible, use an existing file ID, or media ID from donor site, this keeps references easier. See "id" above in example CSV.
- Name(name): required | use the filename if needed. See "title" above in example CSV.
- Image (field_media_image):
  - File ID: Use the full http location of where this image lives, so that it can be retrieved by CURL. See "path" above in example CSV.
  - Alternative text: See "alt" above in example CSV.
  - Title: See "title" above in example CSV.

When the importer runs, it will then:

- Create a media entity with the id, specified. (20, and 21, in the above example)
- Name the media entity, the same name as the old file (img_1.png, img_2.png)
- Create a file, of type Image, that:
  - Downloads the Image specified via CURL, into your files directory
  - Sets name and alt text

You now have media in the system. You can now pass either the id, or name, to the greater entity importer you wish to use these on.

## Importing Paragraphs

### Importing d7 field collections as d8 paragraphs

- Import all entities that are using paragraphs first. It is important that the entity ID's be the same as on the D7 site, so we can reference them.
- Create a temporary custom module and add an insert hook, see below, and enable.
- Create a d7 views data export of the field collections, with the following:
  - Any fields needed.
  - Field Collection ID. You may wish/need to prepend this with a larger number, to ensure it doesnt conflict with anything else. For example, in the view, simply rewrite the FCID field to something like `555[item_id]`.
  - A relationship to the parent entity of the field collection, and a field that then displays the parent entity ID.
- Create a feed type and select "Paragraph" as processor.
- Add a text field to the feed type, call it for example "Entity type".
- Add another text field to the feed type, call it for example "Entity field name".
- On the mapping page, map "Feed: Entity type" to "Parent type" and "Feed: Entity field name" to "Parent field name".
- Make sure you map a source to "Parent ID" as well, whatever field you have the parent entity ID in your CSV.
- Setup all other mappings that you need.
- Create a feed and in the "Entity type" textfield type the machine name of the entity type you imported before. For example: "node". In "Entity field name" type the machine name of the paragraph reference field of the entity type you imported before. For example: "FIELD_MY_CUSTOM_FIELD".
- Import, and troubleshoot.

In order for the above to work, a temporary hook needs to be added to a custom module:

```php
<?php

/**
 * @file
 * Custom temporary functionality for allowing separately imported paragraphs to be attached to nodes.
 */

 use Drupal\Core\Entity\EntityInterface;

/**
 * Implements hook_ENTITY_TYPE_insert() for 'paragraph'.
 */
function MY_MODULE_paragraph_insert(EntityInterface $paragraph) {
  $parent_type = $paragraph->parent_type->value;
  $parent_field_name = $paragraph->parent_field_name->value;
  $parent_id = $paragraph->parent_id->value;
  // This is node here, but could be other entity if required.
  if ($parent_type == 'node') {
    $ent = \Drupal::entityTypeManager()->getStorage($parent_type)->load($parent_id);
    if ($ent) {
      // Check if ent already has a reference to this paragraph.
      foreach ($ent->{$parent_field_name} as $item) {
        if ($item->target_id == $paragraph->id()) {
          // Paragraph found. Abort.
          return;
        }
      }
      $ent->{$parent_field_name}[] = $paragraph;
      $ent->save();
    }
  }
}
```

This should be removed after you run all needed importers. Be aware that you may wind up with orphaned paragraphs if you play around and adjust ID's/etc, which you may need to account for.

## Parsing JSON

Feeds Extensible Parser gives us the opportunity to parse json feeds. This is handy when creating content from an existing API or similar. We find the JsonPath parser usually is the easiest to work with.

### Context

Using JsonPath, we need to provide context for the feeds importer. This can be a bit confusing, but it is a defined standard, so several online sources can help you better understand it, such as [jsonpath.com](https://jsonpath.com/).

#### For the feed itself

We need to set a base context for the feed, under the mapping tab. This needs to start with `$`, then drill down to the actual array of data. Context would be `$.data.*` for the following format. The `*` symbolizing all items in the `data` array:

```json
"data": [
  {
    "foo": "bar",
  },
  {
    "bar": "foo",
  }
]
```

Conversely, if there were no data wrapper, or similar, it could be simply `$.*` as the base context.

#### For individual, multi-value fields

Individual fields can also be run on a loop by providing context. For a link field that can have multiple values, for instance:

```json
"resources": [
    {
        "url": "URL_HERE",
        "title": "TITLE_HERE"
    },
    {
        "url": "URL_HERE",
        "title": "TITLE_HERE"
    }
]
```

Would be entered into the field mappings for a multi-value link field as `resources.*.url`, and `resources.*.title` respectively. This would then create a new link for each item, upon import.
