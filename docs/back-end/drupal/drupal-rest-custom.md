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
- Adjust CORS, if needed.

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
- Pass an argument to the REST endpoint, in this case a TID.
- Construct a global variable.
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
use Psr\Log\LoggerInterface;
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

  public $content_types;

  /**
   * Constructs a new content types object.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, array $serializer_formats, LoggerInterface $logger) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $serializer_formats, $logger);
    $this->content_types = [
     [
       'machine_name' => 'CONTENT_TYPE_ONE',
     ],
     [
       'machine_name' => 'CONTENT_TYPE_TWO',
     ],
    ];
  }

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
      foreach ($this->content_types as $key => $content_type) {
        $response[$content_type['machine_name']] = MyGeneralService::getStuff($custom_arg, $content_type['machine_name']);
      }
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
 * Class MyGeneralService.
 */
class MyGeneralService {

  /**
   * Public method to get stuff.
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
  public static function formatStuffForRest($results) {
    $articles = [];
    foreach ($results as $result) {
      $article = [];
      $nid = $result->id();
      $article['title'] = $result->getTitle();
      $description = $result->field_summary->value;
      $article['description'] = Unicode::truncate($description, 200, TRUE, TRUE, 5);
      $article['url'] = \Drupal::service('path_alias.manager')->getAliasByPath('/node/' . $nid);
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

## Adjust CORS

If this endpoint is to be accessed via JS, and you haven't already, you may need to adjust CORS parameters in your settings.yml

```yml
    cors.config:
    enabled: true
    allowedHeaders: ['x-csrf-token','authorization','content-type','accept','origin','x-requested-with']
    allowedMethods: ['*']
    allowedOrigins: ['*']
    exposedHeaders: true
    maxAge: 1000
    supportsCredentials: false
```

## Caching Notes

Sometimes, we may need to specifically turn off the cache, or set a context for something like the URL or parameters. At its simplest, it can look like this example.

```php
public function get() {
  $build = [
    '#cache' => [
      'max-age' => 0,
    ],
  ];
  // $filters defined here
  $response['data'] = MyGeneralService::getStuffWithArgs($filters, NULL);
  return (new ResourceResponse($response))->addCacheableDependency($build);
}
  ```

## WYSIWYG Notes

If using entity embeds/etc within WYSIWYG's, additional processing may be required. Below, we have made a WYSIWYG text format just for the REST view, and enabled things like "Display embedded entities". We then call it by machine name below.

```php
$description = $result->body->value;
$program['body'] = check_markup($description, "MY_CUSTOM_TEXT_FORMAT");
```

After that, you are probably going to need to convert Relative to Absolute Image URL's. An easy option, is to use the [Relative Path to Absolute URLs](https://www.drupal.org/project/rel_to_abs) module. Enable, then be sure it is both added to the REST text format above, with that filter running AFTER "Display embedded entities".
