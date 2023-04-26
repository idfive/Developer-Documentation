# Drupal Performance

Web applications are a combination of server-side and client-side code. To improve the web performance, both the sides need to be optimized.

**The client-side optimization** relates to the initial page load time, JavaScript that runs in the browser, downloading all of the resources etc. that are seen in the web browser.

**The server-side optimization** relates to database queries and other application dependencies to check how long it takes to run on the server for executing requests.

## General

- Uninstall all unused modules. Also remove from codebase if possible.
- Aggregate CSS/JS files.
- Enable fast 404 module
- Consider a CDN
- Consider [quicklink](https://www.drupal.org/project/quicklink) to speed up subsequent page loads.

## Caching

[Internal Page Cache](https://www.drupal.org/docs/8/administering-a-drupal-8-site/internal-page-cache) module helps in caching the web pages for anonymous users to increase the speed for subsequent users.

[Dynamic Page Cache](https://www.drupal.org/docs/8/core/modules/dynamic-page-cache/overview) module caches web pages for the anonymous and authenticated users and is recommended for the websites of all screen sizes.

[BigPipe](https://www.drupal.org/docs/8/core/modules/big-pipe/overview) module allows your users to quickly see the unchanged, cacheable page elements while the personalized content is exhibited next. This technology was inspired by Facebook. Drupal 8’s much improved render pipeline and render API is of huge help.

### BigPipe

- consider also installing [Big Pipe sessionless](https://www.drupal.org/project/big_pipe_sessionless) to assist with non sessioned content.

## Images

- Utilize image styles.
- Consider lazy loading. The idfive ICL lazy loader module does this for newer builds.
- Use ImageApi Optimize with one of the free services.
- Consider using the responsive images module for larger images. It is a bit of setup, but can be worthwhile for mobile performance on pages with huge images.

## Drastic measures

- Consider breaking frontend css/js into modular files, and only include those libraries on needed pages.
- Consider using JS to load lists/views after page load, by interacting with jsonapi.
