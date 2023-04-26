# Terminalfour

## Overview

Terminalfour (T4) is a unique CMS compared to more common CMS's Drupal and Wordpress with a somewhat steep learning curve due to the somewhat unorthodox way that it is structured and works. The biggest change from a development standpoint is that all backend work is done directly in the CMS and there is only a single environment to work in. This makes it somewhat error-prone and requires the developer to be extremely careful to not accidentally deploy features that are still in active development.

## Content Creation

Terminalfour's approach to content is based around a few core concepts/features:

- Content Types
- Sections
- Branches

Content Types are conceptionally similar to the same feature in most CMS's like Drupal with their own unique quirks that will be discussed in a later section. Sections are essentially just directories used to create the general site structure and typically each individual page will have its own section. Branches are portions of the IA that include both a root section and all of the child sections contained within that root.

## Content Types

The biggest difference between T4's Content Type implementation and something like Drupal or Wordpress is that everything that can be displayed on a page is a Content Type. With a CMS like Drupal, Content Types would be used for general "page types" like Basic Pages or News Articles and then you might have Paragraph Widgets for components that you'd place on a page; however, in T4 Content Types include anything that can be placed on a page. For instance, in Drupal you might have a Basic Page Content Type that includes a "Body" WYSIWYG field for the main page content as well as a "Widgets" field for adding components like accordions, blockquotes, etc. to round out the page. In T4 though, the "Body" field would be a distinct Content Type containing a WYSIWYG field and then each widget would be its own Content Type as well. In some cases like accordions, it may also be multiple related Content Types, I.E. an "Accordion" Content Type that displays "Accordion Section" entities from within the same section.

## Content Layouts

In a CMS like Drupal, you'd generally have templates that correspond to things like pages, nodes, widgets, etc. Due to the nature in which Content Types work in T4 though, each Content Type has its own templates in the form of "Content Layouts". In its most basic form, a Content Type's Content Layouts will consist of a single "text/html" layout. This is what T4 defaults to when an instance of a Content Type is added to a section. In many cases this single layout will be sufficient but in more complex cases you may need to display content in different ways based on context (I.E. a news article displayed as a teaser versus the full article output). In those cases you'll create a layout for each way that the content is displayed.

## Page Layouts

In addition to Content Layouts, T4 also includes Page Layouts which are templates that contain common elements like a header and footer. Page Layouts can be set on a per-section basis under the "Page Layouts" tab when editing a specific section. By setting the Page Layout and Inheritable page layout for the desired site, it will allow you to control which layout the current section uses as well as what layout child sections will use by default.

## Navigation

In the Content Layouts section we discussed how you can create different Content Layouts for cases like a news article teaser, card, etc. but we didn't explain how exactly those layouts can be used. By default, T4 renders content in a section using each Content Type's "text/html" layout which is usually what you'd want to display. But in certain cases like a feed of news articles displayed as teasers, this wouldn't be appropriate as it would display the full content for each article. In order to achieve this, you'd create a new Content Layout for the corresponding Content Type. You can name these custom layouts anything you want, in the case of an article teaser something like "text/teaser" is a logical choice.

In order to render out a list of articles though you'd need a way to source the desired content and also specify that the content being sourced should be rendered using the "text/teaser" layout. This is where Navigation objects come into play. Navigation objects allow you to select content, sections, etc. and then configure how that content should be output. There are quite a few different Navigation object types but the two most commonly used are "Top Content" and "Related Content".

### Top Content

Top Content allows you to specify where the content being sourced should be fetched from. The choices are:

- Use section
- Use branch
- Use current
- Use current section

"Use section" allows you to pick a specific section from the site's structure, "Use branch" is similar but will include content from both the selected section and its child sections, "Use current" allows you to select content from the section where the Navigation object is contained, and "Use branch" does the same but also fetches content from child sections of the containing section.

Top Content also has settings for "Content type name", "Number of pieces of content to display", "Which piece of content to start at?", "Content layouts", "Before HTML", and "After HTML". Most of these are self explanatory but "Content layouts" is the most important. This setting can be set to either "Use channel default" or "Use alternate content layout". By setting it to the latter, you can provide the name of a specific Content Layout that should be used for the sourced content (I.E. in the news article teaser example, you'd provide "text/teaser").

### Related Content

Related Content is functionally similar to Top Content but it lacks the ability to specify a limit, offset, or Content Type to look for. This option will usually only be used in cases where a section/branch contains entries of a single content type.

### Using Navigation Objects

Once a Navigation Object has been created, in order to use it you need to output it in a Content Layout using a T4 Navigation Object tag.

### Full Example

As an example, we'll look at how an Accordion component might be created. You'd first start off with two Content Types: "Accordion" and "Accordion Section".

#### Accordion

The "Accordion" Content Type's "text/html" layout would most likely look something like this:

```
<div class="accordion"></div>
```

#### Accordion Section

Since these sections need to be sourced from a Navigation object in order to be output properly inside the `.accordion` element of the parent "Accordion" content entity, in this case we'd omit the "text/html" layout entirely to prevent T4 from outputting the sections on its own. Instead, we'd create a layout named something like "text/section" that looks like this:

```
<div class="accordion__section">
  <button class="accordion__section-label">
    <t4 type="content" name="Label" output="normal" modifiers="striptags, htmlentities" />
  </button>
  <div class="accordion__section-content">
    <t4 type="content" name="Content" output="normal" modifiers="medialibrary, nav_sections" />
  </div>
</div>
```

#### Accordion Section Navigation Object

Once those Content Types have been created, you'd need to create a Navigation Object to source the "Accordion Section" entities to be output inside the "Accordion" entity included within the same Section as those "Accordion Section" entities. In this case, we could use Top Content, set the Fetch Method to "Use current", specify "Accordion Section" as the Content type, and "text/section" as the Content layout. Once this is created, we need to update the "text/html" layout of the "Accordion" Content Type to include this Navigation object. The template would now look like this:

```
<div class="accordion">
  <t4 type="navigation" id="123" />
</div>
```

Finally, in order to use it on a page, you'd create an "Accordion" entity inside a Section along with "Accordion Section" entities and publish the section.

## Useful Links

- [Navigation objects cheatsheet](https://github.com/anthonybarsotti/keele-nav-objects-cheatsheet) This includes recipes for things like selective/conditional output.
- [Terminalfour Knowledge Base](https://docs.terminalfour.com/documentation/)