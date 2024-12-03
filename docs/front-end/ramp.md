---
description: Responsive, Accessible, Maintainable and Performant
---
# RAMP
RAMP is an acronym for Responsive, Accessible, Maintainable and Performant, which are the primary considerations for front-end development at idfive.



### Assume that JavaScript is unavailable
By default, assume that JavaScript (JS) is unavailable. That paves the way to progressively enhance the experience where JS is available and honors our approach of making our content available to anyone, regardless of technology.

For full JavaScript apps, provide a link on how to enable JavaScript.

```html
<noscript>
  <p>This site requires JavaScript. See <a href="https://www.enable-javascript.com">how to enable JavaScript in your browser</a>.</p>
</noscript>
```

For individual JavaScript components, consider providing a simple/lo-fi alternative using Drupal views or WordPress archive functionality (where possible).

```html
<noscript>
  <p>This content requires JavaScript. See <a href="https://www.enable-javascript.com">how to enable JavaScript in your browser</a> or view an <a href="/link/to/alternate/version">alternate version of this content</a>.</p>
</noscript>
```

```scss
@media (scripting: none) {
}
```

A class of `js` is typically added to the `html` or `body` tag using Javascript, so if the user has JS disabled the class will not be present. This allows for styling based on whether JS is available or not. This allows for targeting in the sass file `body:not(.js) &` or `.js &`.

Use of the `:target` selector is useful for showing/hiding a popover navigation on click. [More on the :target selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:target)


## Maintainable
Managing code is work. The more code we write, the more we have to maintain (and the more that can go wrong). Focus on writing maintainable, readable code. Don’t be afraid to re-factor code when patterns start to emerge. Common functionality can be moved into functions, or pre-written packages can be included using [NPM](https://npmjs.com).

### Environment Variables
Avoid writing code that requires manual edits to code for deployment to different environments e.g. production vs. staging URLs for APIs. Use environment variables or runtime variables with npm where possible.

```bash
npm run watch --apiBase http://localhost.test/api/
```
```typescript
let apiBase = process.env.apiBase || "http://productionurl.com/api";
```

### Credentials
Don’t commit credentials where possible. For Drupal and WordPress sites, favor the approach of including a settings.local.php or wp-config-local.php file to store credentials.

### Document your code
Use [JSDoc](http://usejsdoc.org) style comments for JavaScript

```typescript
/**
 * Represents a book
 * @param {string} title - Title of the book
 * @param {string} author - Author of the book
 */
function Book(title: string, author: string) {
}
```

Prefer verbose over vague function and variable names.

```typescript
let x = document.querySelector('.main-menu') as HTMLElement; /* Bad */
let mainMenu = document.querySelector('.main-menu') as HTMLElement; /* Good */
```

```typescript
function filter() {} /* Okay */
function filterEvents() {} /* Better */
```

### Committing code
Commit code regularly, and in logical chunks e.g. Don't commit masses of updates in one commit. Commit each logical update individually.

Provide helpful commit messages that describe the fix, and copy a bug/issue ticket number or URL where possible.

[See the git page](https://developers.idfive.com/#/general/git/standards) for more information.

```
Bad: Fix bug
```

```
Good: Fixes flickering menu at smaller screen sizes. References trello ticket: (trello url).
```
