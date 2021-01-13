# Hybrid Content Types

Often times, we get asked to create Hybrid content types in drupal. Essentially, a hybrid content type is a content type that:

- Has a single "source of truth", that is API based.
- Mirrors "some of this content" locally in drupal.
- Loads more details directly from the API upon full view.
- Has extra fields locally in order to categorize/etc.

This gives us the benefit of having content locally, in order to add local fields, create views. etc, without trying to map complex fields from the API and duplicate large amounts of data. See a presentation we did on this for [Drupal Flyover Camp](https://www.youtube.com/watch?v=JGKl8VuWA28&list).

## A simple, real world example

### The overview

A client has an API endpoint for faculty. Each faculty member has a large bio, as well as a publications list that could be 60-100 individual publications, as well as other complex fields. The client also needs to be able to use entity relations to these faculty members from other pieces of content within drupal.

Since we only need things like photo, name, shortened bio, and some local categorizations in the "all faculty" view, we would rather not spend time and effort adding things like "publications" into the drupal DB, but rather, simply grab them from the API directly when needed, on the detail page. This lets us not duplicate complex content locally, and keeps the "source of truth" as the direct source.

### The implementation

- Create a "Faculty Member" content type within drupal.
- Via feeds, pull ID, Image, Name, First Name, Last Name, Department, and shortened version of Bio.
- Set feeds to override these fields when importer runs, so that API is always the source of truth for these fields, regardless if they were ever wrongfully updated locally.
- Lock down editing of these fields, if needed.
- Add local fields to Faculty, for categorization, entity reference, etc. Let admins edit these fields freely.
- Use views or similar, to create filterable view of "all faculty", using all fields available locally.
- Load publications, full bio, etc directly from API when full faculty profile is viewed.

## Basic overview

- Create shell content type.
- Add fields for Minimum Viable Tracked Content (MVTC) from API, and needed local fields.
- Ingest MVTC into drupal, usually via feeds.
- Use MVTC in teasers/etc throughout site.
- Create Service to pull "Full Content" from respective API, on full node view.
- Configure hook_preprocess, and templates for the "Full Content" view, to also display loaded content from API.

## Create shell content type

This is essentially the same as any content type. Some things to note:

- Some fields (MVTC fields) will be updated when feeds run, some will not.
- idfive prefers to prefix, and group MVTC fields into a fieldset, or details, or similar. This way we can 1. make it clear that these are off limits to editing, or at least that the potential exists for changes to be overwritten, and 2. Physically hide/control access to that fieldset if required.

## Ingest Minimum Viable Tracked Content (MVTC) into drupal

It is important to note here, that MVTC varies per project, and even different cont types within a project. Usually, the desired number of fields is "as little as possible". A good start is to look and see what fields are needed in teasers throughout your site, and start there. Essentially, we do not want to go to the API every time a piece of content shows up in a view or search result, so we want that content to be local.

Additionally, besides visible fields, we need to store some sort of unique ID for each piece of content, that we can send to the API and return "Full Data" for that content.

## Ingest MVTC into drupal

There are many ways to ingest content into D8/9, one of the simplest is to use the [feeds module](https://www.drupal.org/project/feeds). The loose idea, is to set uyp feeds to ingests MVTC into drupal on a regular basis, so that MVTC is kept up to date with the API.

Exact implementation is based on the endpoint for the API being ingested, but options exist for xml/json/etc. Custom fetchers can also be created if things like keys/etc need to be passed to the API.

In an ideal world, all MVTC would be returned in a single endpoint, if not, a loop will/would have to be done in order to get MVTC. This could be accomplished via a custom feeds parser, and a custom service.

- Create custom Service to load content by ID.
- Create custom feeds parser.
- In parser, load service, passing ID, and get desired data.
- Adjust feed to use available data.

While this is obviously less ideal, since it is usually on cron, it is not the end of the world performance wise either.

## Use MVTC in teasers/search/etc throughout the site

An important thing to remember here, is that for hybrid content types, we have essentially two sources:

- Local content (MVTC)
- Full content, loaded via API for full views only.

What this means is that if you are displaying a list of something like teasers in a view, all fields/etc need to be against local (MVTC) fields. The exception to that would be potentially for search, if using search API, you could have it index fully rendered content which would load API data, at the expense of performance, potentially.

## Create Service to pull "Full Content" from respective API, on full node view

### Simple service example

See [Drupal Services](/back-end/drupal/drupal-services.md) section of this site for more details on setting up a custom service.

```php
<?php

namespace Drupal\MY_MODULE\Services;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

/**
 * Class MyCustomService.
 */
class MyCustomService {

  /**
   * @var GuzzleHttp\Client
   */
  protected $client;

  /**
   * Constructs a new MyCustomService object.
   */
  public function __construct(Client $client) {
    $this->client = $client;
  }

  /**
   * Public method to return a single point of data from the API.
   */
  public function getDetail($id) {
    $url = 'http://MY_API_URL/' . $id;
    $json = $this->getData($url);
    return $json;
  }

  /**
   * Public method to get content from API.
   */
  public function getData($url) {
    try {
      $request = $this->client->get($url);
      $result = json_decode($request->getBody()->__toString(), TRUE);
    }
    catch (RequestException $e) {
      $message = 'Error connecting to APL API via URL:' . $url;
      \Drupal::logger('My Custom Service')->error($message);
      return;
    }
    return $result;
  }

}
```

## Configure hook_preprocess, and templates for the "Full Content" view, to also display loaded content from API

Add hook in custom module or theme. Node example shown, but could also be a different entity type, if desired.

### Simple hook to get content on node view

```php
function MY_MODULE_preprocess_node(&$variables) {
  $node = $variables['elements']['#node'];
  $view_mode = $variables['view_mode'];
  $bundle = $node->bundle();
  $nid = $node->id();
  // Target bundle only.
  if ($bundle == 'DESIRED_HYBRID_BUNDLE') {
    // Full view of node only.
    if ($view_mode == 'full') {
      $id = $node->FIELD_YOUR_UNIQUE_ID->value;
      $full_data = \Drupal::service('MY_MODULE.GENERAL')->getDetail($id);
      // Parse full return here if needed/desired.
      $variables['MY_DATA'] = $full_data;
    }
  }
}
```

### Use your variable in twig

One the hook runs, `MY_DATA` is available as a variable in the node twig template, upon full view.

```twig
{# Use some fields directly #}
{{ MY_DATA.FIELD_RETURNED_IN_JSON }}

{# Use complex objects in a loop #}
{% for data in MY_DATA.OBJ_RETURNED_IN_JSON %}
  {% if loop.index0 > 0 %}
    {{ data.OBJ_RETURNED_IN_JSON_FIELD }}
  {% endif %}
{% endfor %}
```
