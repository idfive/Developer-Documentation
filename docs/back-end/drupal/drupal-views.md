# Drupal Views

## Best Practices

- Whenever possible, use a rendered entity and display/view mode, rather than individual fields. This will ensure consistency across views within the site.
- When overriding `views-view.html.twig` for individual views, ie `views-view--VIEW-Name.html.twig`, be sure that `<div{{attributes.addClass(classes)}}>` is left in place, as it adds needed classes/etc for lots of stock views operations to work.

## Exposed filters/forms

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
    {{ form|without('search', 'title', 'taxonomy_field') }}
  </div>
  <div class="filters_class">
    <h4>filter by...</h4>
    {{ form.taxonomy_field }}
  </div>
</div>
```

You can see how markup could then be intermixed into the exposed for. In this instance, we have:

- `form.search`: A search API fulltext search field, with the Filter identifier of 'search' within the view.
- `form.taxonomy_field`: An exposed taxonomy select, with the Filter identifier of 'taxonomy_field' within the view.
- Notice we also render `form|without`, which in this case provides our submit button/etc.
- `q` markup is needed for cleanurl's, and should be kept in at top of template.

