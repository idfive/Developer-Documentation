# PaaS Partner Overview

Modern enterprise CMS life cycles, deployments, and hosting are complex. If in-house resources aren’t available to support the new website, we recommend contracting with a modern Platform as a Service (PaaS) provider.

PaaS is more than just “hosting.” It is a cloud computing service that uses virtualization to offer an application-development platform to developers or organizations; and includes computing, memory, storage, database, and other app development services.

PaaS provides CMS-based applications, such as Wordpress and Drupal, the following features:

- Hosting. Scalable, modern cloud hosting.
- Deployment management. The ability to deploy code, files, and databases as needed.
- Code management. A Git repository or similar software to track changes.
- Database management. A way to back up and interact with databases.
- File management. A way to post and organize digital assets.
- CI/CD integration. A way to integrate Continuous Integration / Continuous Deployment Tools, if used.
- Development/staging/feature environments. The ability to have multiple "non-production" environments for testing code or content.
- Local environment packaging. The ability to mirror production environments, code, databases, and files, in a docker or similar workflow, so that developers can work efficiently on new features and fixes.
Support. A reliable resource to troubleshoot server, or traffic scale issues.

We recommend choosing a partner that can provide everything the site needs. (Otherwise, these features will need to be set up and accounted for separately.)

In the end, this partnership needs to be a good fit for your organization — and provides idfive and other vendors the tools needed to support your CMS.

We recommend the following PaaS options for various CMS/applications:

## [Acquia](https://acquia.com/)

We have partnered with Acquia since 2015, and have launched, and continue to maintain several enterprise level sites on this platform. Acquia supports the Drupal CMS.

### Acquia Pros

- Modern User Interface.
- Robust support.
- Supports Drupal multisites.
- Seamless integration into local development via Lando.
- Possible nonprofit/university pricing.

### Acquia Cons

- Can be cost prohibitive for smaller sites.
- Does not support non-CMS apps, such as node.js applications.

## [Pantheon](https://pantheon.io/)

We have partnered with Pantheon since 2016, and do most of our initial development for clients on this platform, regardless of the end host location. Pantheon supports both Wordpress, and Drupal CMS.

### Pantheon Pros

- Extremely easy to work with.
- Modern User Interface.
- Seamless integration into local development via Lando.

### Pantheon Cons

- Pricing plans are based on internal Pantheon metrics. Google Analytics can provide a baseline for the initial plan (https://pantheon.io/plans/pricing), but it does not reflect all of the traffic and page loads calculated by Pantheon. Pantheon will upgrade a site to what it considers the appropriate plan, based on its metrics, and that may cause a significant increase in hosting costs.
- Does not support non-CMS apps, such as node.js applications.
- Does not support drupal multisites.

## [Platform.sh](https://platform.sh/)

While we have not yet launched a production site on this platform, we feel their feature set and pricing structure are worth reviewing. Platform.sh supports both Wordpress, and Drupal CMS, as well as other CMSs and custom applications.

### Platform.sh Pros

- Robust command line and API interface.
- Does support non-CMS apps, such as node.js applications.
- Integrates seamlessly into local development via Lando.
- Pricing is not based on page loads / internal metrics.
- Supports Drupal multisites.

### Platform.sh Cons

- As yet untested by idfive for a long-term production use case.

## [WP Engine](https://wpengine.com/)

While we are not partners with WPEngine, we have worked on this platform for several client projects. We cannot comment on pricing structures/etc, but overall it seems to be a solid platform choice.

### WPEngine Pros

- Modern User Interface.
- WP-CLI access.
- Supports WP multisites.
- Seamless integration into local development via Lando.

### WPEngine Cons

- Requires/pushes own local development tools.
- Does not support non-WP apps, such as node.js applications.

## In summary

Our goal is to make sure you find a partner that meets your needs and budget. Please let us know if you’d like us to:

- evaluate any other PaaS partners that you’re considering;
- provide additional information about CMS requirements; or
- provide introductions to either of the partners listed above.
