# Caching in drupal

It is important to remember that, there are many, many, levels of caching on a modern drupal site. Specifics will depend on what server/environment sites are on, as well, as the content within.

## idfive's baseline D8/9 setup

- Disable "Internal Page Cache" module. There are several [core issues](https://www.drupal.org/project/drupal/issues/2352009) with this at the time of writing.
- Set up specific scheduled jobs, if required, to clear caches (`drush cr` or similar) on a timed basis.

## Fire bazooka

For some things, like seldom seen admin pages/etc, it may make sense to kill caching entirely. In these cases, you may trigger the cache kill switch. Calling the kill switch will stop both the page cache and the dynamic page cache from doing any caching on that page.

```php
\Drupal::service('page_cache_kill_switch')->trigger();
```
