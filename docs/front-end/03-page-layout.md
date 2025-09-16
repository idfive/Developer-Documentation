# Layout & Page Structure

## Page Structure

The overall page structure in the [ICL / Pattern Lab Starter](/docs/front-end/idfive-component-library) is controlled by `source/_patterns/pages/page-structure.twig`:

```html
<div class="off-canvas">
  <div class="max-bound">
    {% include "@components/emergency-alert/emergency-alert.twig" %} {% include
    "@components/site-header/site-header.twig" %}
    <main id="main-content">
      {% block hero %} {% endblock %}
      <div class="outer-pad">
        {% block subnav %} {% endblock %}
        <div class="page-content">{% block content %} {% endblock %}</div>
      </div>
      {% block end_of_page_call_to_action %} {% endblock %} {% include
      "@components/site-footer/site-footer.twig" %}
    </main>
  </div>
</div>
```

### Usage with Individual Page Templates

Pages will then follow this pattern:

```html
{% extends "@pages/page-structure.twig" %} {% block hero %}
<!-- Include Hero -->
{% endblock %} {% block subnav %}
<!-- Include Subnav (if needed, if not - leave blank) -->
{% endblock %} {% block content %}
<!-- Page Content -->
{% endblock %} {% block end_of_page_call_to_action %}
<!-- Include End Of Page Call To Action (if needed, if not - leave blank) -->
{% endblock %}
```

### Modifying Page Structure

New blocks can be added as needed to insert different elements per page. For example if a unique site-header and site-footer were needed, `page-structure.twig` could be modified to

```html
<div class="off-canvas">
  <div class="max-bound">
    {% include "@components/emergency-alert/emergency-alert.twig" %} {% block
    header %}{% endblock %}
    <main id="main-content">
      {% block hero %} {% endblock %}
      <div class="outer-pad">
        {% block subnav %} {% endblock %}
        <div class="page-content">{% block content %} {% endblock %}</div>
      </div>
      {% block end_of_page_call_to_action %} {% endblock %} {% block footer %}{%
      endblock %}
    </main>
  </div>
</div>
```

Usage in the page in this example:

```html
{% extends "@pages/page-structure.twig" %} {% block header %}
<!-- Include Header -->
{% endblock %} {% block hero %}
<!-- Include Hero -->
{% endblock %} {% block subnav %}
<!-- Include Subnav (if needed, if not - leave blank) -->
{% endblock %} {% block content %}
<!-- Page Content -->
{% endblock %} {% block end_of_page_call_to_action %}
<!-- Include End Of Page Call To Action (if needed, if not - leave blank) -->
{% endblock %} {% block footer %}
<!-- Include Footer -->
{% endblock %}
```

## Outer Padding

### Inline (Left & Right) Padding

`<div class="outer-pad">` is a direct descendent of the `<main>` tag and is used to match the left and right spacing seen in the design reference (differs per project). The value will typically change according to screen-width and could also change per page template-type.

The inline padding (left and right) custom property values `--outer-padding` can be updated in `base.scss`. The value is changed based on screen width with media queries. One or two values can be used, if two values are used, the first is left padding and the second is right padding. For example:

```scss
// outer padding mobile
--outer-padding: #{rem(30)};

// outer padding tablet
@include mq($min, $tablet) {
  --outer-padding: #{rem(60)};
}

// outer padding desktop
@include mq($min, $lg_desktop) {
  --outer-padding: #{rem(100)};
}
```

Outer-pad is a placeholder selector (so that it can be re-used) and is applied in **placeholders.scss**:

```scss
%outer-pad {
  padding-inline: var(--outer-padding);
  &:has(.subnav) {
    @include mq($min, $lg_desktop) {
      display: grid;
      grid-template-columns: var(--outer-pad-subnav-grid-width) minmax(0, 1fr);
      gap: var(--outer-pad-subnav-grid-gap);
      align-items: start;
    }
  }
}
```

It's applied to `.outer-pad` in **layout.scss**:

```scss
.outer-pad {
  @extend %outer-pad;
}
```

### Handling Outer Padding With a Subnav

When a page (ie the [Kitchen Sink](https://staging2.idfive.com/idfive-pattern-lab-starter/public/patterns/pages-kitchen-sink-kitchen-sink/pages-kitchen-sink-kitchen-sink.rendered.html)) has a subnav, the above code `&:has(.subnav)` from **placeholders.scss** sets a grid layout with the subnav as the first column and the main content `<div class="page-content">` as the second column:

```scss
%outer-pad {
  &:has(.subnav) {
    @include mq($min, $lg_desktop) {
      display: grid;
      grid-template-columns: var(--outer-pad-subnav-grid-width) minmax(0, 1fr);
      gap: var(--outer-pad-subnav-grid-gap);
      align-items: start;
    }
}
```

The custom properties used here `--outer-pad-subnav-grid-gap` and `--outer-pad-subnav-grid-width` are set in `base.scss` and are also used in the formula to negate outer padding for full width components (see [next section](#negating-outer-padding-for-full-width-components))

### Negating Outer Padding for Full Width Components

Sometimes it's necessary to have a component take up the full width of the page - the placeholder selector (in **placeholders.scss**) can be used to easily accomplish this.

```scss
%negate-outer-pad-x {
  margin-inline: calc(var(--outer-padding) * -1);
  body:has(.subnav) & {
    @include mq($min, $lg_desktop) {
      margin-inline: calc(
          (
              var(--outer-pad-subnav-grid-gap) + var(--outer-padding) + var(--outer-pad-subnav-grid-width)
            ) * -1
        ) calc(var(--outer-padding) * -1);
    }
  }
}
```

### Padding-Top for the `<main>` Element

The `<main>` tag needs `padding-top` set to push itself down underneath the site header. Custom propties used with the site header help to create a formula to achieve this without the need for editing (in most cases), in `layout.scss`:

```scss
main {
  padding-top: var(--header-top-height);
  @include mq($min, $lg_desktop) {
    padding-top: calc(
      var(--header-top-height) + var(--header-main-menu-height)
    );
  }
  body:has(.site-header--hamburger) & {
    @include mq($min, $lg_desktop) {
      padding-top: var(--header-top-height);
    }
  }
}
```

## Spacing Between Kitchen Sink Components

Spacing between kitchen sink components is managed by adding a wrapper to each component on the page level (wrapper classes are not added in the component file - but in the page where they are included).

- The wrapper class will be `paragraph-widget` as well as the same `paragraph-widget-component-name` to give extra specificity if certain components need different spacing. For example, to wrap the `button-set` component - this is how it would appear on a page (for example on the kitchen sink):

```html
<div class="paragraph-widget paragraph-widget--button-set">
  {% include "@components/buttons-links/button-set.twig" with
  kitchen_sink_button_set %}
</div>
```

The general paragraph widget spacing css is handled in the `_base.scss` file at `source/css/core/_base.scss` and will need updated per project, according to the design.

- Use `margin-bottom` for the spacing to avoid margin collapsing
- If a particular component needs different spacing, handle this in the respective component's scss file using the unique paragraph widget class (ie `paragraph-widget--button-set`), ideally at the start of the file. For example in the button set:

```scss
.paragraph-widget--button-set {
  margin-bottom: rem(10);
}

.button-set {
// rest of styles
```

### Testing Space Between Components

- When the site is integrated and actual real-world content entered, the ordering of components will vary greatly
- It can be beneficial to re-order kitchen sink components temporarily on a page to ensure that there are no unwanted spacing issues that will occur
- This can be done by either re-ordering in the respective page's twig file, or by using dev tools to move sections

## Site Width

There is no `max-width` set on the site. Instead, since we're using rems throughout - we can increase the size (essentially scale) the site at larger viewport widths. In `source/css/core/_base.scss` the `html` element has the following style applied at the `max_desktop` width:

```scss
html {
  // other styles not relevant to site width not displayed here for clarity
  @include mq($min, $max_desktop) {
    font-size: calc(100% + 0.2vw);
  }
}
```

Updating the font size with a small `vw` unit here will dynamically increase the value of rems throughout the site, giving the scaling effect.
