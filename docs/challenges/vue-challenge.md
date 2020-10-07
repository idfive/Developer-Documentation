# Vue.js News App

## Overview

A challenge for current, and potential idfive frontend developers, to assess familiarity with common REST API conventions, and basics of the Vue Framework as well as to demonstrate understanding of advanced CSS layout concepts. Use the [Associated Press’s News API](https://newsapi.org) (free for projects in development as long as they aren’t published) to create a responsive browser application for sorting and filtering recent global news.

## Requirements

Create an independent application that accomplishes the following:

- Loosely follows [Sample Wireframes](https://developers.idfive.com/challenges/wireframes.pdf).
- Results should be paginated, showing an indicator for “page number X of Y.”
- Pagination should have a “jump to” box with an input and arrows and numbers for pagination as indicated in the wireframe.
- By default, the application should show the top 100 (or fewer if 100 aren’t present) headlines in the United States.
- Should be styled without the use of a framework/library like Bootstrap and should instead demonstrate an understanding of how to use flexbox to create responsive, grid-based layouts.
- It should include animations for when stories are shown, hidden, and sorted.
- Passes [WAVE](http://wave.webaim.org/) AA level testing.
- Passes [W3C Validator](https://validator.w3.org/) testing.
- No fancy frontend styles needed, but bonus points if you do.

### When showing top headlines, tools should be present that allow users to

- Switch from top headlines to all headlines, preserving as many filters/tools as possible.
- Choose whether to filter by source or category and choose a source or category to filter by Query by string.

__Note:__ At least one (not one of each) source, query, country, or category MUST be present, or the top headlines endpoint will error. Prevent users from submitting a query that doesn’t have at least one of these.

### When showing all headlines, tools should be present that allow users to

- Switch from all headlines to top headlines, preserving as many filters/tools as possible.
- Choose a source to filter by
- Choose a language to filter by
- Set a date range for headlines (from...to...)
- Sort by relevancy, popularity, or publish time.
- Add/remove languages from filtering (this list is not available programmatically and should be copied from the documentation)
- Query by string

### Results should include

- Title
- Author
- Source name
- Link to source (if available)
- Character-limited description
- Image (if available)
- Link to article
- Human-readable publish date

## Deliverables

- Link to git repository containing the custom application only. Full commit history desired.
- Link to a hosted version of the application, can be on GitHub Pages or whatever is easiest.

## Code review criteria

- Uses [standard Vue conventions and best practices](https://vuejs.org/v2/style-guide/) (I.E. no anti-patterns).
- Uses ES6 modules and some sort of build process to compile/optimize the application (Webpack, Gulp, etc.).
- Uses semantic HTML throughout.
- Uses modular CSS (CSS Modules, BEM, etc.).
- Works and displays consistently in all evergreen browsers (bonus points for IE11 support).
- Passes [WAVE](http://wave.webaim.org/) AA level testing.
- Passes [W3C Validator](https://validator.w3.org/) testing.

[Sample Wireframes for Displays](https://developers.idfive.com/challenges/wireframes.pdf)

## Time

- We estimate this would likely take somewhere between 10-12 hours depending on styling and microinteractions.
