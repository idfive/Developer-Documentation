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

