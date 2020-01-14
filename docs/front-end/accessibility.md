# Accessibility

## Images

All images must have appropriate, equivalent alternative text except:

- when the they do not convey content.
- are decorative.
- contain content that is already conveyed in text.

Linked images must have alternative text if the image is the only element inside the link

**Example 1:** Image with alt text

```html
<img src="sunset.jpg" alt="Sunset over the Golden Gate Bridge, San Francisco">
```

**Example 2:** Decorative image with empty alt attribute

```html
<img src"decorative.jpg" alt="">
```

## Forms

### Inputs

Form inputs must have an associated label.

**Example 1:** Label relationship enforced by code structure
The relationship between the input and label is enforced by the input being a child of the label.

```html
<label><input type="checkbox"> I agree to the terms and conditions</label>
```

**Example 2:** Label relationship enforced by for/id attributes
The relationship is enforced by a unique "id" on the `for` attribute of the label, and the `id` attribute of the input.

```html
<label for="firstname">First name</label>
<input id="firstname" type="checkbox">
```

## Sections

Section elements must have an appropriate `aria-label` attribute, or reference a label using the `aria-labelledby` attribute

**Example 1:** aria-label

```html
<section aria-label="Latest news and events">
  <p>Sed posuere consectetur est at lobortis.</p>
</section>
```

**Example 2:** aria-labelledby

```html
<section aria-labelledby="foo">
  <h2 id="foo">Latest news and events</h2>
  <p>Sed posuere consectetur est at lobortis.</p>
</section>
```

## Keyboard navigation

Keyboard navigation is typically used by non-sighted users and users with motor disabilities.

### Keyboard focus indicator

A sighted keyboard user must be provided with a visual indicator of the element that currently has keyboard focus. A basic focus indicator is provided automatically by the web browser and is typically shown as a border (called an outline) around the focused element. It is possible to style the indicator, but you should never apply `outline:0` or `outline:none`.

### Focus functionality for hover

In situations where content is revealed on hover, the same content should also be made visible when focusing.

### Tabbing index

By default, the tabbing index of an element is controlled by the order in which the element appears in the document flow. However, it is possible to manually specificy an elements tabbing index using the `tabindex` attribute.

_Note_: Elements with defined `tabindex` values receive focus first, in the order of their values. After navigating past all elements with a defined `tabindex` with a value of 1 or greater, the user will navigate to all other focusable elements, skipping over elements that have already received focus.

#### Tabindex values

- `tabindex="1"` (or any number greater than 1) defines an explicit tab order. This is almost always a bad idea.
- `tabindex="0"` allows elements besides links and form elements to receive keyboard focus. It does not change the tab order, but places the element in the logical navigation flow, as if it were a link on the page.
- `tabindex="-1"` allows things besides links and form elements to receive "programmatic" focus, meaning focus can be set to the element through scripting, links, etc.

**Example 1:** Reveal content on focus

```html
<div class="reveal">
  <a href="#" class="reveal__trigger">
    <h2>About us</h2>
    <div class="reveal__content">
      <p>We are awesome.</p>
    </div>
  </a>
```

```sass
.reveal__trigger {
  display: none;
  &:hover,
  &:focus {
    display: block;
  }
}
```

**Example 2:** Tabindex

```html
<ol>
  <a href="/services/">Services</a>
  <a href="/articles/" tabindex="2">Articles</a>
  <a href="/resources/" tabindex="3">Resources</a>
  <a href="/community/">Community</a>
</ol>
```

_Note_: Because "Articles" and "Resources" have defined `tabindex` values, they will be focussed to first (in order of the `tabindex` value), and then "Services" and "Community".

[Read more about tabindex](https://webaim.org/techniques/keyboard/tabindex)

## iFrames

All iframes should have a `title` attribute that describes the content.

**Example 1:** iframe title attribute

```html
<iframe title="Video: How to create accessible websites" src="https://linktocontent.com/videoid">
```

## Links

### Reasons not to open links in a new tab

- It can be disorienting for people, especially for novice web users or people who have difficulty perceiving visual content.
- They might not realise that a new tab or window has opened and might experience difficulty switching between windows.
- It breaks the navigational flow for visitors who visit the website using assistive technologies.
- Opening a new tab on mobile phone can be even more disorienting, as it's especially difficult for the user to go back to the website they were originally browsing.
- Taking away any control from the visitor can have a negative impact on the user experience.
- We like to let the visitors decide whether or not they want to open a link in a new tab.
- Besides the impact on accessibility, there is also a possible security issue to keep in mind. Using the attribute target="_blank" you are leaving your visitors open to possible phishing attacks. The other page can access the window object with the window.opener property. This exposes an attack surface because the other page can potentially redirect your page to a malicious URL.
- If nothing else, remember this principle is also documented as a guideline in the [WCAG (Web Content Accessibility Guidelines)](https://www.w3.org/TR/WCAG20-TECHS/G200.html).

### Exceptions

Notable exceptions defined by [WCAG (Web Content Accessibility Guidelines)](https://www.w3.org/TR/WCAG20-TECHS/G200.html):

- Opening a page containing context-sensitive information, such as help instructions, or an alternate means of completing a form, such as a calendar-based date picker, will significantly disrupt a multi-step workflow, such as filling in and submitting a form, if the page is opened in the same window or tab.
- The user is logged into a secured area of a site, and following a link to a page outside of the secured area would terminate the user's logon. In this case opening external links in an external window allows the user to access such references while keeping their login active in the original window.

It is recommended that when links are opened in a new window, there is advance warning.
