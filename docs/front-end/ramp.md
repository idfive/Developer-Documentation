# RAMP
RAMP is an acronym for Responsive, Accessible, Maintainable and Performant, which are the primary considerations for front-end development at idfive.

## Responsive
Using the "mobile first" methodology, where default CSS rules apply to the smallest screen size and are then progressively enhanced using media queries. Screen sizes are not an absolute, so media queries should be defined on a per-project basis, and should be tested by resizing the browser vs. checking "standard" breakpoints (e.g. iPhone, iPad etc.).

### No session refresh
Using a site with functionality that changes on screen size should not require a browser refresh during that session. The user should be able to resize their screen at will and still be able to access all functionality of the website.

## Accessible
Providing a usable experience to all users, regardless of physical or technological limitations. This should include provisions for users with sight, motor (unable to use mouse/keyboard etc.) and technological constraints (slow internet, older browser, no JavaScript etc.).

### Accessibility Validators
All websites should conform to [WAI WCAG 2.0 AA standards](https://www.w3.org/WAI/standards-guidelines/wcag/). Automatic tools such as WAVE, SiteImprove and Ai11y are useful for highlighting obvious issues, but for full accessibility coverage, a full site audit using a screen reader should be done.

### Semantic Code
Writing semantic code is integral to accessibility, and has the added bonus of SEO benefit (a search bot is really just a user without sight). There isn’t a specific tag for all elements, but familiarize yourself with the elements are available and use them appropriately.

### Assume that JavaScript is unavailable
By default, assume that JavaScript (JS) is unvailable. That paves the way to progressively enhance the experience where JS is available and honors our approach of making our content available to anyone, regardless of technology.

### Images
Images should always have at least an empty alt attribute. Without an alt attribute some assistive devices may announce the full image path.

```html
<img src="image.jpg"> <!-- Bad -->
<img src="image.jpg" alt=""> <!-- Good -->
```

__Note:__ It’s okay to have an empty alt attribute. Not all images need to have specific alt text, particularly if it is decorative, or its content is communicated elsewhere in the document.

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

### Commiting code
Commit code regularly, and in logical chunks e.g. Don't commit masses of WordPress plugin updates in one commit. Commit each plugin updsate individually.

Provide helpful commit messages that describe the fix, and copy a bug/issue ticket number or URL where possible.

```
Bad: Fix bug
```

```
Good: Fixes flickering menu at smaller screen sizes. References issue #4.
```

## Performant
Code should be written with performance in mind at all times. All CSS and JavaScript should be "bundled" and minified/uglified using Webpack, and images should be compressed and resized for the smallest possible size.