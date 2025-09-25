# Drupal and AI

The Drupal AI ecosystem is rapidly evolving, enabling Drupal websites to integrate artificial intelligence (AI) directly into their core functionality. These integrations empower organizations to enhance content creation, improve user experiences, automate routine tasks, and gain deeper insights from data.

Rather than a single "AI module," Drupal's AI capabilities are delivered through a collection of modules that connect to various AI services and technologies.

## Common AI Capabilities and Use Cases

AI in Drupal typically focuses on four key areas:

### Content Generation and Enhancement

- **Content Generation**: Automatically create drafts, summaries, translations, meta descriptions, or expand on existing content.
- **Content Governance**: Adjust text to meet institutional standards, accessibility requirements, or branding guidelines.
- **Image Generation/Manipulation**: Create unique images based on text prompts, or auto-tag and process existing images.
- **SEO Optimization**: Generate keywords, meta descriptions, and content suggestions to improve discoverability.

### Personalization and User Experience

- **Recommendations**: Suggest content, courses, or events based on user behavior and preferences.
- **Chatbots and Virtual Assistants**: Provide instant support, answer FAQs, and guide students and visitors through the site.
- **Search Enhancement**: Improve search relevance with AI-powered natural language understanding.

### Automation and Efficiency

- **Content Moderation**: Automatically flag inappropriate or non-compliant content.
- **Data Analysis and Insights**: Process large datasets to identify trends, student behavior, or engagement patterns.
- **Automated Tagging and Categorization**: Assign taxonomy terms to content for improved organization.

### Accessibility

- **Automated Alt Text**: Generate descriptive alt text for images to meet ADA compliance.
- **Content Summarization**: Create easier-to-digest versions of long articles or research papers.

## Drupal AI Ecosystem Components

The Drupal AI landscape can be viewed in three main layers:

1. AI Integration Modules
2. AI Services and Providers
3. Platform-Specific AI Offerings

### 1. AI Integration Modules

The primary AI module in Drupal is the [AI project](https://www.drupal.org/project/ai), which serves as a robust API wrapper, making it easier to integrate multiple providers.

**Key submodules include:**

- **AI Automators**: Create automated workflows to populate or modify any field in Drupal. Supports chaining prompts for complex AI tasks.
- **AI CKEditor**: Provides an AI assistant inside CKEditor 5 for spell checking, translations, and content rewriting.
- **AI Content**: Suggests taxonomy terms, summarizes body text, adjusts tone, and checks moderation compliance.

**Other useful integration modules include:**

- **AI Image Alt Text**: Automatically generate descriptive alt text for uploaded images.
- **AI SEO**: Use AI to generate metadata, keywords, and improve content discoverability.
- **AI Media Image**: AI-assisted tagging and management of media images.

### 2. AI Services and Providers

AI service providers deliver the actual machine learning capabilities that Drupal modules consume. Examples include:

- OpenAI
- Google Cloud AI
- Amazon Web Services
- Amazee.io
- Azure

Full current list here: [https://www.drupal.org/project/ai](https://www.drupal.org/project/ai)

### 3. Platform-Specific AI Offerings

Many Drupal hosting platforms offer their own AI-enhanced tools and integrations. Here are the key offerings from major platforms:

#### Acquia

- **Acquia Personalization** (formerly Lift): Personalizes content delivery based on user profiles and behavior using predictive analytics and content recommendations.
- **Acquia Site Search**: AI-enhanced search powered by Lucidworks Fusion/Solr with natural language processing and relevance ranking.
- **Acquia CDP** (Customer Data Platform): Unifies data from various sources to create actionable insights with predictive segmentation and behavior modeling.
- **Acquia Migrate AI**: Automates portions of Drupal migrations using pattern recognition and automated mapping.

#### Pantheon

- **Pantheon Advanced Global CDN**: Includes AI-powered performance optimization and intelligent caching decisions.
- **New Relic Integration**: AI-driven performance monitoring and automated issue detection for Drupal sites.
- **Autopilot**: Automated visual regression testing and update management with AI-powered conflict detection.
- **Edge Integrations**: Support for connecting to external AI services through edge computing capabilities.

#### Other Platforms

Most other hosting platforms (Platform.sh, AWS, Azure, etc.) provide infrastructure and API connectivity that enables integration with third-party AI services rather than proprietary AI tools. These platforms excel at providing the scalable infrastructure needed to support AI workloads and API integrations.

## Opportunities for Organizations

By leveraging Drupal's AI ecosystem, organizations can:

- **Enhance User Services**: AI-driven chatbots for customer support, guidance, or frequently asked questions.
- **Improve Content Management**: AI-assisted content governance ensures a consistent voice and accessibility compliance.
- **Boost Engagement**: Personalized content or product recommendations based on user behavior.
- **Advance Analytics**: AI-driven data insights for business intelligence and strategic planning.

## Next Steps

### Define Priorities

Identify the most impactful AI use cases for your organization, such as accessibility, personalization, and automation. This does not need to cover "everything", but 1-3 specific focus areas would be best to start with, as well as begin prioritizing additional stakeholder ideas to dive deeper into.

For the first batch, idfive would recommend considering the following, as providing a lower barrier to entry, as well as likely adding robust, usable features for site editors:

- **Automated Media Image Alt Text**
- **WYSIWYG Content Governance Check**
- **WYSIWYG Governance-aware Content Creation**

### Pick a Provider to Test With

Select an AI service provider to begin testing with. Any provider, such as OpenAI, Google Cloud AI, or Azure, can be used to test features. The provider is interchangeable, and you'll need a paid account with your chosen service to get started.

### Pilot a Proof of Concept

Begin with AI Image Alt Text to automatically generate descriptive alt text for images. This supports accessibility goals and provides a low-risk entry point to AI integration.

### Plan for Expansion

Once proven, expand to additional modules as defined by priorities.
