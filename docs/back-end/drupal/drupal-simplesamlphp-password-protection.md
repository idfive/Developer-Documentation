# Simplesamlphp (per page) password protection in drupal

Requires saml auth in order to view a page. This assumes you are already using simplesamlphp for authentication, via the drupal module. Similar approaches could be used for different SSO solutions. The main idea is to add a boolean field to a single content type, to require login in order to view the content or not.

## To enact

- Create the boolean field on bundle of choice.
- Create the service, which will run the authentication.
- Create the event subscriber, which will decide if a page should be authenticated.

### Create the service

#### MY_MODULE.services.yml

```yml
services:
  MY_SERVICE.auth:
    class: Drupal\MY_MODULE\Services\MyService
  MY_SERVICE.auth_event_subscriber:
    class: Drupal\howard_content_types\EventSubscriber\HowardAuthSubscriber
    tags:
      - {name: event_subscriber}
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

### Create the event subscriber

- This creates an event subscriber that runs when the symphony kernel is requested.
- Conceivably, this should effectively "preprocess" the page, and be able to check for our fields/etc before the cache is hit.

#### src/EventSubscriber/MyServiceSubscriber.php

```php
<?php

namespace Drupal\MY_MODULE\EventSubscriber;

use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Drupal\node\NodeInterface;

/**
 * Class MyServiceSubscriber.
 *
 * @package Drupal\MY_MODULE.
 */
class MyServiceSubscriber implements EventSubscriberInterface {

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    $events[KernelEvents::REQUEST][] = ['disableCacheForProtectedPage'];
    return $events;
  }

  /**
   * Subscriber Callback for the event.
   */
  public function disableCacheForProtectedPage() {

    // Check if current node type is one we want to exclude from the cache.
    $node = \Drupal::routeMatch()->getParameter('node');
    if ($node instanceof NodeInterface) {
      $node_type = $node->getType();
    }

    if (isset($node_type) && $node_type == 'MY_BUNDLE') {
      if ($node->hasField('MY_BOOLEAN_FIELD')) {
        $value = $node->get('MY_BOOLEAN_FIELD')->getValue();
        if (isset($value[0]) && $value[0]['value'] == '1') {
          // Flip the cache kill switch.
          \Drupal::service('page_cache_kill_switch')->trigger();
          if (\Drupal::currentUser()->isAnonymous()) {
            // Ignore auth requirement if you are a logged in drupal user.
            \Drupal::service('MY_SERVICE.auth')->limitToHowardUsers();
          }
        }
      }
    }
  }

}
```
