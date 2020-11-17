# Drupal Updates

## Core Updates

Core updates are to be enacted with composer. Though some scaffolding systems may vary, `composer update drupal/core --with-dependencies` is normally what is called for.

### Sample core update workflow

- Backup Database/etc as needed.
- `composer outdated "drupal/*"` Shows if core/contrib is out of date.
- `composer update drupal/core --with-dependencies`
- `drush updb` Update local DB, if required.
- `drush cr` Clear caches.
- Test locally
- If using config sync, run `drush cex sync`.
- Commit, deploy, test on dev/stg/prod, as needed, per client specs.

### General things to look at when performing core updates

In general, minor core updates are usually not an issue. Most often, these are changes to underlying libraries like Symphony, or security updates, or bug fixes to existing functionality.

- Look at your composer.json. Are their any patches active for core? Do they still apply?
- Look at the release notes for the new core version. Any red flags? Any open issues?
- Do the release notes mention changes to specific functionality? If so, flag for testing.
- Does the new release require updates to the database?

### Scaffolding tips for core composer.json, for easier updates

#### Exclude .htaccess changes

The following, when added to to the core scaffold, ignores .htaccess changes, where we often store global redirects/etc.

```json
"extra": {
  "drupal-scaffold": {
    "file-mapping": {
      "[web-root]/.htaccess": false
    }
  }
}
```

## Contrib Updates

Contrib updates are to be enacted with composer. Though some scaffolding systems may vary, `composer update drupal/MODULE_NAME --with-dependencies` is normally what is called for.

### Sample contrib update workflow

- Backup Database/etc as needed.
- `composer outdated "drupal/*"` Shows if core/contrib is out of date.
- `composer update drupal/* --with-dependencies` Will update all (including core if it needs it).
- `composer update drupal/MODULE_NAME` will do a specific module.
- `drush updb` Update local DB, if required.
- `drush cr` Clear caches.
- Test locally
- If using config sync, run `drush cex sync`.
- Commit, deploy, test on dev/stg/prod, as needed, per client specs.

### General things to look at when performing contrib updates

In general, contrib updates are "less trustworthy" than core updates. They are sometimes best done, and tested one at a time for significant updates, especially if jumping several versions, or major versions.

- Is this a minor, or major update?
- If major, any release notes regarding an upgrade path?
- Does this module rely on any libraries that also need updating?
- Does this have any conflicts with current core version. (shouldn't, if done via composer)
