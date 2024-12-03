---
description: Overview, Guidelines of Templating Language
---
# Twig Templating

The Pattern Lab Starter uses the twig template language (version 2 - [documentation link](https://twig.symfony.com/doc/2.x/)).

- For VSCode, the extension [Twig Language 2](https://marketplace.visualstudio.com/items?itemName=mblode.twig-language-2) is recommended for "_Snippets, Syntax Highlighting, Hover, and Formatting for Twig_"

## If Statements

- The most common pattern in use with twig is an `if` statement in order to check if an item exists ([documentation link](https://twig.symfony.com/doc/2.x/tags/if.html))
- Some example use cases can be seen in the hero at `source/_patterns/components/hero/hero.twig`:
  - The image is optional in the hero:
  ```html
  {% if hero.image.desktop_src is not empty %}
  ```
  allows us to check if a part of the corresponding data is "not empty" (which can be helpful if a variant is needed so the data can be replicated "empty" as [variants](#page-and-component-variants) pick up the data from their parents)
  - The subnav is also optional in the hero:
  ```html
  {% if hero.subnav.subnav.items|length > 0 %} {% include
  "@components/subnav/subnav.twig" with hero.subnav %} {% endif %}
  ```
  checking if the array has content using the `length` filter is also useful for [variants](#page-and-component-variants) by adding the "empty" array if the intention is to not output the subnav

## For Loop

- Another common pattern is the `for-loop` ([documentation link](https://twig.symfony.com/doc/2.x/tags/for.html)). For example, in the Breadcrumbs component `source/_patterns/components/breadcrumbs/breadcrumbs.twig`:

```html
{% for link in breadcrumbs.links %}
<li>
  <a href="{{ link.url }}" {% if loop.last %} aria-current="page" {% endif %}
    >{{ link.name }}</a
  >
</li>
{% endfor %}
```

This will loop through the data to output the links in the `breadcrumbs.links` array as `link` (where `link` is isued in the template to represent a single item in the loop):

```json
{
  "breadcrumbs": {
    "links": [
      {
        "url": "https://idfive.com",
        "name": "Home"
      },
      {
        "url": "https://idfive.com",
        "name": "Another Link"
      },
// rest of JSON data
```

- Notice in the breadcrumb example `{% if loop.last %}` in order to affect the last item in the loop
- There are many helpful tags and filters in twig that can be useful, see [official documentation](https://twig.symfony.com/doc/2.x/) for more

## Outputting "Raw" HTML

To output HTML tags in data, the `raw` filter can be used. An example can be seen in the `Tag List` component at `source/_patterns/components/tags/tag-list.twig`:

```html
<div class="tag-list__section-description">
  {{ tag_list.section_description|raw }}
</div>
```

- The goal here is to allow for html output, in this instance (ideally `<p>` tags would be used in the data - for example, this allows for multiple `<p>` tags if multiple paragraphs are needed)
- Wrap a `raw` element in a `div` as opposed to an explicitly text-based tag to allow for proper markup
- If there is a chance that links or list items will be added to the `raw` section, the class of `text-content` should be added to the containing `div` in order to pick up the styles properly
