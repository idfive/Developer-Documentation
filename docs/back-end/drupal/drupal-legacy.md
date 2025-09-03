# Drupal 7

All D7 work is limited to maintenance on existing sites. Since the existing repositories vary far and wide as to how and where they are set up, its best to consult the documentation on each specific project.

## Notes on legacy setups

### Gulp

gulp was used as a task runner/compiler by the idfive front end team for several years. It is important to note that gulp tasks built several years ago do not play nice with newer node versions. Rather than reconfigure to use a newer gulp syntax, simply use [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md) to temporarily roll back to an older version of node (11.0 usually works fine). You may also need to physically pin the gulp version to an older one, in package.json, if not already done.

### SILK/Silc, and others

Several legacy D7 projects utilized these "first stabs" at an in-house library, to varying degrees of success. They should be considered legacy, and are not compatible with current ICL/etc.

### WYSIWYG Plugins

Pre Paragraphs adoption, several projects were done with complex custom WYSIWYG plugins. These should be ported to paragraphs on any project possible.

## Related Documentation

- [Drupal 7 to 9 Migration](/docs/back-end/drupal/drupal-seven-migration)
- [Site Building](/docs/back-end/drupal/drupal-sitebuilding)
- [Custom Development](/docs/back-end/drupal/drupal-custom-development)
