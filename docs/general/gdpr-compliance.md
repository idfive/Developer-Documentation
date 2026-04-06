---
description: Cookie Consent and Privacy Compliance - Technical Options and Client Guidance
---

# Cookie Consent & Privacy Compliance: Technical Options

**IMPORTANT DISCLAIMER**: This document provides technical implementation options only. idfive does not provide legal advice or compliance recommendations. Organizations must consult with qualified legal counsel to determine their specific regulatory requirements and ensure any chosen solution meets those requirements.

## Current Privacy Law Landscape

Data collection and privacy is a subject you may have heard about recently, with many laws coming on the books aimed at controlling organizations' use of user data collected on websites. Commonly referred to as "Cookie" or "GDPR" policies, **there is quite a lot more to it than a simple "pop-up" on your website**.

### US State Privacy Laws

This was previously thought to be mainly a European issue (GDPR), but is quickly becoming relevant for US-based institutions as well. Currently, **thirteen states have passed comprehensive data privacy laws** in the United States:

- California
- Virginia  
- Colorado
- Connecticut
- Utah
- Iowa
- Indiana
- Tennessee
- Texas
- Florida
- Montana
- Oregon
- Delaware

Of those thirteen, **California, Colorado, Connecticut, and Virginia's laws are currently effective**.

### Platform Changes

Many platforms, like Google Tags and others, are enacting changes aimed at ensuring websites meet these new standards where required. Global organizations like Google are required to meet the more stringent EU laws, and therefore a lot of that "trickles down" in the form of things like flagging accounts and "actively blocking" sites they deem non-compliant.

### Google Analytics & Universal Impact

**This affects almost every website**: If your organization uses Google Analytics, Google Tag Manager, or similar tracking tools, **you need cookie consent regardless of what other privacy laws may or may not apply to you**. 

Google's platforms now require proper cookie consent to:

- Track user behavior and analytics
- Set marketing and remarketing pixels
- Enable conversion tracking
- Use audience targeting features
- Access full analytics reporting

**What this means**: Even if you think your organization might not be subject to state or international privacy laws, **if you want to use Google Analytics effectively, you'll need a cookie consent solution**. Google will limit or block tracking functionality for users who haven't provided consent.

**Why this makes it universal**: Since most websites want to track basic analytics (visitor counts, popular pages, traffic sources), cookie consent has become a practical necessity, not just a legal one.

## Our Approach to Privacy Compliance Requests

When clients ask about GDPR compliance, we provide technical options and implementation guidance, but **we do not recommend specific solutions** for legal compliance. Here's why:

- We don't know what specific legal requirements each client organization may be subject to
- We cannot determine if any particular plugin meets those specific legal requirements
- Compliance needs vary significantly based on business type, data processing activities, and jurisdictional requirements
- Legal requirements continue to evolve and may change

**Our role**: Provide technical implementation options and set up chosen solutions
**Client's role**: Consult with legal counsel to determine compliance requirements and select appropriate solutions
### Key Requirements Beyond Just a "Pop-up"

It is a requirement that users are informed what data is collected and how it will be used. Several countries and states also require that you allow users to "opt out" from the data being collected in the first place. **There is more to "Cookies" or "GDPR" than implementing a user privacy opt-in/out "pop-up" on your website.**

## Compliance Levels: Minimum to Robust

### Bare Minimum Compliance (idfive's interpretation)

A minimal, dismissible banner in the footer that:

- Briefly explains any cookies in use (note that this may be different for each site)
- Signifies that by remaining on this site, you consent to these cookies (NOTE: there is no option to decline)
- Links to the privacy policy page

**Plus a privacy policy page that:**

- Re-lists cookies in use on the site
- Lists any applications that track users
- Lists any forms that collect data, and what that data is used for
- Explains how to contact the organization and ask that their data be removed

**Important**: This is an interpretation of what "minimum acceptability" looks like for several common laws. **Your legal team will want to look into and outline which laws you may be required to follow, which may have different minimum standards. These laws are also VERY much subjective.**

### More Robust Solutions

More robust solutions, if required to meet laws which your organization may be subjected to, or if the desire is to "overprotect" by enacting solutions that conform to the majority of laws, usually involve **3rd party tools as the most efficient way of implementing**.

More robust solutions that can "actually block scripts" would involve either building out custom privacy prompts in your ecosystem, or enacting more advanced 3rd party privacy notification services.

## Standard idfive Approach

### Default Implementation

**For WordPress projects using the idfive Accelerator theme:**

The Accelerator WP theme comes with this stock WP privacy plugin pre-installed:
[GDPR Cookie Compliance](https://wordpress.org/plugins/gdpr-cookie-compliance/)

- Covers basic use cases
- Free version with paid upgrades available
- Provides a starting point while clients determine their specific legal requirements
- Serves as a prompt for clients to consult their legal team

### If Clients Need "Something for Now"

If you want to punt the conversation entirely, we can:

1. Set up the basic free WordPress plugin as a placeholder
2. Address specific compliance needs later once legal requirements are clarified
3. Upgrade to paid solutions if/when legal counsel determines specific needs

**Why we recommend paid plugins over free**: The free versions often do not meet the legal needs of many clients. They're really more of a prompt to get clients to consult their legal team and provide coverage for our recommendations.

## Cost Considerations & Multi-Site Challenges

**The issue for organizations with multiple websites**: Most 3rd party tool pricing is "per site," which can be expensive for organizations with many sites in their ecosystem. Some vendors may offer .edu pricing or bulk discounts, but that varies by provider.

**Cost vs. Maintenance Trade-off**: While it will be tempting to look at free/open source plugins or custom simpler solutions once cost is seen, keep in mind:

- Free solutions like [cookieconsent](https://github.com/osano/cookieconsent) are available but represent "one part" of the larger policy - they are in no way a sweeping, all-in-one solution
- Many things could be done that don't involve subscriptions, but if higher levels of compliance are required, it will become a large portion of the maintenance budget to keep up with it all
- **Consider the cost of subscriptions as more of an ongoing legal fee than specifically a website expense**

## Recommended Paths Forward

Really, the best way forward is likely deciding on one of these paths:

1. **Err on the side of caution**: Enact a paid 3rd party tool that does it all and covers all bases
2. **Do the research**: Determine what your organization is subject to, and build (and maintain) a more minimal custom solution

**idfive recommendation**: We highly recommend the first approach - partnering with/purchasing a subscription to a reputable 3rd party platform. The real benefit of the dedicated 3rd party subscription is that they will be monitoring/updating based on future new requirements as they come out.

## Technical Implementation Options

**Note**: These are technical implementation options, not legal compliance endorsements

### WordPress Solutions

#### Default Option: GDPR Cookie Compliance (Free)

- Pre-installed with idfive Accelerator theme
- Basic functionality for common use cases
- Free with paid upgrade options
- Good starting point while legal requirements are determined

#### Enhanced Options (Paid)

**CookieBot**

- Automatic cookie scanning
- Compliant consent banners
- Detailed documentation
- Integration with major analytics platforms
- Pricing: Free tier available, paid plans start at ~$9/month

**CookieYes**

- User-friendly interface
- Customizable consent banners
- Analytics and reporting features
- Good customer support

**OneTrust**

- Enterprise-grade solution
- Comprehensive privacy management
- Higher cost but extensive features
- Often used by larger organizations

**Real Cookie Banner**

- WordPress-native solution
- Good customization options
- Reasonable pricing
- Active development

### Drupal Solutions

#### Drupal Cookie Consent Options

**Cookie Consent (cookiebot)**

- Drupal integration for CookieBot service
- Professional scanning and compliance

**EU Cookie Compliance**

- Free Drupal module
- Customizable consent banners
- Good documentation

### Custom/Static Sites

#### JavaScript Solutions

**CookieBot**

- Universal JavaScript implementation
- Works with any website platform
- Professional compliance features

**OneTrust**

- Enterprise-grade solution
- Comprehensive privacy management
- Higher cost but extensive features

## Typical Client Questions & Our Responses

### "Do you have privacy policy/data collection compliance in place?"

**Our Response**: If you do not have a privacy policy/data collection compliance system in place, or if it is several years old, we highly recommend engaging both your web and your organizational legal teams to review whether it meets the legal requirements of your organization. While idfive is happy to assist in choosing and integrating a tool that meets the requirements your particular organization may be subject to, **the determination of "what your particular organization may be subject to" is really best reviewed by your legal team first**.

### "Which plugin do you recommend?"

**Our Response**: We don't recommend specific solutions for legal compliance because we don't know what specific legal requirements your organization may be subject to, or whether any particular plugin would meet those requirements. We can implement whichever solution your legal counsel determines is appropriate.

### "Can't you just pick one for us?"

**Our Response**: We could absolutely do that from a technical standpoint, but we want to be clear that we in no way know what legal requirements your organization may be subject to, and whether whatever we implement would meet those requirements.

### "We just need something for now"

**Our Response**: We can set up the basic free WordPress plugin that comes with the Accelerator theme for now, and address specific compliance needs later once you've consulted with your legal team.

### "What's the difference between free and paid?"

**Our Response**: The paid plugins typically offer more features and customization options. The free version often doesn't meet the legal needs of many clients - it's really more of a prompt to get organizations to consult their legal team.

### "Should we build our own custom solution?"

**Our Response**: It will be tempting to look at free/open source plugins or custom simpler solutions once cost is seen. While custom code "could" be designed and built to adhere to any use cases/policies you may define, **the real benefit of the dedicated 3rd party subscription is that they will be monitoring/updating based on future new requirements as they come out**.

### "We just use basic Google Analytics - do we really need this?"

**Our Response**: Yes, probably. **Google Analytics and Google Tag Manager now require proper cookie consent to function effectively**. Even if you think your organization might not be subject to specific privacy laws, if you want Google Analytics to track visitors, show accurate reporting, or enable any marketing features, you'll need cookie consent. Google will limit or block tracking for users who haven't provided consent, which means your analytics data becomes incomplete or unreliable.

## Recommended Process for Clients

### Step 1: Legal Consultation

1. **Consult with qualified legal counsel** to determine:
   - What regulations apply to your organization
   - What level of compliance is required
   - What specific features/capabilities you need

### Step 2: Solution Selection

1. **Choose appropriate technical solution** based on legal guidance:
   - Review available options (see technical solutions above)
   - Select solution that meets your determined requirements
   - Consider budget and complexity factors

### Step 3: Implementation

1. **idfive implements chosen solution**:
   - Configure selected plugin/service
   - Test functionality
   - Provide implementation documentation

### Step 4: Ongoing Management

1. **Maintain compliance** (client responsibility):
   - Monitor regulatory changes with legal counsel
   - Update technical implementation as needed
   - Regular compliance reviews

## idfive Implementation Services

Once a tool is chosen by your organization (assuming 3rd party), idfive can assist with any of the following, if desired:

- **Implementation Planning**: Coming up with an implementation plan
- **Site Audits**: Audits of forms or scripts in use across your ecosystem
- **Deployment**: Enacting and launching on all sites desired
- **Custom Styling**: We will style with CSS any 3rd party plugin chosen to match your site design
- **Testing**: Ensuring technical functionality works as expected
- **Documentation**: Providing technical implementation records

### What Clients Handle Directly

**Account Setup & Management**: Purchasing, setting up accounts, and providing embed code is usually best handled by the client directly. This ensures:

- Direct billing relationship with the service provider
- Client maintains account access and control
- Easier ongoing account management and renewals
- Client receives support directly from the vendor

**Our Process**: Once you have your account set up and embed code ready, idfive implements the technical integration and handles any styling/customization needed to match your website design.

## Legal Disclaimers & Summary

**CRITICAL**: This document provides technical implementation information only. idfive:

- Does NOT provide legal advice or compliance recommendations
- Does NOT determine what regulations apply to your organization  
- Does NOT guarantee that any solution meets your legal requirements
- Does NOT interpret privacy laws or regulations

**What you MUST do**:

- Consult with qualified legal counsel for compliance requirements
- Determine what regulations apply to your specific situation
- Select appropriate solutions based on legal guidance
- Maintain ongoing compliance monitoring with legal support

### Final Recommendations

**idfive HIGHLY recommends that your legal team be consulted and sign off on any approach.** These laws are VERY much subjective, and legal requirements vary significantly by organization type and jurisdiction.

To be clear: if you are asking idfive to make compliance recommendations, **we need to heavily caveat that this is in NO WAY a legal recommendation to ensure compliance**. We do not know what laws/regulations you are subject to, nor whether any recommended plugins meet these requirements.

**We provide technical implementation services only.** Legal compliance is your responsibility and requires consultation with qualified legal counsel.

Contact your idfive project team to discuss technical implementation options after you've determined your compliance requirements through legal consultation.
