# Techscan 101

## What is a Techscan

At it's essence, a techscan is our opportunity to have developers participate in the discovery of a project. As much as possible, we want to start a "blueprint" of what we are actually doing for the project. It is a chance for the developer to initially dive in to everything being requested, and come up with a loose plan of how we are actually going to enact this. A techscan will generate lots of questions, this is OK and normal. Work with the account manager in order to get any questions answered you can, and don't be afraid to note any questions directly in the document, if needed.

The following type of verbage, generally, and project dependant is shared with clients in RFP responses:

> We explore the finer points and requirements of the website you wish to
have. We will unpack each and every integration point and account for it in our technical
architecture.

or something like

> We determine the finer points and requirements of the website you wish to have. We will also provide hosting recommendations based on your selected open source CMS and which current modules will either need to be recreated (in Drupal) or updated (in WordPress), etc. Additionally, we’ll assist with any necessary development systems setup (local code base, source control, production sandbox, etc.)

## Examples

- An example for drupal, with custom integrations: [JHU APL](https://docs.google.com/document/d/1jThy6-8tMq32U0T0M9-xZkGRYuNlg3-Opn2imaZ9YQ0/edit?usp=sharing)
- An example for wordpress, with custom integrations: [Carroll](https://docs.google.com/document/d/1GdVx95iO0pBvoK2hkIb4uIT05YG_mm4_NSxxb1OLDNw/edit?usp=sharing)
- An example for frontend only: [Carthage](https://docs.google.com/document/d/1-4Ow2I7xCOKcdf41oked6jnqoftBmWZxsS6roLmRIXE/edit?usp=sharing)

## Where to start

The answer unfortunately, is "it depends". Generally though, you would want to pull up the following, and comb through:

- Any initial RFP from the client. If no RFP, any documents, email, etc where they go over "the ask", in detail.
- The idfive RFP response. This will have some generalities, but should also loosely define the project, and project scope.
- Any other documentation or direction provided by the project manger of the project, or the client.
- Starter template available on [the idfive drive](https://docs.google.com/document/d/1MJ_71PAhHpMDymWEEzJdioVVqBmuPyQXyE0On1LJicQ/edit?usp=sharing).

## What to include

### CMS

#### General Overview

This is a space to:

- Note the CMS they requested, if they did so.
- If we are assisting them decide on a CMS, a suggestion, along with  reasoning goes here.
- If we are doing "frontend only", Ie, goes to OU, LiveWhale, etc for integration, note that here.

#### Notable integrations

Here, we list any notable integrations requested, and begin to plan for them. Some examples could be:

- Use/integrate google custom search.
- Plan a content migration.
- Integrate with a third party API.

#### Configuration

This is a new addition to our techscans, but one we have found helpful in converting the amount of content types/widgets/etc into UX and design, as well as help see if there are any issues with scope/etc. Basically, it is a first draft, and sanity check on some things, and is up for change in the future, but is a good starting point. It mainly works as:

- A starting point/checkpoint for UX to see if what they are interpreting, and what DEV is interpreting, match up.
- A potential flag for project managers. For example, if the project was scoped for "10 templates" and we are seeing 12 content types, 10 views, and multiple widgets, could be a flag for a conversation on scope/expectations.

##### Content types

List all content types you see a need for based on scanning the RFP/etc. Ie, if they note needing "news", or "people", these are likely content types that need to be accounted for. Use this opportunity to really dig into what they are requesting, and list all you see the need/potential for. This will help in conversations with the UX team, and the client when we get into wireframing. Some examples include:

- Homepage
- Basic Page
- Staff Profile

##### Views

List specific views we will need based on findings in the RFP. This again, will help all understand what kind of custom templates/etc are needed, and will act as a starting point for UX team. Some examples include:

- News stories
- Events
- Staff Directory

##### Widgets

Here we outline, specifically, what we see as a stock/additional need for KS widgets.

Basic, likely on most/all:

- WYSIWYG
- Cards
- Buttons
- Carousel
- Tabs/accordion
- Table

Specific:

Things you may find in the RFP which would necessitate custom widgets/etc:

- Profile spotlight
- Related News
- Related Events

#### Code

Here we outline things like themes and modules. If custom libraries (like bootstrap/etc) are requested, this section may need customizations, but generally speaking, we outline our standard ICL approach.

##### Themes

Outline standard theme approach for chosen CMS.

##### Modules/plugins

Note any requests/requirements, as well as our standard protocol for the chosen CMS.

### Frontend

#### Frameworks

Add specific notes here about any frameworks being used, such as ICL.

#### Accessibility

General notes on accessibility, as well as any specific requests from the RFP.

#### Browser Compatibility

General notes on compatibility, what we test at idfive, as well as any specific requests from the RFP.

#### Testing

General notes on browser/accessibility testing, as well as an specifics requested in the RFP, such as using siteimprove/etc.

### Hosting

Details of any recommendation, or predefined host here. Specifically, if RFP states a client server, see [Client Controlled Servers](https://developers.idfive.com/#/back-end/drupal/drupal-environment?id=client-controlled-servers) for a list of specs/best practices/etc.

### Version control and deployments

If known, define here, if not, loosely define best practices, as well as what would be preferred by idfive. If client controlled server, note that most of this will need to be defined by their IT team/etc. Lots of this could/will be related to [CI/CD Notes](https://developers.idfive.com/#/back-end/drupal/drupal-environment?id=git-repositories-continuous-integration-ci-and-continuous-deployment-cd).
