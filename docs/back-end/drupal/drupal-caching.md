# Caching in drupal

Testing --- It is important to remember that, there are many, many, levels of caching on a modern drupal site. Specifics will depend on what server/environment sites are on, as well, as the content within.

## idfive's baseline D8/9 setup

- Disable "Internal Page Cache" module. There are several [core issues](https://www.drupal.org/project/drupal/issues/2352009) with this at the time of writing.
- Set up specific scheduled jobs, if required, to clear caches (`drush cr` or similar) on a timed basis.

## Fire bazooka

For some things, like seldom seen admin pages/etc, it may make sense to kill caching entirely. In these cases, you may trigger the cache kill switch. Calling the kill switch will stop both the page cache and the dynamic page cache from doing any caching on that page.

```php
\Drupal::service('page_cache_kill_switch')->trigger();
```

## Custom external cache clearing, on cron or similar

Lots of times, we load external content into KS paragraphs. This means, that the content itself gets cached for anonymous users. Since this is sometimes timely info, ie events, news, etc, we need to clear, or invalidate those caches periodically. Running a sitewide cache clear definitely works, however for larger sites this can result in performance issues. A better approach, is to define which paragraphs are external content, and simply invalidate those caches on cron run. This should then "bubble up" to the page cache, just as if you had saved new content into these paragraphs/etc.

First create a custom controller, such as `MY_MODULE/src/Controller/MyExternalController.php`.

```php
namespace Drupal\MY_MODULE\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\paragraphs\Entity\Paragraph;
use Drupal\Core\Cache\Cache;

/**
 * Controller that helps load and clear external content feed caches for websites.
 */
class MyExternalController extends ControllerBase {
  /**
   * Gets paragraphs that contain external content feeds.
   */
  public static function clearExternalContent() {
    $query = \Drupal::entityQuery('paragraph')
    ->condition('type', [
      'my_external_content_paragraph_1',
      'my_external_content_paragraph_2',
      'my_external_content_paragraph_3',
    ], 'IN');
    $pids = $query->execute();
    $cids = [];
    foreach ($pids as $key => $pid) {
      $paragraph = Paragraph::load($pid);
      $tags = $paragraph->getCacheTags();
      $cids[] = $tags;
      Cache::invalidateTags($tags);

    }
    $message = 'External content feed caches cleared.';
    \Drupal::logger('MY_MODULE')->notice($message);
    return $cids;
  }
}
```

Then create a `hook_cron()` in `MY_MODULE.module`.

```php

use Drupal\MY_MODULE\Controller\MyExternalController;

/**
 * Implements hook_cron().
 *
 * We implement hook_cron() to kick off clearing caches on external feed paragraphs.
 *
 */
function MY_MODULE_cron() {
  // Load and clear cache for all paragraphs marked as external.
  MyExternalController::clearExternalContent();
}
```
