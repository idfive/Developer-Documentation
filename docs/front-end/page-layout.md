# Layout & Page Structure

## Page Structure
The overall page structure in the [ICL / Pattern Lab Starter](/docs/front-end/pattern-lab) is controlled by `source/_patterns/pages/page-structure.twig`:

```html
<div class="off-canvas">
  <div class="max-bound">
    {% include "@components/emergency-alert/emergency-alert.twig" %}
    {% include "@components/site-header/site-header.twig" %}
    <main id="main-content"> 
      {% block hero %}
      {% endblock %}
      <div class="outer-pad">
        {% block subnav %}
        {% endblock %}
        <div class="page-content">
          {% block content %}
          {% endblock %}
        </div>
      </div>
      {% block end_of_page_call_to_action %}
      {% endblock %}
      {% include "@components/site-footer/site-footer.twig" %}
    </main>
  </div>
</div>
```
### Usage with Individual Page Templates
Pages will then follow this pattern:

```html
{% extends "@pages/page-structure.twig" %}
{% block hero %}
  <!-- Include Hero -->
{% endblock %}
{% block subnav %}
  <!-- Include Subnav (if needed, if not - leave blank) -->
{% endblock %}
{% block content %}
  <!-- Page Content -->
{% endblock %}
{% block end_of_page_call_to_action %}
  <!-- Include End Of Page Call To Action (if needed, if not - leave blank) -->
{% endblock %}
```

### Modifying Page Structure
New blocks can be added as needed to insert different elements per page. For example if a unique site-header and site-footer were needed, `page-structure.twig` could be modified to

```html
<div class="off-canvas">
  <div class="max-bound">
    {% include "@components/emergency-alert/emergency-alert.twig" %}
    {% block header %}{% endblock %}
    <main id="main-content"> 
      {% block hero %}
      {% endblock %}
      <div class="outer-pad">
        {% block subnav %}
        {% endblock %}
        <div class="page-content">
          {% block content %}
          {% endblock %}
        </div>
      </div>
      {% block end_of_page_call_to_action %}
      {% endblock %}
      {% block footer %}{% endblock %}
    </main>
  </div>
</div>
```

Usage in the page in this example:

```html
{% extends "@pages/page-structure.twig" %}
{% block header %} 
  <!-- Include Header -->
{% endblock %}
{% block hero %}
  <!-- Include Hero -->
{% endblock %}
{% block subnav %}
  <!-- Include Subnav (if needed, if not - leave blank) -->
{% endblock %}
{% block content %}
  <!-- Page Content -->
{% endblock %}
{% block end_of_page_call_to_action %}
  <!-- Include End Of Page Call To Action (if needed, if not - leave blank) -->
{% endblock %}
{% block footer %}
  <!-- Include Footer -->
{% endblock %}
```

## Outer Padding

### Inline (Left & Right) Padding

A `div` has been placed as a direct descendent of the `<main>` tag with a class of `outer-pad`. This should be used to match the left and right spacing seen in the design reference (differs per project). The value will typically change according to screen-width and could also change per page template-type.
In **layout.scss** we have:

```scss
.outer-pad,
%outer-pad {
  padding-inline: $outer-inline-padding-mobile;
  @include mq($min, $tablet) {
    padding-inline: $outer-inline-padding-tablet;
  }
  @include mq($min, $lg_desktop) {
    padding-inline: $outer-inline-padding-desktop;
  }
}
```

These values correspond to the variables seen in `source/css/core/_variables.scss` and should be updated as needed:

```scss
//Outer Padding Widths (for layout)
$outer-inline-padding-mobile: rem(33);
$outer-inline-padding-tablet: rem(60);
$outer-inline-padding-desktop: rem(120) rem(300);
```

Notice that the desktop value contains two values (a left and right) since often the content will not be centered at desktop widths (and to account for the sidenav)

### Different Padding Per Page Template

Depending on the complexity of the project, if there are many different values based on page template (for example a kitchen-sink might have different spacing than a homepage for example), more variables will need to be added to account for this. For example:

```scss
.outer-pad,
%outer-pad {
  padding-inline: $outer-inline-padding-mobile;
  // Target the body class of the template that requires a different value
  body.page-class & {
    // Create new variable for the different value if desired
    padding-inline: $outer-inline-padding-mobile-page-class;
  // Rest of code
```

### Negating Outer Padding for Full Width Components

These variables also correspond to the placeholder selector in `source/css/core/_placeholder-selectors.scss` with the name of `%negate-outer-pad-x`:

```scss
%negate-outer-pad-x,
.negate-outer-pad-x {
  margin-inline: -$outer-inline-padding-mobile;
  @include mq($min, $tablet) {
    margin-inline: -$outer-inline-padding-tablet;
  }
  @include mq($min, $lg_desktop) {
    margin-inline: rem(-120) rem(-300);
  }
}
```

- Notice that the desktop `@include mq($min, $lg_desktop) {` styles are using values instead of variables, this is due to the fact adding a negative `-` symbol to the variable won't work here since there are two values to the variable (since the design is off center on desktop) and the negative/subtract symbol would only apply to the first value
- Feel free to use additional variables to account for this if desired, I've gone this route for simplicty's sake
- If different values are required per template, such as in the [example above](#different-padding-per-page-template), these will need to be updated/reflected in the `%negate-outer-pad-x` selector

### Padding-Top for the `<main>` Element

The `<main`> element will need `padding-top` set to the height of the site-header (since the site-header is set to `position: fixed` and will not push down `<main>`).

```scss
main {
  padding-top: rem(55);
  @include mq($min, $lg_desktop) {
    padding-top: rem(102);
  }
}
```

- The `rem(55)` corresponds to the site header having a height of `55px` on mobile and `rem(102)` to the height of `102px` on larger desktops
- These could be set to variables if desired

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
