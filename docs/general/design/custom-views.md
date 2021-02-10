# Custom Views

In cases where design requires a view that's too customized compared to what we get out of the box from Drupal or WordPress, we're required to go the route of building something completely custom using a JS framework like Vue.js. Vue.js and similar frameworks afford us with the ability to structure the markup to match the design precisely which is ideal from a frontend standpoint. However, this comes at the cost of time as the custom approach requires significantly more work to build the view than if we were to use a view provided by the CMS. In certain cases though, functionality is required that these CMS-provided views simply can't provide and we have no choice but to take the custom approach.


## Overview

A custom view requires two main components: the frontend application and an API that provides the data which dictates the state of the frontend. As a user interacts with the frontend, state is constantly being updated to reflect changes in things like filtering, querying, and paging. This tracked state can then later be used in subsequent API calls to refresh the supplied results.

The API itself can be implemented via a number of technologies, in Drupal the two that we use most commonly are [JSONAPI](https://jsonapi.org/) and REST Views. JSONAPI is a specification that provides a standardized structure for response data as well as a predefined system for filtering/querying that data. It's extremely robust but it's also very opinionated and requires us to follow conventions put in place by its authors which sometimes may prevent us from implementing desired functionality if the specification doesn't support said functionality. In cases where the application needs extensive filtering, sorting, paging, and querying across multiple different entity types that contain relationships to one another, it can be extremely beneficial. REST Views provide a much more basic approach and allow us to configure an API the same way we would an actual View in Drupal. In smaller applications REST Views can save time as the response structure is much more straightforward than what JSONAPI provides.

In WordPress, we typically use the built-in [WordPress REST API](https://developer.wordpress.org/rest-api/). This provides a relatively easy-to-use REST API that supplies the data we'd need right out of the box. WordPress also provides the ability to create custom REST endpoints for cases where complex querying or computation on the server may be necessary.


## Pros and Cons

The main benefit of creating a custom view is that we have complete control over virtually every aspect of the frontend and can implement complex layouts, animations, etc. This all comes at the cost of time though, both for the initial build as well as maintaining the application in the future. The amount of time saved by using a Drupal View over a custom one depends largely upon the task at hand but for something like a basic news feed with querying and minimal sorting/filtering, it could take around five times as long to build the view custom. As complexity grows, so does the difference in time between the two approaches.


## Examples of Custom Views in Production

Some examples of custom views in projects that are currently in production are:

- [MSAC Artist Directory](https://dev.msac.org/directory)
- [JHU APL Destination Map](https://civspace.jhuapl.edu/destinations)
