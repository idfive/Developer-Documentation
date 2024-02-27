# Node.js

## Overview

Node.js is the backbone of our frontend build process. It allows us to run tools like Webpack and Fractal for optimizing static assets and providing a local development environment. Managing Node.js across projects can be tricky though, as time goes on and new versions are released, older projects may become incompatible with the newly-installed version creating frustration and headaches. [nvm](https://github.com/nvm-sh/nvm) allows us to avoid these issues by specifying the version of Node.js on a per-project basis.

## Setup

Installing nvm is very simple and documented in the project's [Github repo](https://github.com/nvm-sh/nvm#installing-and-updating). Once successfully installed, there are a few basic commands you'll use:

- `nvm install <version>`
- `nvm use <version>`

`nvm install <version>` will pull down the specified version and add it to your system's pool of Node.js versions managed by nvm. Running `nvm use <version>` will switch the current shell window to the specified version. If the version specified isn't already installed, nvm will prompt you with the `nvm install <version>` command that needs to be run to pull down the correct version.

## Project Settings

A version of Node.js can be specified on a per-project basis by using a `.nvmrc` file. Placing this file in the root directory where npm scripts will be run allows you to run `nvm use` when inside the project directory and nvm will automatically switch to the version of Node.js specified in the `.nvmrc`. The contents of this file are simply just the version number you wish to use. Running `nvm use` in a project that includes a `.nvmrc` first-thing after initially pulling down the codebase is required before doing anything else like installing Node modules. Switching to the specified version of Node.js before running `npm install` will ensure that all development dependencies are installed at the version required for the project to run properly.

## Common Versions

- [Version 19.0.0](https://nodejs.org/en/blog/release/v19.0.0) is use for the most up to date version of the Pattern Lab Starter (all Pattern Lab projects)
- [Version 12.20.0](https://nodejs.org/en/blog/release/v12.20.0) Is used for most older Fractal projects

## Helpful Commands

- `npm outdated` will show a list of packages that have newer versions that can be installed
- `npm view <package-name> homepage` will output a link to the url of the associated package
- `npm audit` will list security vulnerabilities in your project's dependencies
- `npm audit fix` will update packages in your project's dependencies to fix issues
