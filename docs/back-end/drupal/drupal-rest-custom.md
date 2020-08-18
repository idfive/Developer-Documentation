# Custom REST endpoints

While stock REST endpoints in drupal can (and should) be used in most scenarios, sometimes we need to get tricky.

Some common scenarios that may warrant a custom endpoint:

- The need to match existing JSON, or for a custom json structure.
- The need for complex logic in the query.
- The need for a simplified return.
- The need to combine queries into a single return.

## Basic Overview

- Create custom Plugin.
- Enable endpoint and add permissions to access.

## Create custom Plugin

A simple endpoint that returns static content. Can be modified with queries/etc as needed.

### Simple example

MY_MODULE/src/Plugin/rest/resource/MyCustomEndpoint.php

```php
<?php

namespace Drupal\MY_MODULE\Plugin\rest\resource;

use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "my_custom_endpoint",
 *   label = @Translation("My Custom REST Endpoint"),
 *   uri_paths = {
 *     "canonical" = "/api/my_module/my_custom_endpoint"
 *   }
 * )
 */
class MyCustomEndpoint extends ResourceBase {

  /**
   * Responds to GET requests.
   *
   * @return \Drupal\rest\ResourceResponse
   *   The HTTP response object.
   *
   * @throws \Symfony\Component\HttpKernel\Exception\HttpException
   *   Throws exception expected.
   */
  public function get() {
    // Logic here to do whatever you wish, usually an entity query/etc.
    $static = 'Congrats on your new REST endpoint!';
    return new ResourceResponse($static);
  }

}
```

### Complex example

A more complex example that shows arguments, and returns a combined list of two separate queries.

In this example we will:

- Use a custom Service for the logic of getting content, as is a better practice.
- Pass an argument to the REST endpoint, in this case a TID
- Get a list of content of type CONTENT_TYPE_ONE tagged with that TID.
- Get a list of content of type CONTENT_TYPE_TWO tagged with that TID.
- Format the response to a few simple fields.
- Return a single response with both lists.

MY_MODULE/src/Plugin/rest/resource/MyCustomEndpoint.php

```php
<?php

namespace Drupal\MY_MODULE\Plugin\rest\resource;

use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Drupal\MY_MODULE\Services\MyGeneralService;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "my_custom_endpoint",
 *   label = @Translation("My Custom REST Endpoint"),
 *   uri_paths = {
 *     "canonical" = "/api/my_module/my_custom_endpoint/{custom_arg}"
 *   }
 * )
 */
class MyCustomEndpoint extends ResourceBase {

  /**
   * Responds to GET requests.
   *
   * @return \Drupal\rest\ResourceResponse
   *   The HTTP response object.
   *
   * @throws \Symfony\Component\HttpKernel\Exception\HttpException
   *   Throws exception expected.
   */
  public function get($custom_arg = NULL) {
    if ($custom_arg) {
      $response = [];
      $response['CONTENT_TYPE_ONE'] = MyGeneralService::getStuff($custom_arg, 'CONTENT_TYPE_ONE');
      $response['CONTENT_TYPE_TWO'] = MyGeneralService::getStuff($custom_arg, 'CONTENT_TYPE_TWO');
      return new ResourceResponse($response);
    }
  }

}
```

MY_MODULE/src/Services/MyGeneralService.php

```php
<?php

namespace Drupal\MY_MODULE\Services;

use Drupal\node\Entity\Node;
use Drupal\Component\Utility\Unicode;

/**
 * Class AplGeneralService.
 */
class AplGeneralService {

  /**
   * Public method to get missions and instruments for destination map and others.
   */
  public function getStuff($tid = NULL, $type = NULL) {
    if ($tid) {
      $nids = \Drupal::entityQuery('node')->condition('type', $type)
        ->condition('status', 1)
        ->condition('FIELD_MY_COMMON_TAXONOMY_FIELD', $tid)
        ->range(0, 6)
        ->accessCheck(FALSE)
        ->execute();
      if ($nids) {
        $nodes = Node::loadMultiple($nids);
        $articles = self::formatStuffForRest($nodes);
      }
    }
    return $articles;
  }

  /**
   * Format nodes for rest return.
   * @return Array articles
   */
  public function formatStuffForRest($results) {
    $articles = [];
    foreach ($results as $result) {
      $article = [];
      $nid = $result->id();
      $article['title'] = $result->getTitle();
      $description = $result->field_summary->value;
      $article['description'] = Unicode::truncate($description, 200, TRUE, TRUE, 5);
      $article['url'] = \Drupal::service('path.alias_manager')->getAliasByPath('/node/' . $nid);
      $articles[] = $article;
    }
    return $articles;
  }

}
```

## Enable endpoint and add permissions to access

While this can also be done manually by writing config files, we will focus on the easy way.

- Install and Enable [REST UI module](https://www.drupal.org/project/restui).
- Once installed, go to /admin/config/services/rest and enable your REST Resource.
- Select your desired settings. Normally this is GET, JSON, and cookie for simple read only endpoints.
- Go to permissions and enable anonymous and authenticated users to access your new endpoint.
