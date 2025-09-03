---
description: Content architecture patterns, views, queries, and data handling in Drupal
---

# Drupal Content Architecture

## Views/Lists

Preferably, all "lists of content" should use a view mode to display them. Ie, "show me all content of type X, displayed as view mode 'search result'"

### If the view content is local and requires filters

- Consider using core views module, with an exposed form.
- If more complex, consider using core views along with [Search API module](https://www.drupal.org/project/search_api).
- For smaller, custom sortable views, consider a vue.js app, that interacts with the jsonapi endpoint or similar.

If core views is used as a standalone, or with search API, be sure to create the display type as "block" or similar (not page), so that these views can be inserted into standard KS pages using the ip_views_embed widget, thus allowing for custom text, headers, content, etc as well as the listing.

### If the view content is local does not require filters

- Consider using core views module.
- Consider a custom EntityQuery (with caching).
- Consider using the hook_preprocess for the entity in question to add these programmatically rather than using something like blocks.

#### Views example

This shows a simple example of adding a created view to a page, after conditionally checking if it has results. Since views are already cached, there is no reason to add additional caching here. In this example,
we pass along the NID of the node as an additional var to the view, which is set up as a conditional filter in the view.

This then makes the variable MY_VARIABLE available in the node--bundle-name.html.twig template, or similar, which is the rendered view.

```php
// From within hook_preprocess of choice
$variables['MY_VARIABLE'] = _MY_MODULE_test_view_for_results($variables, 'VIEW_MACHINE_NAME', 'VIEW_DISPLAY_MACHINE_NAME', $nid);

/**
 * Test views to see if they have results before displaying.
 * Function takes the variables array, the name of the view, the display machine name (ie. 'page_1' or 'block_1') and
 * any arguments to pass to the view (contextual filters/etc).
 */
function _MY_MODULE_test_view_for_results($variables, $view, $tab, $var1 = null, $var2 = null) {
  $test = views_get_view_result($view, $tab, $var1, $var2);
  if(count($test) > 0) {
    return views_embed_view($view, $tab, $var1, $var2);
  }
  return null;
}

// Then in twig template
{% if MY_VARIABLE %}
  {{ MY_VARIABLE }}
{% endif %}
```

#### Custom cached node query

```php
// From within hook_preprocess of choice
$variables['MY_VARIABLES'] = _MY_MODULE_get_things();

// Function to get nodes of type CONTENT_TYPE and sort by title
function _MY_MODULE_get_things() {
  if ($cache = \Drupal::cache()->get('MY_MODULE:get_things')) {
    return $cache->data;
  }
  else {
    $storage = Drupal::getContainer()->get('entity_type.manager')->getStorage('node');
    $nids = $storage->getQuery();
    $nids = $nids->condition('type', 'CONTENT_TYPE')
      ->condition('status', 1)
      ->sort('title')
      ->execute();
    $result = $storage->loadMultiple($nids);
    if ($result) {
      \Drupal::cache()->set('MY_MODULE:get_things', $result, time() + 7200);
      return $result;
    }
    else {
      return NULL;
    }
  }
}
```

### If the content is NOT local

- A custom call to an API/etc will be needed.
- Consider leveraging relevant composer based PHP libraries if possible
- Consider caching all results.

#### Custom API Call example

This example passes a unique ID for the feed, but you would also likely pass parameters from custom fields/etc, to be able to reuse calls to the endpoint from multiple places. To note, external API calls may better be accomplished by writing a service, but the example below also works.

```php
// From within hook_preprocess of choice
$variables['MY_VARIABLES'] = _MY_MODULE_get_stuff('UNIQUE_ID_FOR_THIS_CALL');

// Function to test views to see if they have results before displaying
function _MY_MODULE_get_stuff($id) {
  if ($cache = \Drupal::cache()->get('MY_MODULE:get_stuff--' . $id)) {
    return $cache->data;
  }
  else {
    $url = "https://stuffendpoint/that/i/want";
    $result = file_get_contents($url);
    $result = json_decode($result, TRUE);
    $result = $result['data'];
    if ($result) {
      \Drupal::cache()->set('MY_MODULE:get_stuff--' . $id, $result, time() + 7200);
      return $result;
    }
    else {
      return NULL;
    }
  }
}

// Then in twig template
{% if MY_VARIABLES %}
  {% for stuff in MY_VARIABLES %}
    <h3>{{ stuff.title }}</h3>
    {{ stuff.text }}
  {% endfor %}
{% endif %}
```

## Pathauto

When setting up aliases, it is sometimes required to check the "generate alias" box on existing content. The easiest way to do so is via a DB update.

```php
use Drupal\pathauto\PathautoState;

/**
 * Update pathauto aliases for all Blog Posts.
 */
function MY_MODULE_update_8001() {

    $entity_type = 'node';
    $entity_storage = \Drupal::entityTypeManager()->getStorage($entity_type);
    $nodes = $entity_storage->loadMultiple();

    foreach($nodes as $node) {
        if($node->bundle() == 'MY_BUNDLE') {
            $node->path->pathauto = PathautoState::CREATE;
            $node->save();
        }
    }

}
```

## Related Documentation

- [Drupal Site Building](./drupal-sitebuilding.md) - Core site building practices
- [Drupal Custom Development](./drupal-custom-development.md) - Development patterns and best practices
- [Drupal Media & Images](./drupal-media-images.md) - Media handling and image optimization
- [Drupal Entity Queries](./drupal-entity-queries.md) - Advanced entity query patterns
