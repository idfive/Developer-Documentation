# idfive drupal environment and common setup

## Servers and environments

In general, we commonly work on the following Paas (Platform as a service)/Servers for drupal:

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

- Meets minimum [system requirements](https://www.drupal.org/docs/8/system-requirements).
- We can access. This sometimes takes the form of requiring VPN instructions, SSO accounts, etc.
- DEV/STG/PROD environments set up. These should have their own Databases/file structures/etc.
- A git repo with deployments (via CI or similar) to each/all environments.
- Automated backups of each environments DB on the server.
- Access via SSH to view logs/etc, a POC who will do so, or the understanding that we may not be able to troubleshoot all issues that may arise.
- Information on how to get current files/DB's/etc locally when onboarding new Developers.
- Ideally, a docker or similar container duplicating the server for local testing.

Essentially, **idfive can accommodate almost any modern server, but it will usually require significantly more overhead to do so, over a service like Acquia or Pantheon**. Additionally, we find that they also force us to rely on client IT personnel to manage some aspects, decreasing our ability to respond rapidly to any issues.

#### Server specs and setup

While idfive developers maintain basic sysadmin skills, we do not set up servers for clients. If we are required to use a client server, we request that clients provide a sysadmin POC for the server who is knowledgeable in drupal best practices, and has been briefed on the project, and its scale. **The sizing, performance, and other specs of a server are between the client, and hosting provider to decide.**

#### Example client server best practices

##### Example setup

- Separate Development, Staging, and Production environments set up on server. This normally takes the form of three separate folders on the server, each with a fully functioning codebase, file system, and Database.
- Code repository set up on github, bitbucket, or similar.
- CI/CD chosen/enacted, to auto deploy certain branches (usually dev/stg/master) to respective environments on server.
- An easy way to import/export Database and files of each site. This is used most often in the form of pulling DB/files prod > dev, which we need to do almost every time we make updates/add new features/etc.
- Automated backups happening on all 3 environments.

##### Example use

###### Development (DEV)

- CI/CD auto deploys "develop" branch of code repo to server.
- Prod database and files able to be copied down on demand, so that we can essentially replicate current prod site, on dev site. We need to do this for almost every update/fix.
- This environment is used mainly to test new functionality requested, troubleshoot bug fixes, and test core/contrib updates.
- Essentially, this environment is for the developers.

###### Staging (STG)

- CI/CD auto deploys specific branch of code repo to server. This generally is used in a more "ad-hoc" fashion.
- Prod database and files able to be copied down on demand, so that we can essentially replicate current prod site, on stg site.
- This environment is used mainly "as needed".
- Essentially, this environment is an "all around extra" sandbox, that can be used to train admins, test content, or as an additional development environment for larger features. It can also be used to stage large amounts of content/etc, however prod content freezes/etc would all need to be thought through.

###### Production (PROD)

- CI/CD auto deploys "master" branch of code repo to server.
- This environment is used as the live site.
- New content, edits, etc happen directly here.
- "Essentially, this environment is the "source of approved truth" for content and code.

**Additionally:**

- There are many variables that go into making an enterprise level drupal system perform smoothly, and efficiently.
- Because of this, idfive does not provide specific recommendations for server setup (ie file storage size, memory size, etc), other than the general requirements stated above, unless specifically agreed to in the SOW by idfive.
- If a client server is utilized, it will be on the client to provide an environment/environments set up by someone versed in drupal best practices, performance, and the scope of the project, in order to make accurate and informed decisions as to exact specs of server/environment setup.
- It is for these reasons we recommend specific platforms, like acquia and pantheon, as they are tuned to scale for performance drupal sites. If these are not chosen, in favor of in-house assets, those assets are responsible for defining, and configuring the server environments as they see fit.
- Essentially, server environments are necessary for the code to run, but require a skill-set for setup, performance, and maintenance that is quite different than that of a developer, especially for enterprise level projects.
- We like to think of it like this: Michael Jordan is an amazing basketball player, but you likely would not ask him to also build the court he plays on. They are separate skills.

## Git repositories Continuous Integration (CI), and Continuous Deployment (CD)

### Git

idfive maintains a [bitbucket](https://bitbucket.org/) account, capable of private repositories, which we utilize for builds and maintenance for those with retainers. We can accommodate other vendors, such as GitHub or GitLab, under client accounts, if requested.

### CI/CD

Wherever possible, we prefer to use CI tools to automate builds and deployments. For larger builds, we usually recommend that clients use their own accounts, to ensure seamless deployments in the future, if not being maintained by us. idfive maintains a [buddy](https://buddy.works/) account which we utilize for builds and maintenance for those with retainers.

We commonly use CI to do the following:

- Run npm install front end components
- Run npm commands to minify/compress assets for performance.
- Run npm commands to deploy static front end style guides.
- Run composer commands to keep modules/core/etc up to date.
- Run drush commands on the server, post deployment.

We can, of course, provide a non CI/CD codebase and workflow if desired, it may however, result in more overhead.

## Default idfive drupal setup

### Core

If CI/CD used, we prefer to use a composer based setup for D8 core.

### Front end framework

While we can accommodate any modern framework (if requested), we prefer to use the [idfive Component Library](https://bitbucket.org/idfivellc/idfive-component-library) for scaffolding the look and feel of client sites. We find that this minimal library we created lets us start with commonly used components in an intentionally un-styled state, to let us enact custom designs more rapidly.

### Themes

- [idfive Component Library D8 Theme](https://bitbucket.org/idfivellc/idfive-component-library-d8-theme). We utilize this as a base theme, providing commonly used functions, and features.
- Custom client sub-theme. This is a child theme of above, and contains all custom styles and functions.

### Modules

- idfive maintains a list of common contrib modules that we add to most projects. [Add ICL Modules](https://bitbucket.org/idfivellc/idfive-automation-library/src/master/drupal/general/partials/add_icl_modules.sh) has an up to date list of what idfive recommends as a baseline.
- Any contrib modules that provide project specific functionality, and have been vetted by idfive DEV team.
- [idfive Component Library D8 Paragraphs](https://bitbucket.org/idfivellc/idfive-component-library-d8-paragraphs). Provides a common starter to add things like accordions, tabs, etc.
- Custom client base module. To hold any common custom functions/classes/etc, that need to be loaded via a module.
- Further custom modules, as needed, for major functionality.
