# Entity queries in drupal

Sometimes, rather than use view modes, it is desireable to load local content into a variable, for further data manipulation, or to simply get better markup, for a quick for loop in twig. This is easily accomplished via [entity queries](https://api.drupal.org/api/drupal/core%21lib%21Drupal.php/function/Drupal%3A%3AentityQuery/8.6.x).

## Simple example

Get all nodes of a type, that have a reference field to TID "52":

```php
$query = \Drupal::entityQuery('node')
  ->condition('type', 'NODE_MACHINE_NAME'),
  ->condition('FIELD_TAXONOMY_REFERENCE', 52)
$nids = $query->execute();
$results = $node_storage->loadMultiple($nids);
foreach ($results as $node) {
  // Do whatever you want here, with each loaded $node.
}
```

## Complex example

Example function, with caching, to be called via custom service. See [drupal Services](/back-end/drupal/drupal-services) for more details on services:

```php
/**
   * Public method to get local nodes of NODE_MACHINE_NAME.
   */
  public function getStuff($id = NULL, $limit = 3) {
    if ($id == NULL) {
      $cid = 'MY_MODULE:local_NODE_MACHINE_NAME_all-' . $limit;
    }
    else {
      $cid = 'MY_MODULE:local_NODE_MACHINE_NAME_' . $id . '-' . $limit;
    }
    if ($cache = \Drupal::cache()->get($cid)) {
      return $cache->data;
    }
    else {
      $storage = \Drupal::getContainer()->get('entity_type.manager')->getStorage('node');
      $query = $storage->getQuery();
      $query = $query->condition('type', 'NODE_MACHINE_NAME')
        ->condition('status', 1)
        ->sort('created', 'DESC');
      $nids = $query->execute();
      $results = $storage->loadMultiple($nids);
      if ($results) {
        $parsed_results = [];
        foreach ($results as $key => $result) {
          $parsed_results[$key]['title'] = $result->title->value;
          $parsed_results[$key]['url'] = $result->toUrl()->toString();
          $parsed_results[$key]['publication_date'] = $result->getCreatedTime();
        }
        \Drupal::cache()->set($cid, $parsed_results, time() + 7200);
        return $parsed_results;
      }
      else {
        return NULL;
      }
    }
  }
```

You would then call via the following in a hook or controller of your choice:

```php
$stuffService = \Drupal::service('MY_CUSTOM_SERVICE');
$stuff = $stuffService->getStuff('home', 3);
$variables['my_stuff'] = $stuff;
```

and then in the twig template:

```twig
{% for stuff in my_stuff %}
  {{ stuff.url }}
  {{ stuff.publication_date|date('Y-m-d') }}
  {{ story.title }}
{% endfor %}
```

## Helpful entity query conditions/sorts/etc

### Entities

#### Node

```php
$nids = \Drupal::entityQuery('node')
  ->condition('type', 'NODE_MACHINE_NAME')
  ->execute();
```

#### Taxonomy Term

```php
$tids = \Drupal::entityQuery('taxonomy_term')
  ->condition('vid','VOCABULARY_MACHINE_NAME')
  ->execute();
```

### Sort

```php
->sort('created', 'DESC') // The newest created entities first
->sort('title', 'DESC') // DESC, by node title
```

### Conditions

```php
->condition('status', 1) // Entity is published
->condition('type', 'NODE_MACHINE_NAME') // Entity is of type
->condition('FIELD_TAXONOMY_REFERENCE', $tid); // A taxonomy reference field is equal to $tid (NUM)
->condition('FIELD_TAXONOMY_REFERENCE', [$tids], 'IN'); // A taxonomy reference field is equal to one of several $tids (NUM, comma separated)
->condition('nid', $nid, 'NOT IN'); // Exclude a node, by ID
```

#### Conditions groups

Conditions groups can be further added in order to adjust the conditions queries.

- AND: andConditionGroup()
- OR: orConditionGroup()
- See more in [drupal.org docs](https://www.drupal.org/docs/8/api/database-api/dynamic-queries/conditions#s-condition-groups).

```php
$and = $query->andConditionGroup();
$and->condition('FIELD_TAXONOMY_ONE_REFERENCE', [TID], 'IN');
$and->condition('FIELD_TAXONOMY_TWO_REFERENCE', [TID], 'IN');
$query->condition($and);
```
