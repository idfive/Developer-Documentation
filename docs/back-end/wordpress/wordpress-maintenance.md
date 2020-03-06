
# Maintaining WordPress projects

## Git Flow

We use Git Flow to manage updates to WordPress core and plugins. For reference purposes, create an Issue in Bitbucket, or a ticket in Bugify. Bitbucket issues can be kept alive and tagged with the date in ISO format (e.g. BB-1-20190810). 

## WP Core Updates

Update locally using WP-CLI or the admin interface.

### Institutional Considerations 

Depending on a client's institutional server set-up, access policies, or hosting account, some core updates have to be approached differently.

 - **Pantheon** - Update using the upstream GUI in the Dev environment in Pantheon, and then pull down and update your local repository.  
 You can also follow the instruction under the WordPress tab on [Pantheon's documentation](https://pantheon.io/docs/core-updates#overwrite-core).
 - **WP Engine** - WP Engine will periodically update WordPress core on their staging and live environments; if you keep the environment up to date they will skip their update. 
 - **JHU Docker** - _majority_ of WordPress sites on the JHU Docker Network receive core updates automatically. If a retainer agreement allows, _test_ the RC1 version of a major release ([term definition](https://make.wordpress.org/core/handbook/about/release-cycle/version-numbering/)) on your local machine to alert clients of any issues that may arise. For specific clients, review information on their specific Jeeves entry. 

## WP Plugins

### Free plugins

Update locally using WP-CLI or the admin interface.

### Paid plugins 

Paid plugins may have to be downloaded manually from the vendor's site. Some paid plugins like ACF Pro and Gravity Forms can be activated and updated locally using the admin interface or WP-CLI. 

## Deployment

When deploying updates to a hosting environment that is unreachable by Buddy, manually updating the installation will be necessary. Perform due diligence by testing updates on your local installation and any test environment you may have access to, before manually updating the site.