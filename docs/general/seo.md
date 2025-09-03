---
description: Overview of Search Engine Optimization
---

# SEO

## Structured Data

In order to have structured page content (ie, an event) display properly in Google Search Results, Schema Markup can be used.
[Google Schema Markup Testing Tool](https://developers.google.com/search/docs/appearance/structured-data)

## Event Tracking

### Tracking Video Plays

The ICL / Pattern Lab Starter contains event tracking for video plays. In the file **video-embed.ts** (located at `source/js/components/video-embed.ts`), data is sent to the dataLayer object in order to be tracked by Google Tag Manager.

Outside of the class, the property `dataLayer` is added to the `window` in order to prevent a TypeScript error:

```javascript
declare global {
  interface Window { dataLayer: any[]; }
}
```

The event tracking method is then called for each platform (YouTube, Vimeo, native `<video>`) on play:

```javascript
private eventTracking(source) {
  if (source === this.youTubePlayer && !this.eventDataSent) {
    window.dataLayer.push({
      event: "video_start",
      video_url:
        "https://www.youtube.com/embed/" + this.youtubeMedia.dataset.vid,
      video_title: this.youtubeMedia.title,
      video_provider: "youtube"
    });
  }
  if (source === this.vimeoplayer && !this.eventDataSent) {
    window.dataLayer.push({
      event: "video_start",
      video_url:
        "https://player.vimeo.com/video/" +
        this.vimeoMedia.dataset.vimeoVideoId,
      video_title: this.vimeoMedia.title,
      video_provider: "vimeo"
    });
  }
  if (source === this.localCDNMedia && !this.eventDataSent) {
    window.dataLayer.push({
      event: "video_start",
      video_url: this.localCDNMedia.currentSrc,
      video_title: "Your Video Title Here",
      video_provider: "local"
    });
  }
  this.eventDataSent = true;
}
```

### Setting up Google Tag Manager and Analytics

To output the data pushed from the front-end code, view [this screencast](https://drive.google.com/file/d/19gaBwlM5Q3naJ20fTwDOnurHrNHODHX1/view) demonstrating the process.

## Meta Tags in Head

list of what our sites typically output in the `<head>` regarding Open Graph (OG Tags) and Meta Tags:

```HTML
<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
<title></title>
<meta name="description" content="" />
<link rel="canonical" href="" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="" />
<meta property="og:description" content="" />
<meta property="og:url" content="" />
<meta property="og:site_name" content="" />
<meta property="og:image" content="" />
<meta property="og:image:width" content="" />
<meta property="og:image:height" content="" />
<meta property="og:image:type" content="image/png" />
<meta name="twitter:card" content="" />
<meta name="twitter:title" content="" />
<meta name="twitter:site" content="" />`
```
