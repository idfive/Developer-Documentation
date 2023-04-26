# Drupal Views

## Best Practices

- Whenever possible, use a rendered entity and display/view mode, rather than individual fields. This will ensure consistency across views within the site.
- When overriding `views-view.html.twig` for individual views, ie `views-view--VIEW-NAME.html.twig`, be sure that `<div{{attributes.addClass(classes)}}>` is left in place, as it adds needed classes/etc for lots of stock views operations to work.

## Typical customizations

Typically, styling a drupal view will require the following:

- `views-view--VIEW-NAME.html.twig`: General view wrapper template. Add any general wrapper markup/etc.
- `views-view-unformatted--VIEW-NAME.html.twig`: Row template. Add per row grid markup/etc here.
- `views-exposed-form--VIEW-NAME.html.twig`: Exposed filters/form template, if required. Simple exposed forms are often easier to simply style the stock output.

## General view wrapper template

Sample overridden exposed form, `views-view--VIEW-NAME.html.twig`:

```twig
{#
/**
 * @file
 * Theme override of a view.
 *
 * @ingroup themeable
 */
#}

{%
  set classes = [
    'A_CUSTOM_CLASS',
    dom_id ? 'js-view-dom-id-' ~ dom_id,
  ]
%}

<div{{attributes.addClass(classes)}}>
  <div class="exposed_class">
    {{ exposed }}
  </div>
  {% if rows -%}
    {{ rows }}
  {% elseif empty -%}
    SOME CUSTOM EMPTY MESSAGE/ETC
  {% endif %}
  <div class="exposed_class">
    {{ pager }}
  </div>
</div>
```

## Row template

Sample overridden exposed form, `views-view-unformatted--VIEW-NAME.html.twig`:

```twig
{#
/**
 * @file
 * Theme override of a view row.
 *
 * @see template_preprocess_views_view_unformatted()
 */
#}

{% for row in rows %}
  <div class="row_class">
    {{ row.content }}
  </div>
{% endfor %}
```

To note, this is for view list style unformatted, could be applied to formatted/etc if required. `{{ row.content }}` would then be the markup of the specified display mode of the rendered entity, ie teaser/custom/etc.

## Exposed filters/forms template

Custom exposed filter templates can be created/overridden, via `views-exposed-form--VIEW-NAME.html.twig`. You may then populate individual filters/etc as needed, interspersed with markup.

The fields themselves are provided by the `form` variable in twig, and can be viewed via `{{ dump(form)}}` in the template. Custom exposed filters are accessed via their 'Filter identifier' in each exposed filters settings, within the view. The 'Filter identifier' is also what shows in the url for each filter when pre-filtering via PHP, as an FYI.

Sample overridden exposed form, `views-exposed-form--VIEW-NAME.html.twig`:

```twig
{#
/**
 * @file
 * Theme override of a views exposed form.
 *
 * Available variables:
 * - form: A render element representing the form.
 *
 * @see template_preprocess_views_exposed_form()
 */
#}

{% if q is not empty %}
  {{ q }}
{% endif %}

<div class="some_class">
  <div class="search_class">
    {{ form.search }}
    {{ form.actions|without('reset') }}
  </div>
  <div class="filters_class">
    <h4>filter by...</h4>
    {{ form.actions|without('submit') }}
    {{ form.taxonomy_field }}
  </div>
  {{ form|without('search', 'title', 'taxonomy_field', 'actions') }}
</div>
```

You can see how markup could then be intermixed into the exposed form. In this instance, we have:

- `form.search`: A search API fulltext search field, with the Filter identifier of 'search' within the view.
- `form.taxonomy_field`: An exposed taxonomy select, with the Filter identifier of 'taxonomy_field' within the view.
- `{{ form.actions|without('reset') }}` can be used to show submit.
- `{{ form.actions|without('submit') }}` can be used to show reset, if added within view.
- Notice we also render `form|without`, which in this case provides our submit button/etc.
- `q` markup is needed for cleanurl's, and should be kept in at top of template.

## Exposed filters/forms Advanced JS

In lots of situations, we need to then make the custom form more functional. In these cases, we can add JS to target that. The best way to do that is to add js to the exposed form itself, only when needed.

### General setup

#### Module setup

Add any JS (or CSS as well if needed) via libraries to your custom module. The following would set up a general JS and CSS file for use, if they were added in to your module `as assets/css/MY_MODULE--general.css` and `assets/js/MY_MODULE--general.js`.

```yml
MY_JS.general:
  version: VERSION
  css:
     theme:
       assets/css/MY_MODULE--general.css: {}
  js:
    assets/js/MY_MODULE--general.js: {}
  dependencies:
    - core/jquery
    - core/drupalSettings
```

#### Example JS file

An example `assets/js/MY_MODULE--general.js` as a starter.

```js
(function ($) {

  /**
   * Make selects autosubmit, and a few other functionality additions for views exposed forms.
   *
   */
  Drupal.behaviors.exposedfilter_buttons = {
    attach: function(context, settings) {
      // Make selects autosubmit
      $('.views-exposed-form .js-form-item input').on('change', function(e) {
        var form = $(this).parents('form:first').attr('id');
        $('#' + form + ' input.form-submit').trigger('click');
      });

      // Custom reset button
      $('.custom-search--reset').on('click', function(e) {
        location.reload();
      });

      // If we passed parameters to prefilter(like ?taxonomy_term[37]=37), remove from url now.
      var url = location.href;
      if (url.match(/\?./)) {
        var newURL = url.split("?")[0];
        window.history.pushState('object', document.title, newURL);
      }

    }
  };

})(jQuery);
```

#### Attaching JS libraries to the views exposed form

```php
/**
   * Implements hook_form_FORM_ID_alter().
   *
   * Adds JS to all exposed forms.
   */
function MY_MODULE_form_views_exposed_form_alter(&$form, FormStateInterface $form_state, $form_id) {
  $form['#attached']['library'][] = 'MY_MODULE/MY_JS.general';
}
```

```php
/**
   * Implements hook_form_FORM_ID_alter().
   *
   * Adds JS.
   */
function MY_MODULE_form_views_exposed_form_alter(&$form, FormStateInterface $form_state, $form_id) {
  // Add a specific JS file for one view, general to all others.
  if ($form['#id'] == 'SPECIFIC_FORM_ID_OF_WHATEVER_VIEW_YOU_WANT') {
    $form['#attached']['library'][] = 'MY_MODULE/MY_JS.specific';
  } else {
    $form['#attached']['library'][] = 'MY_MODULE/MY_JS.general';
  }
}
```

### Reset button

Most times, it is easier to create a custom reset button, that simply reloads the page, rather than attempting to integrate the views reset, which has some issues. In that way, you can also place it wherever you wish within the exposed form. When ajax is used, one of your views wrappers will receive an "initialized" class. By targeting that, we can also hide it by default.

#### SCSS

```scss
.YOUR_CLASS_THAT_RECEIVES_INITIALIZED_WHEN_FILTERS_HIT {
  .custom-search--reset {
    display: none;
  }
  &.initialized {
    .custom-search--reset {
      display: block;
    }
  }
}
```

#### HTML

```html
<a class="spp-search--reset">Reset search &amp; filters</a>
```

#### JS

To be added in to your attached JS lib.

```js
// Reset button
$('.spp-search--reset').on('click', function(e) {
  location.reload();
});
```
