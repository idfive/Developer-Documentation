# Drupal 8

Unless specifically directed, all new D8 sites should attempt to use a composer based workflow for updates, and the [idfive Component Libray](https://bitbucket.org/idfivellc/idfive-component-library) for the frontend. Some sites for specific clients, require different, specific workflows. This is not a substitute for that, rather, simply defines our "standard go tos".

## Local ENV Setup, and coding standards

### Preferred local VS Code setup

Please follow the [following drupal.org article](https://www.drupal.org/docs/develop/development-tools/configuring-visual-studio-code) to set up VS Code for better drupal development locally.

### PHP CodeSniffer/Drupal Coder

Before shipping custom themes and modules, run [drupal coder](https://www.drupal.org/node/1587138) in order to fix formatting issues/etc, and to ensure we ship code that matches the drupal coding standard.

- Install [drupal coder](https://www.drupal.org/node/1419988) globally
- See [coder example usage](https://www.drupal.org/node/1587138) for ideas on how to format/check custom code.
- Use phpcs: `phpcs --standard=Drupal --extensions=php,module,inc,install,test,profile,theme,css,info,txt,md MY_CUSTOM_MODULE` to check
- And then automated fixes via phpcbf: `phpcbf --standard=Drupal --extensions=php,module,inc,install,test,profile,theme,css,info,txt,md MY_CUSTOM_MODULE`
- Be sure to double check code valitity/etc.
- Use `--ignore=static` to ignore front end code/etc in a themes static folder.
- See [Advanced Usage](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Advanced-Usage) for ignoring directories/etc.

### Drupal Check

Install [drupal-check](https://github.com/mglaman/drupal-check), which will give you the ability to run checks on custom modules/code, to ensure you are not using any depreciated D8 functions that will be removed in D9/etc.

- Install globally via composer.
- Ensure the path or an alias is .bash_profile, ie `export PATH="$HOME/.composer/vendor/bin:$PATH"`
- Then run via `drupal-check PATH/TO/YOUR/CUSTOM/CODE`. To note, you may need to run this from outside a lando or other folders in order for the paths to not get wonky.

### Prefered general site scaffolding

Although exact setup will vary by client and environment, the ideal idfive d8 scaffolding resembles the following:
`
Site Root
  composer.json | that wiill not be overwritten, where custom modules/etc can be added
  web/docroot | where all core and custom code lives
    modules
      contrib | Where all contrib/composer based modules go
      custom | Where any custom modules for client/project go
        CLIENT_BASE_MODULE | One overarching module for any customizations that generally go with the custom client theme, but need to be in a module.
          modules | Submodules. Mainly, this will be Kitchen Sink widgets and the like. They should get their own submodules so updates can potentially happen in the future.
    themes
      contrib
        idfive
      custom
        CLIENT_BASE_THEME | child theme of idfive
`

## Prefered general site spinup workflow

Regardless of platform, the general SOP for idfive drupal sites is:

- Create local and remote core installs.
- Add standard idfive ICL Base theme.
- Create custom child theme for client. All custom front end/etc go here.
- Create a custom module/module suite for the client. All module related development and possibly config will go here.
- Add core suite of idfive approved contrib modules.
- Add other contrib modules as needed, but dont go overboard.

### Pantheon

Pantheon is the prefered platform to spin up DEV sites. Since lots of times, pantheon is only the temporary home of projects while in development, we have not yet created a custom idfive upstream, though that is not out of the question. For pantheon based sites, we utilize [lando](https://docs.lando.dev/) for local development, and to help keep sites in sync between local/remote/etc. Utilize the following workflow, assuming you have been assigned to the idfive team on pantheon.

One issue with pantheon is that we dont get a true composer based workflow out of the box.

- Standard, non composer: This is a bit of a misnomer, as you can use composer to install modules and libraries, but they may be lost upon core updates/etc. Client receives core upstream updates from pantheon.
- Composer based: This is a little more tricky as there is currently not a "one click" solution for this, however, we have created some helper scripts below. Client does not receive core upstream updates from pantheon, it has to update via composer manually.
- Also consider installing [terminus Site Clone](https://github.com/pantheon-systems/terminus-site-clone-plugin) which can quickly clone sites for a starter.

For this reason, we as of now, normally spin up a standard install if a client will be continuing on with pantheon, as the updates happening automatically are extremely important.

#### Standard, non composer (via pantheon dashboard and lando)

- Create a new sandbox in pantheon. Be sure this is assigned to the idfive team, not your personal account, so all Devs may access.
- Go ahead and set up that site on the DEV URL, ie install the site.
- Change pantheon from SFTP mode to GIT mode for the new site in the pantheon dashboard.
- If you have not already, set up [lando](https://docs.lando.dev/) locally, and set it up for use with [pantheon](https://docs.lando.dev/config/pantheon.html). It will require a [machine token](https://pantheon.io/docs/machine-tokens#authenticate-into-terminus) and a few other things.
- `cd ~/Sites`
- `mkdir MY-LOCAL-SITE-lando` (use the -lando at the end so you know this repo is served by lando)
- `cd MY-LOCAL-SITE-lando`
- `lando init --source pantheon` and go through the prompts to select the site you created in step one.
- `lando start` starts the app. It will also list the URL to access this locally.
- `lando pull` will pull DB/code/files from chosen environment through prompts.

At this point, you have a local version of the blank site that is up on pantheon. Begin setting up themes/modules/etc as needed.

#### Standard, non composer (via terminus and lando)

Uses pantheons command line tool, [terminus](https://pantheon.io/docs/terminus). Allows command line creation and install of pantheon site, then pulls down locally and runs via lando.

- Be sure [terminus](https://pantheon.io/docs/terminus) is installed and running locally. If the bin directory is unavailable on install, Terminus cannot be automatically set up as a command. A symlink or an alias to the Terminus executable must be made in either the ~/.bashrc or ~/.bash_profile files, a la `alias terminus="/usr/local/bin/terminus"`
- If you have not already, set up [lando](https://docs.lando.dev/) locally, and set it up for use with [pantheon](https://docs.lando.dev/config/pantheon.html). It will require a [machine token](https://pantheon.io/docs/machine-tokens#authenticate-into-terminus) and a few other things.
- `terminus site:create SITE-MACHINE-NAME 'SITE HUMAN NAME' drupal8 --org=idfive-llc` This will create a new site on pantheon, as drupal 8, under the idfive team.
- `terminus drush SITE-MACHINE-NAME.dev -- site:install --site-name=SITE-MACHINE-NAME --account-name=USERNAME --account-mail=EMAIL --account-pass=PASSWORD` run site install on site you just created, on dev environment of pantheon. You will receive the message "You are about to DROP all tables in your 'pantheon' database", this is normal, continue. Note there is an open bug against a password containing certain chars, like [!%&'](https://github.com/drush-ops/drush/issues/125).
- `terminus connection:set SITE-MACHINE-NAME.dev git` set connection to git
- `cd ~/Sites`
- `mkdir SITE-MACHINE-NAME-lando` (use the -lando at the end so you know this repo is served by lando)
- `cd SITE-MACHINE-NAME-lando`
- `lando init --source pantheon --pantheon-site "SITE-MACHINE-NAME"` and go through the prompts to select the site you created.
- `lando start` starts the app. It will also list the URL to access this locally.
- `lando pull` will pull DB/code/files from chosen environment through prompts.

At this point, you have a local version of the blank site that is up on pantheon. Begin setting up themes/modules/etc as needed.

#### Standard, via the IAL

Install the [idfive Automation Library](https://bitbucket.org/idfivellc/idfive-automation-library) and run the [Create new site on pantheon, and spin up locally](https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/pantheon/create_new_pantheon_site.sh) script. Adds all above lando/terminus commands into one file, that asks for machine name, theme name and human name, then runs all above scripts as well as installs common modules, and creates a client subtheme.

- `sh ~/Sites/_ial/drupal/pantheon/create_new_pantheon_site.sh`

#### Composer based, manually

Follow the steps outlined for [composer based, non CI](https://pantheon.io/docs/guides/drupal-8-composer-no-ci) site setup. Or alternatively, [convert an existing site](https://pantheon.io/docs/guides/composer-convert) to a composer based build.

### Acquia

For acquia based sites, we utilize [Acquia Dev Desktop](https://www.acquia.com/drupal/acquia-dev-desktop) for local development, and to help keep sites in sync between local/remote/etc. Since acquia based sites are normally created, and controlled by our clients, it is best to look at project specific documentation for any acquia based site. For acquia in particular, "spinning up a new site" often means adding a site to a multisite setup.

### idfive DEV server

If possible, all DEV site sandboxes should use pantheon. If the project absolutely requires that it be on an idfive DEV server, see Nick, or a senior developer for access/etc. All deployments to the idfive server should have a repo setup on the [idfive bitbucket](https://bitbucket.org/), and CI deployments set up through [buddy](https://app.buddy.works/idfive). Be sure that someone has given you access to both accounts.

## Composer Based D8 Cores

D8 core uses composer, but depending on the environment this is going to, slightly different setups must be enacted.

### Pantheon

#### Non CI

Mostly, we work without a CI at the moment, as most clients do not opt for the extra expense. See [Composer non CI](https://pantheon.io/docs/guides/drupal-8-composer-no-ci) docs for further information on setting up a pantheon repo for composer. This uses composer to manage updates, but commits these files to the codebase, rather than relying on a CI or build tool.

#### CI

coming soon...

### Acquia

#### Non CI

Mostly, we work without a CI at the moment, as most clients do not opt for the extra expense. See [Composer non CI](https://support.acquia.com/hc/en-us/articles/360004451293-Migrate-an-existing-D8-site-into-a-Composer-managed-build) docs for further information on setting up an acquia repo for composer. This uses composer to manage updates, but commits these files to the codebase, rather than relying on a CI or build tool.

#### CI

coming soon...

### Others

See [Using composer with drupal](https://www.drupal.org/docs/develop/using-composer/using-composer-with-drupal) for specifics.

## idfive base theme

The idfive base theme is intetionally pretty bare bones, but provides us with lots of behind the scenes functions we need. This theme is designed to act as a parent theme, and should never be enabled directly. See the [documentation](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme) for how to best use this theme, and how to quickly and efficiently spin up a child theme for this project.

The docroot and actual folders may vary, depending on your codebase, but in general, adding the idfive base theme, and creating your custom child theme will look like:

- `composer require idfive/idfive`
- `cd docroot/themes/custom/idfive/starterkits`
- `sudo bash generate_kit.sh` This will run a bash script, that prompts you for a human readable name, and a machine name for your custom child theme. From that, the script will generate a child theme, and install a fresh copy of the [idfive Component Libray](https://bitbucket.org/idfivellc/idfive-component-library) which is the prefered framework for all idfive projects.
- enable your new child theme.

You may need to adjust folders/etc as stated above, depending on the projects composer setup. See the [documentation](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme) for more information.

### via the IAL

Install the [idfive Automation Library](https://bitbucket.org/idfivellc/idfive-automation-library) and run the [Add ICL Theme](https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/general/partials/add_icl_theme.sh) script.

- `sh ~/Sites/_ial/drupal/general/partials/add_icl_theme.sh "YOUR CHILD THEME HR NAME" YOUR_CHILD_THEME_MACHINE_NAME`

## idfive ICL paragraphs module

The [idfive Component Library D8 Paragraphs](https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs) module, provides several common idfive ICL patterns as premade widgets, to add to a Kitchen Sink page.

The docroot and actual folders may vary, depending on your codebase, but in general, adding the idfive ICL Paragraphs widget is best done via composer:

- `composer require idfive/idfive_paragraphs`

## Recomended contrib modules

See the [idfive Automation Library](https://bitbucket.org/idfivellc/idfive-automation-library) script, [Add ICL Modules](https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/general/partials/add_icl_modules.sh) for an up to date list of what idfive reccomends as a baseline.

### via the IAL

Install the [idfive Automation Library](https://bitbucket.org/idfivellc/idfive-automation-library) and run the [Add ICL Modules](https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/general/partials/enable_icl_modules.sh) script.

- `ssh ~/Sites/_ial/drupal/general/partials/add_icl_modules.sh`
- You may also then enable via `sh ~/Sites/_ial/drupal/general/partials/enable_icl_modules.sh`

## Custom Module/Theme Development

### Versioning

If commiting custom modules/themes for eventual composer builds, versioning must be enacted on the repo that deploys to composer. When ready to deploy, create a tag in github up one version from previous, with the starting version being 8.1.0:

- Minor versions (non breaking changes): 8.1.1, 8.1.2, etc.
- Major versions (breaking changes): 8.2.0, 8.3.0, etc.

### Packagist

If this module/theme is to be controlled via composer:

- Create a package for it on packagist.org
- Be sure a client contact/it dept/etc has access to the packagist repo as well
- Set webhook to deploy to packagist on push, wherever the repo is located.

# Drupal 7

All D7 work is limited to maintenence on existing sites. Since the existing repos vary far and wide as to how and where they are set up, its best to consult the documentation on each specific project.

## Notes on legacy setups

### Gulp

gulp was used as a task runner/compiler by the idfive front end team for several years. It is important to note that gulp tasks built several years ago do not play nice with newer node versions. Rather than reconfigure to use a newer gulp syntax, simply buse [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md) to temporarily roll back to an older version of node (11.0 usually works fine). You may also need to physically pin the gulp version to an older one, in package.json, if not already done.

### SILK/Silc, and others

Several legacy D7 projects utilized these "first stabs" at an in-house library, to varying degrees of success. They should be considered legacy, and are not compatable with current ICL/etc.

### WYSIWYG Plugins

Pre Paragraphs adoption, several projects were done with complex custom WYSIWYG plugins. These should be ported to paragraphs on any project possible.
