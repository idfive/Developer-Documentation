# WP-CLI
Use [WP-CLI](https://wp-cli.org) to manage WordPress core and plugin updates.

## Plugin management
See all available plugin updates:
```bash
wp plugin update --all --dry-run
```

Update specific plugin:
```bash
wp plugin update jetpack
```

Install plugin:
```bash
wp plugin install jetpack
```

Uninstall plugin:
```bash
wp plugin uninstall jetpack
```

## Updating WordPress Core
```bash
wp core update
```

## Security

### Security Plugins
Depending on the production platform, install either [Wordfence](https://wordpress.org/plugins/wordfence/) or [Sucuri](https://wordpress.org/plugins/sucuri-scanner/).

__Note:__ [Wordfence is not currently compatible with the Pantheon platform](https://pantheon.io/docs/modules-plugins-known-issues/#wordfence).

### Remove unused plugins/themes
Remove any unused plugins and/or themes to avoid potential security vulnerabilities.
