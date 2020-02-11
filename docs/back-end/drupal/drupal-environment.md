# idfive drupal environment and common setup

## Servers and environments

In general, we commonly work on the following SASS/Servers for drupal:

- Acquia
- Pantheon
- Client controlled server

### Acquia/Pantheon

Since Acquia and Pantheon are both optimized to run drupal sites, we rely on the following built in to these platforms:

- DEV/STG/PROD environments. DB/files can also be easily moved between environments, to allow for a 100% accurate testing environment for features/builds.
- Automated DB backups. All paid plans include database backups once a day, and can be manually done on command.
- Automated or semi automated core and security updates.
- Local environments. Both platforms provide an easy way for additional developers to get up and tunning locally quite quickly.

### Client controlled servers

Most of the time, this is for universities or organizations with their own IT department and servers. If we need to utilize a client server, we will need the following, at a minimum:

- Meets minimum [system Requirements](https://www.drupal.org/docs/8/system-requirements).
- We can access. This sometimes takes the form of requiring VPN instructions, SSO accounts, etc.
- DEV/STG/PROD environments set up. These should have their own Databases/file structures/etc.
- A git repo with deployments (via CI or similar) to each/all environments.
- Automated backups of each environments DB on the server.
- Access via SSH to view logs/etc, a POC who will do so, or the understanding that we may not be able to troubleshoot all issues that may arise.
- Information on how to get current files/DB's/etc locally when onboarding new Developers.
- Ideally, a docker or similar container duplicating the server for local testing.

Essentially, **idfive can accommodate almost any modern server, but it will usually require significantly more overhead to do so, over a service like Acquia or Pantheon**. Additionally, we find that they also force us to rely on IT personnel to manage some aspects, decreasing our ability to respond rapidly to any issues.

While idfive developers maintain basic sysadmin skills, we do not normally set up servers for clients. If we are required to use a client server, we request that clients provide a sysadmin POC for any questions or issues that arise.

## Git repositories Continuous Integration (CI), and Continuous Deployment (CD)

### Git

idfive maintains a [bitbucket account](https://bitbucket.org/), capable of private repositories, which we utilize for builds and maintenance for those with retainers. We can accommodate other vendors, such as GitHub or GitLab, under client accounts, if requested.

### CI/CD

Wherever possible, we prefer to use CI tools to automate builds and deployments. For larger builds, we usually recommend that clients use their own accounts, to ensure seamless deployments in the future, if not being maintained by us. idfive maintains a [buddy](https://buddy.works/) which we utilize for builds and maintenance for those with retainers.

We commonly use CI to do the following:

- Run npm install front end components
- Run npm commands to minify/compress assets for performance.
- Run npm commands to deploy static front end style guides.
- Run composer commands to keep modules/core/etc up to date.
- Run drush commands on the server, post deployment.

We can, of course, provide a non CI/CD codebase and workflow if desired, it may however, result in more overhead.

## Default idfive drupal setup

### Framework

While we can accommodate any modern framework (if requested), we prefer to use the [idfive Component Library](https://bitbucket.org/idfivellc/idfive-component-library) for scaffolding the look and feel of client sites. We find that this minimal library we created lets us start with commonly used components in an intentionally un-styled state, to let us enact custom designs more rapidly.

### Themes

- [idfive Component Library D8 Theme](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme). We utilize this as a base theme, providing commonly used functions, and features.
- Custom client sub-theme. This is a child theme of above, and contains all custom styles and functions.

### Modules

- idfive maintains a list of common contrib modules that we add to most projects. [Add ICL Modules](https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/general/partials/add_icl_modules.sh) has an up to date list of what idfive recommends as a baseline.
- [idfive Component Library D8 Paragraphs](https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs). Provides a common starter to add things like accordions, tabs, etc.
- Custom client base module. To hold any common custom functions/classes/etc, that need to be loaded via a module.
- Further custom modules, as needed, for major functionality.
