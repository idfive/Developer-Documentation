# Simplesamlphp (per page) password protection in drupal

Requires saml auth in order to view a page. This assumes you are already using simplesamlphp for authentication, via the drupal module. Similar approaches could be used for different SSO solutions. The main idea is to add a boolean field to a single content type, to require login in order to view the content or not.

## To enact

- Create the boolean field.
- Create the service.
- Preproccess the entity.

### Create the service

#### MY_MODULE.services.yml

```yml
services:
  MY_SERVICE.auth:
    class: Drupal\MY_MODULE\Services\MyService
```

#### src/Services/MyService.php

```php
<?php

namespace Drupal\MY_MODULE\Services;

// May or may not need this, depending on setup.
require_once('../simplesamlphp/lib/_autoload.php');

use SimpleSAML\Auth\Simple;

/**
 * Class MyService.
 */
class MyService {


  /**
   * Constructs a new MyService object.
   */
  public function __construct() {

  }

  /**
   * Public method to test if users are authenticated via SAML, and return username.
   */
  public function limitToSamlUsers() {
      $as = new Simple('default-sp');
      $as->requireAuth();
      $attributes = $as->getAttributes();
  }

}

```

### Preproccess the entity

- Remember to add a check for things like admin/logged in users as well, so they are not forced to SAML login/etc when editing.
- Remember to limit this to the full view, so it does not fire when a teaser is viewed.

```php
/**
 * Implements hook_preprocess_node().
 */
function MY_MODULE_preprocess_node(&$variables) {
  $node = $variables['elements']['#node'];
  $view_mode = $variables['view_mode'];
  $bundle = $node->bundle();
  if ($view_mode == 'full' && $bundle == 'MY_BUNDLE') {
    // Check whether to require SAML auth to view the page or not.
    if (\Drupal::currentUser()->isAnonymous()) {
      if ($node->hasField('MY_BOOLEAN_FIELD')) {
        $value = $node->get('MY_BOOLEAN_FIELD')->getValue();
        if (isset($value[0]) && $value[0]['value'] == '1') {
          \Drupal::service('MY_SERVICE.auth')->limitToSamlUsers();
        }
      }
    }
  }
}
```
