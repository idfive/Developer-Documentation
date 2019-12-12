# Documenting custom code, modules and themes

In general, we utilize both a README.md for each project/sub project, as well as inline documentation. Some CMS's, like drupal and wordpress, have their own reccomended formats, and those should be followed whenever possible.

- [drupal documentation guidelines](https://www.drupal.org/docs/develop/documenting-your-project)

## README.md

This is the place to really outline what this project is, and does. Some CMS's, like drupal and wordpress, have their own reccomended formats, and those should be followed whenever possible.

- [drupal readme](https://www.drupal.org/docs/develop/documenting-your-project/readme-template)

 In general, be sure to document the following, at a minimum:

- About: What this does, and what it is for.
- Installation: How is this downloaded, installed, updated, etc.
- Configuration: Are their any special configurations required? Does it rely on anything 3rd party/etc?
- Options: Are their any user specified options, like theme settings?
- Development: What should future developers know about this project. How is the front end structured, what libraries/etc. What is "non standard" about this.

## Help text

Help text is extremely important for both developers, and clients. Help text should mainly be focused on clients, to assist them in doing required tasks within a CMS/etc.

- Consider adding a help page that outlines common operations, or explains how things work.
- Consider adding help text/etc to entity add/edit forms to explain how things work.
- Consider adding markup fields to entities (like a homepage) to explain how things "not controlled within the form" work, like feeds from views and external API's. For example: "The blogs feed displays the 3 most recent blog posts tagged with X".
- [drupal help text standards](https://www.drupal.org/docs/develop/documenting-your-project/help-text-standards)

## Inline documentation

Coming soon.
