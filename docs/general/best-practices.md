---
description: General Best Practices
---

# Best Practices

## Maintainable Code
Managing code is work. The more code we write, the more we have to maintain (and the more that can go wrong). Focus on writing maintainable, readable code. Don’t be afraid to re-factor code when patterns start to emerge. Common functionality can be moved into functions, or pre-written packages can be included using [NPM](https://npmjs.com).

## Environment Variables
Avoid writing code that requires manual edits to code for deployment to different environments e.g. production vs. staging URLs for APIs. Use environment variables or runtime variables with npm where possible.

```bash
npm run watch --apiBase http://localhost.test/api/
```
```typescript
let apiBase = process.env.apiBase || "http://productionurl.com/api";
```

## Credentials
Don’t commit credentials where possible. For Drupal and WordPress sites, favor the approach of including a settings.local.php or wp-config-local.php file to store credentials.

## Document your code
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

## Committing code
Commit code regularly, and in logical chunks e.g. Don't commit masses of updates in one commit. Commit each logical update individually.

Provide helpful commit messages that describe the fix, and copy a bug/issue ticket number or URL where possible.

[See the git page](https://developers.idfive.com/#/general/git/standards) for more information.

```
Bad: Fix bug
```

```
Good: Fixes flickering menu at smaller screen sizes. References trello ticket: (trello url).
```
