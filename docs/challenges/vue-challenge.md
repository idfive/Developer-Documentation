# Practice Sort/Filter Vue Application (updated 1.23.19)

__Purpose:__ To gain familiarity with common REST API conventions, and basics of the Vue Framework.

__Task:__ Use the Associated Press’s News API (https://newsapi.org — free for projects in development as long as they aren’t published) to create a responsive browser application for sorting and filtering recent global news.

## Requirements
Results should be paginated, showing an indicator for “page number X of Y.” It should have a “jump to” box with an input and arrows and numbers for pagination as indicated in the wireframe.

By default, the application should show the top 100 (or fewer if 100 aren’t present) headlines in the United States.

__When showing top headlines, tools should be present that allow users to:__
* Switch from top headlines to all headlines, preserving as many filters/tools as possible.
* Choose whether to filter by source or category and choose a source or category to filter by Query by string

__Note:__ At least one (not one of each) source, query, country, or category MUST be present, or the top headlines endpoint will error. Prevent users from submitting a query that doesn’t have at least one of these.

__When showing all headlines, tools should be present that allow users to:__
* Switch from all headlines to top headlines, preserving as many filters/tools as possible.
* Choose a source to filter by
* Choose a language to filter by
* Set a date range for headlines (from...to...)
* Sort by relevancy, popularity, or publish time.
* Add/remove languages from filtering (this list is not available programmatically and should be copied from the documentation)
* Query by string

__Results should include:__
* Title
* Author
* Source Name
* Link to Source (if available) Character-Limited Description Image (if available)
* Link to Article Human-Readable Publish Date

[Sample Wireframes for Displays](https://developers.idfive.com/challenges/wireframes.pdf)
