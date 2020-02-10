# Documenting custom code

In general, we utilize both a README.md for each project/sub project, as well as inline documentation. Some CMS's, like drupal and wordpress, have their own recommended formats, and those should be followed whenever possible.

- [drupal documentation guidelines](https://www.drupal.org/docs/develop/documenting-your-project)

## README.md

This is the place to really outline what this project is, and does. Some CMS's, like drupal and wordpress, have their own recommended formats, and those should be followed whenever possible.

 In general, be sure to document the following, at a minimum:

- About: What this does, and what it is for.
- Installation: How is this downloaded, installed, updated, etc.
- Configuration: Are their any special configurations required? Does it rely on anything 3rd party/etc?
- Options: Are their any user specified options, like theme settings?
- Development: What should future developers know about this project. How is the front end structured, what libraries/etc. What is "non standard" about this.

### Sample drupal module readme.md

```md
# My Custom Module

## About

A detailed writeup of what the modulke is, and does.

## Installation

Install as you would normally install a contributed Drupal module. Visit [drupal.org](https://www.drupal.org/docs/8/extending-drupal-8/installing-drupal-8-modules) for further information.

## Configuration

- Add the created block to the desired region in your theme.

## Options

- Module provides no configurable options.

## Development

- No special development considerations.
- See [developers.idfive.com](https://developers.idfive.com/), and [drupal documentation standards](https://www.drupal.org/docs/develop/documenting-your-project/module-documentation-guidelines).
```

### Sample Front end project readme.md

```md
# Project Title
​
One Paragraph of project description goes here
​
## Getting Started
​
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
​
### Prerequisites
​
What things you need to install the software and how to install them.

- Give examples.
​
### Installing
​
A step by step series of examples that tell you how to get a development env running.
​
- Say what the step will be
​- Repeat as needed.
- End with an example of getting some data out of the system or using it for a little demo.
​
## Deployment
​
Add additional notes about how to deploy this on a live system.
​
## Built With
​
* [idfive Component Library](https://bitbucket.org/idfivellc/idfive-component-library)
* List other technologies used.
​
## Versioning
​
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the tags on this repository.
​
## Authors
​
* **DEVELOPER NAME** - [idfive](https://idfive.com)
​
## License
​
This project is licensed under the MIT License.
```

## Help text

Help text is extremely important for both developers, and clients. Help text should mainly be focused on clients, to assist them in doing required tasks within a CMS/etc.

- Consider adding a help page that outlines common operations, or explains how things work.
- Consider adding help text/etc to entity add/edit forms to explain how things work.
- Consider adding markup fields to entities (like a homepage) to explain how things "not controlled within the form" work, like feeds from views and external API's. For example: "The blogs feed displays the 3 most recent blog posts tagged with X".
- [drupal help text standards](https://www.drupal.org/docs/develop/documenting-your-project/help-text-standards)

## Inline documentation

When writing custom code, think of the following principles:

- Code should be written for humans.
- Commenting is an additional tool that a developer can choose to use or not.
- Comments are part of code.

While we do encourage commenting in code, in general, better written code needs less comments. Consider:

- Better naming of functions/classes.
- Structuring + naming better.
- Commenting heavily as a last resort.

### Comments shine mostly when

- The reader needs context, that is not possible to express using the existing entities
- The code has to make special assumptions about its environment.
- Other tools cannot be applied (due to limitations of size / time).
- Heavy performance optimization that involve ugliness.

A comment should be bound tightly to code it relates to. When code changes, the comment needs to be changed or removed as well. Best practices of how and where comments are to be applied depends on the coding language used/etc.
