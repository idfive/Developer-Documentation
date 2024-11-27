---
description: Guidelines for Building Performant Sites
---
# Performance

Keep performance in mind as you start building out a project. It will be much easier to keep this in mind throughout instead of right before launch. For more insights into idfive's philosophy on performance, see [our related blog post](https://idfive.com/agency/insights/website-speed-testing-seo-vs-ux/).

## Tips
- Image optimization: Ensure that images are sized appropriately—not too large, but not so small that the resolution is poor. Most modern CMS systems have tools and extensions to optimize image assets during publishing. 
- Minifying CSS and Javascript: Reduce unnecessary characters (spaces, line breaks, etc.) from CSS and Javascript files to reduce the overall file size, allowing these crucial aspects of a site to load faster.
- Optimize Caching: Apply server-side optimization strategies, including component and page-level caching to greatly improve a PageSpeed score.
- Lazy loading: Now that this can be done natively and with relative ease in the browser, set non-critical images to load only when needed (aka scrolled to in the viewport), allowing the page to load much faster.
- Reduce third-party code: Do not add too many trackers to your site, as they slow the load time. Some are critical (like Analytics), but adding too many extraneous scripts can quickly slow things down.


## Testing
[Google PageSpeed Insights](https://pagespeed.web.dev/) can be used to obtain a performance score. The score is broken down into "mobile" and "desktop".