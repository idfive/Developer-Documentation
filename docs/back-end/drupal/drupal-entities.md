# Entities

## Nodes

### Preprocessing Nodes

#### Baseline

We find it helpful to set up the following as a baseline on most projects:

- View mode: Full, teaser, etc. Lets us target Full views only, for some more complex processing, thus stopping it from running for teasers/etc.
- Bundle: We can then target nodes of particular bundles.
- NID: We use it quite a lot to pass parameters to views/etc, so simply handy to have.

```php
 /**
   * Implements hook_preprocess_HOOK() for page templates.
   *
   * @param $variables
   */
function MY_THEME_preprocess_node(&$variables) {
  $node = $variables['elements']['#node'];
  $view_mode = $variables['view_mode'];
  $bundle = $node->bundle();
  $nid = $node->id();
}
```

#### View Modes

View modes are handy, because we often do not want to run certain functions "every time a node is loaded", rather, "every time a node is loaded for a particular view mode". For instance, in the below code, we will load:

- A variable `{{ link }}` for teasers, which is the path to the full view of the content.
- A hero image URL, variable `{{ hero_image_url }}` for the full view of the content.

You don't need `{{ link }}` in the full view of the content, as you are already on the page. Conversely, no point loading the `{{ hero_image_url }}` in a teaser, so lets save that processing power for other things.

```php
use Drupal\media\Entity\Media;
use Drupal\image\Entity\ImageStyle;

if ($view_mode !== 'full') {
  $variables['link'] = \Drupal::service('path.alias_manager')->getAliasByPath('/node/' . $nid);
} else {
  $variables['hero_image_url'] = '/path/to/sitewide/default/hero/image/here.png';
  if ($node->hasField('MY_HERO_IMAGE_MEDIA_FIELD')) {
    $image = $node->get('MY_HERO_IMAGE_MEDIA_FIELD')->getValue();
    if ($image && !empty($image)) {
      $entity = Media::load($image[0]['target_id']);
      if (isset($entity) && $entity->field_media_image->entity !== NULL && $entity->field_media_image->entity->getFileUri() !== NULL) {
        $variables['hero_image_url'] = ImageStyle::load('MY_HERO_IMAGE_STYLE')->buildUrl($entity->field_media_image->entity->getFileUri());
      }
    }
  }
}
```

#### Bundles

Bundles let us target nodes by type. This allows us to do some things for NODE_TYPE_ONE, and other things for NODE_TYPE_TWO.

```php
if ($bundle == 'NODE_TYPE_ONE') {
  // Do something for NODE_TYPE_ONE.
} elseif ($bundle == 'NODE_TYPE_TWO') {
  // Do something for NODE_TYPE_TWO.
}
```

You could also use `switch` if you prefer:

```php
switch ($bundle) {
  case 'NODE_TYPE_ONE':
    // Do something for NODE_TYPE_ONE.
  break;
  case 'NODE_TYPE_TWO':
    // Do something for NODE_TYPE_TWO.
  break;
}
```

#### Putting it all together

Combine Bundle and View Mode to fine tune any content you need to alter:

```php
if ($bundle == 'NODE_TYPE_ONE') {
  if ($view_mode !== 'full') {
    // Do something for NODE_TYPE_ONE teaser.
  } else {
    // Do something for NODE_TYPE_ONE full view.
  }
} elseif ($bundle == 'NODE_TYPE_TWO') {
  if ($view_mode !== 'full') {
    // Do something for NODE_TYPE_TWO teaser.
  } else {
    // Do something for NODE_TYPE_TWO full view.
  }
}
```

### Working with Nodes

#### Load node by NID

```php
$nid = 123;
$node_storage = \Drupal::entityTypeManager()->getStorage('node');
$node = $node_storage->load($nid);
```

#### Get NID from loaded $node

```php
$node->id();
```

#### Get Bundle from loaded $node

```php
$node->bundle();
```

#### Get field values from loaded $node

```php
$node->title->value;
$node->created->value;
$node->body->value;
$node->body->summary;
$node->MY_TEXT_FIELD->value;
$node->MY_IMAGE_FIELD->target_id;
```

#### Get media image URL from media reference field

Always load image/media URLS as an appropriate image style.

```php
use Drupal\media\Entity\Media;
use Drupal\image\Entity\ImageStyle;

if ($node->hasField('MY_HERO_IMAGE_MEDIA_FIELD')) {
  $image = $node->get('MY_HERO_IMAGE_MEDIA_FIELD')->getValue();
  if ($image && !empty($image)) {
    $entity = Media::load($image[0]['target_id']);
    if (isset($entity) && $entity->field_media_image->entity !== NULL && $entity->field_media_image->entity->getFileUri() !== NULL) {
      $variables['hero_image_url'] = ImageStyle::load('MY_HERO_IMAGE_STYLE')->buildUrl($entity->field_media_image->entity->getFileUri());
    }
  }
}
```

#### Set field values from a loaded $node

```php
$node->set('title', "MY NEW TITLE");
$node->set('body', array(
'summary' => "MY NEW SUMMARY",
'value' => "MY NEW FULL BODY",
'format' => 'basic_html',
));
$node->save();
```

#### Delete Nodes

```php
// Single node by NID.
$nid = 42;
$node = $node_storage->load($nid);
$node->delete();
// Multiple nodes by NID.
$nids = [21,12,45,67];
$nodes = $node_storage->loadMultiple($nids);
$node_storage->delete($nodes);
// Multiple nodes by NID, loading one at a time to perform other functions.
$nids = [21,12,45,67];
foreach($nids as $nid)
{
  $node = $node_storage->load($nid);
  // Do something else here if needed.
  $node->delete();
}
```

## Paragraphs

### Programmatically create a paragraph

We sometimes find ourselves in the situation of needing to create referenced entities (usually paragraphs) based on if a field on a node/etc is filled out. Here is a basic example.

```php
use Drupal\paragraphs\Entity\Paragraph;
use Drupal\Core\Entity\EntityInterface;

/**
 * Implements hook_entity_presave().
 */
function MY_MODULE_entity_presave(EntityInterface $entity) {
  switch ($entity->bundle()) {
    case 'MY_NODE_BUNDLE':
      if ($entity->field_artist_iaa_recipient->getValue()) {
        $entity = _my_module_create_paragraph($entity);
      }
      break;
  }
}
```

Then create the paragraph and attach to the entity, and deliver entity back to the update/similar hook.

```php
function _msac_profiles_create_awards_paragraph($entity) {
  // Process the $entity for any needed values/logic/etc, from a trigger field on the entity/node.
  $trigger = $entity->FIELD_MY_TRIGGER_FIELD->value;

  // Create paragraph
  $paragraph = Paragraph::create(['type' => 'MY_PARAGRAPH_BUNDLE']);
  $paragraph->set('FIELD_MY_FIELD', $trigger);
  $paragraph->isNew();
  $paragraph->save();
  // Grab any existing paragraphs from the node, and add this one
  $current = $entity->get('FIELD_REFERENCE_FIELD_ON_NODE')->getValue();
  $current[] = array(
      'target_id' => $paragraph->id(),
      'target_revision_id' => $paragraph->getRevisionId(),
    );
  $entity->set('FIELD_REFERENCE_FIELD_ON_NODE', $current);
  // If needed, Unset trigger field so does not run again.
  $entity->set('FIELD_MY_TRIGGER_FIELD', []);
  return $entity;
}
```
