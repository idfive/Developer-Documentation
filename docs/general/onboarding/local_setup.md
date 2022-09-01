# Setup and Access

## Local Setup

In general, we recommend getting the following installed and running on your machine, to facilitate workflows we tend to use:

- [Visual Studio](https://code.visualstudio.com/) -- Required
- [Sequel Pro](https://www.sequelpro.com/)
- [Source Tree](https://www.sourcetreeapp.com/)
- [terminus](https://pantheon.io/docs/terminus)
- [terminus Site Clone](https://github.com/pantheon-systems/terminus-site-clone-plugin)
- [lando](https://docs.lando.dev/)
- [idfive Automation Library](https://bitbucket.org/idfivellc/idfive-automation-library)
- [Homebrew](https://brew.sh/)
- [composer](https://getcomposer.org/)
- [NPM](https://www.npmjs.com/get-npm)
- [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md)
- [xcode and xcode CLT](https://developer.apple.com/download/more/?=command%20line%20tools)


### Visual Studio Extensions

The following are recommended and required VS Code extensions.

- Code Spell Checker -- Required
- Debugger for Chrome
- Live Share
- markdownlint
- For drupal developers, please follow the [following drupal.org article](https://www.drupal.org/docs/develop/development-tools/configuring-visual-studio-code) to set up VS Code for better drupal development locally.

### Drupal specific issues

- May need to add keys from places like acquia into the ssh-agent, in order for sourctree to be able to find them when pushing: `$ ssh-add -K ~/.ssh/<private_key_file>`.
- Install [drush launcher](https://github.com/drush-ops/drush-launcher) in order to use repo specific drush versions.

## Access to repositories/accounts/etc

You will also potentially need access to the following:

- Acquia Teams
- Pantheon Teams
- Packagist Teams
- [Trello] (https://trello.com/)
- [Bugify] (https://bugify.idfive.com/)
- [Jeeves] (https://jeeves-admin.idfive.com/)
- [idfive bitbucket](https://bitbucket.org/)
- [idfive github](https://github.com/idfive)
- [buddy](https://app.buddy.works/idfive)

These are generally assigned via individual accounts, so this could be to an existing account in some cases (if you have one) or one to be created under idfive email accounts.
