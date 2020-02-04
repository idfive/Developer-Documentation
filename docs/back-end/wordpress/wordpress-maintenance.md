# Maintaining WordPress projects

## Git Flow

We use Git Flow to manage updates to WordPress core and plugins. For reference purposes, create an Issue in Bitbucket, or a ticket in Bugify. Bitbucket issues can be kept alive and tagged with the date in ISO format (e.g. BB-1-20190810). 

## WP Core Updates

Update locally using WP-CLI or the admin interface.

## WP Plugins

### Free plugins

Update locally using WP-CLI or the admin interface.

### Paid plugins 

Paid plugins may have to be downloaded manually from the vendor's site. Some paid plugins like ACF Pro and Gravity Forms can be activated and updated locally using the admin interface or WP-CLI. 

## Deployment

When deploying updates to a hosting environment that is unreachable by Buddy, manually updating the installation will be necessary. Perform due diligence by testing updates on your local installation and any test environment you may have access to, before manually updating the site.