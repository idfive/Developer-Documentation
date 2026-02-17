---
description: Technical guidelines for implementing accessible websites and applications
---

# Developer Accessibility Guidelines

## Overview

This guide provides technical implementation details for creating accessible websites and applications. For broader context on idfive's accessibility approach, see our [Accessibility Overview](/docs/accessibility/overview). Content creators should reference the [CMS Editors Guide](/docs/accessibility/cms-editors).

Providing a usable experience to all users, regardless of physical or technological limitations. This should include provisions for users with sight, motor (unable to use mouse/keyboard etc.) and technological constraints (slow internet, older browser, no JavaScript etc.).

## Testing

All pages/templates should be tested using these three tools:

### Siteimprove Accessibility Checker

The free version of the [Chrome Extension](https://chromewebstore.google.com/detail/siteimprove-accessibility/djcglbmbegflehmbfleechkjhmedcopn) does a great job finding issues and determining where they're located on the page and in the code. This is the preferred accessibility checker as of February 2024 - but running all three checkers documented on this page is required to cast a wide enough net to capture all issues.

The Siteimprove checker will rely on the developer to change the state of the page and re-check. For example run it on page load, after opening the nav, after resizing, after opening a subnav, etc. The more states that can be tested, the more thorough the search will be.

### AXE Dev Tools - Web Accessibility Testing

The free version of the [Chrome Extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) works well. This tool does a good job with overall accessibility - and is particularly good with testing keyboard functionality.

Installing the extension will provide a new tab in the dev tools - click "Scan ALL of my page" to run the test.

The test should be run for each state of the page, it will not automatically detect all states. For example:

- run the test on inital page load
- open the mobile nav and run
- resize to desktop and run with a dropdown menu open
- repeat for other similar situations (i.e. an open sidenav)

### WAVE Evaluation Tool

This is a good secondary tool to use to make sure anything missed by AXE DevTools is resolved. [Link to Chrome Extension](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)

- A lot of "false flags" can come up with this tool in terms of color contrast - it's worth confirming whether they are legitimate concerns or not. If a "false flag" can be resolved with a background-color update - it's worth making the update as our clients sometimes will use these tools too.

- There can also be some warnings that may not need resolved, for example warnings for "redundant links", which may occur on development sites where all links are for placement only and point to the same target

## Standards and Compliance

### WCAG Guidelines

All websites should conform to [WAI WCAG 2.2 AA standards](https://www.w3.org/WAI/standards-guidelines/wcag/). Automatic tools such as WAVE, SiteImprove and Axe are useful for highlighting obvious issues, but for full accessibility coverage, a full site audit using a screen reader should be done. A [useful Chrome WAVE extension](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-US) can help with the validation process. Run as many pages as possible through the [W3C Markup Validation Service](https://validator.w3.org/#validate_by_input).

### Semantic Code

Writing semantic code is integral to accessibility, and has the added bonus of SEO benefit (a search bot is really just a user without sight). There isn't a specific tag for all elements, but familiarize yourself with the elements that are available and use them appropriately.

## Images

Images should always have at least an empty alt attribute. Without an alt attribute some assistive devices may announce the full image path.

```html
<img src="image.jpg" />
<!-- Bad -->
<img src="image.jpg" alt="" />
<!-- Good -->
```

**Note:** It's okay to have an empty alt attribute. Not all images need to have specific alt text, particularly if it is decorative, or its content is communicated elsewhere in the document.

Images need a width and a height attribute added as much as possible - this helps to prevent layout shifting during loading.

Lazy loading should be added as much as possible to images and iframes (`loading="lazy"`) using the native lazy load attribute.

Avoid using background images as much as possible - this helps with CMS entry and allows for width and height attributes, lazy loading and alt text.

Use the `<picture>` tag if different assets are needed for various device widths:

```html
<picture>
  <source srcset="desktop-image.jpg" media="(min-width: 800px)">
  <img src="mobile-image.jpg" alt="">
</picture>
```

## Forms

### Inputs

Form inputs must have an associated label.

**Example 1:** Label relationship enforced by code structure
The relationship between the input and label is enforced by the input being a child of the label.

```html
<label><input type="checkbox" /> I agree to the terms and conditions</label>
```

**Example 2:** Label relationship enforced by for/id attributes
The relationship is enforced by a unique "id" on the `for` attribute of the label, and the `id` attribute of the input.

```html
<label for="firstname">First name</label>
<input id="firstname" type="text" />
```

### Form Validation

Provide clear, accessible error messages:

```html
<label for="email">Email Address</label>
<input type="email" id="email" aria-describedby="email-error" />
<div id="email-error" role="alert">Please enter a valid email address</div>
```

## Skip Links

A skip link is required to allow assistive technologies to quickly let users navigate to main content sections. This should be placed immediately after the body tag and link to the main content area.

```html
<a class="skip-link" href="#main-content">Skip To Main Content</a>
```

When focused, skip links should become visible and allow users to bypass navigation to reach the main content.

## Sections and ARIA

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

### ARIA Best Practices

- Use semantic HTML elements first, ARIA as enhancement
- Ensure ARIA labels are descriptive and meaningful
- Test with screen readers to verify ARIA implementation
- Keep ARIA attributes up to date with dynamic content

## Keyboard Navigation

### Overview

Keyboard navigation is typically used by non-sighted users and users with motor disabilities.

- Selectable items should be able to be tabbed through using the keyboard
- The tab order should follow the logic of the document structure
- Hidden elements should not be able to be tabbed through until the element is opened (using the enter key)

[More info on keyboard accessibility](https://webaim.org/techniques/keyboard/)

### Keyboard Focus Indicator

A sighted keyboard user must be provided with a visual indicator of the element that currently has keyboard focus. A basic focus indicator is provided automatically by the web browser and is typically shown as a border (called an outline) around the focused element. It is possible to style the indicator, but you should never apply `outline:0` or `outline:none` without providing an alternative focus indicator.

```css
/* Good - Enhanced focus indicator */
a:focus {
  outline: 2px solid #007cba;
  outline-offset: 2px;
}

/* Bad - Removes focus indicator without replacement */
a:focus {
  outline: none;
}
```

### Hidden Elements

Hidden elements should not be able to be tabbed to. Use the following approaches:

- Set `tabindex="-1"` on focusable elements within hidden containers
- Use `aria-hidden="true"` for decorative elements
- Ensure proper focus management when showing/hiding content

### Tabbing Index

By default, the tabbing index of an element is controlled by the order in which the element appears in the document flow. However, it is possible to manually specify an elements tabbing index using the `tabindex` attribute.

#### Tabindex values

- `tabindex="1"` (or any number greater than 1) defines an explicit tab order. This is almost always a bad idea.
- `tabindex="0"` allows elements besides links and form elements to receive keyboard focus. It does not change the tab order, but places the element in the logical navigation flow, as if it were a link on the page.
- `tabindex="-1"` allows things besides links and form elements to receive "programmatic" focus, meaning focus can be set to the element through scripting, links, etc.

[Read more about tabindex](https://webaim.org/techniques/keyboard/tabindex)

## iFrames

All iframes should have a `title` attribute that describes the content.

```html
<iframe
  title="Video: How to create accessible websites"
  src="https://linktocontent.com/videoid"
></iframe>
```

## Links

### All links should:

- Use meaningful link text that describes the destination or action
- Avoid the use of text like "click here", per the [W3C guidelines](https://www.w3.org/QA/Tips/noClickHere)
- If generic text is required, add more context via hidden spans:

```html
<a href="{{ url }}">
  Learn more
  <span class="visually-hidden"> about {{ title }}</span>
</a>
```

### Opening Links in New Windows

**Avoid `target="_blank"` whenever possible** for these reasons:

- It can be disorienting for people, especially for novice web users or people who have difficulty perceiving visual content
- It breaks the navigational flow for visitors using assistive technologies
- Opening a new tab on mobile can be disorienting
- It removes user control over their browsing experience
- Security concerns: `window.opener` can be exploited

**When `target="_blank"` is appropriate:**

- Opening context-sensitive help that would disrupt a multi-step workflow
- External links from secure/authenticated areas where session termination would be problematic

**If you must use `target="_blank"`:**

```html
<a href="external-site.com" target="_blank" rel="noopener noreferrer">
  External Link
  <span class="visually-hidden"> (opens in new window)</span>
</a>
```

## Color and Contrast

### Minimum Requirements

- **Normal text**: 4.5:1 contrast ratio
- **Large text** (18pt+ or 14pt+ bold): 3:1 contrast ratio
- **UI components and graphics**: 3:1 contrast ratio for essential elements
- **Information should never be conveyed through color alone**

### Testing Tools

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Browser DevTools accessibility panels
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)

## Interactive Components

### Modal Dialogs

```html
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Dialog Title</h2>
  <button aria-label="Close dialog">&times;</button>
  <!-- Dialog content -->
</div>
```

**Key requirements:**
- Focus management (trap focus within modal)
- Escape key to close
- Return focus to trigger element when closed
- Prevent background scrolling

### Dropdown Menus

```html
<button aria-expanded="false" aria-controls="menu" id="menu-button">
  Menu
</button>
<ul id="menu" role="menu" aria-labelledby="menu-button">
  <li role="menuitem"><a href="#">Item 1</a></li>
  <li role="menuitem"><a href="#">Item 2</a></li>
</ul>
```

## Progressive Enhancement

### Non-JavaScript Fallbacks

When possible, provide fallbacks when JavaScript is disabled/unavailable. All functionality can't be replicated, but content should at least be accessible.

A combination of [:target pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:target) and an additional close button in a `<noscript>` tag can be used to toggle the display of certain components.

A CSS media query `@media (scripting: none) {}` can be used to target elements when JavaScript is not available.

### Loading States

Provide accessible loading indicators:

```html
<div aria-live="polite" aria-label="Loading content">Loading...</div>
```

## Performance and Accessibility

### Core Web Vitals Impact

- Ensure interactive elements respond quickly to user input
- Minimize layout shifts that can disrupt screen reader navigation
- Provide loading indicators for slow-loading content

### Reduced Motion

Respect user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Component Library Integration

Our [idfive Component Library (ICL)](/docs/front-end/idfive-component-library) includes:

- Pre-built accessible components
- JavaScript utilities for focus management
- ARIA state management helpers
- Keyboard event handlers

Refer to the ICL documentation for implementation details and component-specific accessibility features.

## Testing Checklist

### Automated Testing
- [ ] Run Siteimprove accessibility checker
- [ ] Test with AXE DevTools
- [ ] Validate with WAVE extension
- [ ] Check markup with W3C validator

### Manual Testing
- [ ] Navigate entire page using only keyboard
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Verify focus indicators are visible
- [ ] Test at 200% zoom
- [ ] Verify color contrast ratios
- [ ] Test with reduced motion preferences

### Device Testing
- [ ] Mobile keyboard navigation
- [ ] Voice control functionality
- [ ] Various screen sizes and orientations

## Resources and Tools

### Browser Extensions
- [Axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
- [WAVE](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
- [Siteimprove](https://chromewebstore.google.com/detail/siteimprove-accessibility/djcglbmbegflehmbfleechkjhmedcopn)

### Screen Readers
- [NVDA](https://www.nvaccess.org/) (Windows, free)
- JAWS (Windows, commercial)
- VoiceOver (macOS/iOS, built-in)

### Reference Materials
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [WebAIM Resources](https://webaim.org/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)

---

_This guide provides technical implementation details. For broader context, see our [Accessibility Overview](/docs/accessibility/overview). Content creators should reference the [CMS Editors Guide](/docs/accessibility/cms-editors)._