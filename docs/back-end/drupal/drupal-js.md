# Javascript and drupal

## Running functions after ajax

### Jquery example

Requires that you add jQuery as a dependency of your front end theme:

```yml
  dependencies:
    - core/jquery
```

Then you can add the watch function directly within the main .ts file of the project:

```ts
/**
 * Modules
 */
import { neededFunction } from "neededFunction";

declare var Drupal: any;
declare var jQuery: any;
declare var drupalSettings: any;

/**
 * Init
 */
neededFunction();

// Rerun stuff when views ajax runs
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.umaryAjax = {
    attach: function (context, settings) {
      $(document).once('umaryAjaxViews').ajaxSuccess(function (event, data) {
        if (drupalSettings && drupalSettings.views && drupalSettings.views.ajaxViews) {
          var ajaxViews = drupalSettings.views.ajaxViews;
          Object.keys(ajaxViews || {}).forEach(function (i) {
            // Scope to needed view here.
            if (ajaxViews[i]['view_name'] == 'search_content') {
              // Needed function here.
              neededFunction();
            }
          });
        }
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
```
