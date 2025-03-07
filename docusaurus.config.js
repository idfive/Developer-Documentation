// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'idfive Developer Documentation',
  tagline: 'Documentation for Developers',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://developers.idfive.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'idfive', // Usually your GitHub org/user name.
  projectName: 'Developer-Documentation', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'idfive Logo',
          src: 'img/logo-idfive.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left'
          // },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} idfive.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '2PJMDLEUFN',

        // Public API key: it is safe to commit it
        apiKey: '6beee8a4716c3590aacfed0f1df1fd67',

        indexName: 'developers-idfive',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',



        // START UNKNOWN VALUES

        rateLimit: 8,
        maxDepth: 10,
        startUrls: ['https://developers.idfive.com/'],
        sitemaps: ['https://developers.idfive.com/sitemap.xml'],
        ignoreCanonicalTo: true,
        discoveryPatterns: ['https://developers.idfive.com/**'],
        actions: [
          {
            indexName: 'prod_idfivedocs',
            pathsToMatch: ['https://developers.idfive.com/**'],
            recordExtractor: ({ $, helpers }) => {
              // priority order: deepest active sub list header -> navbar active item -> 'Documentation'
              const lvl0 =
                $(
                  '.menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active'
                )
                  .last()
                  .text() || 'Documentation';

              return helpers.docsearch({
                recordProps: {
                  lvl0: {
                    selectors: '',
                    defaultValue: lvl0,
                  },
                  lvl1: ['header h1', 'article h1'],
                  lvl2: 'article h2',
                  lvl3: 'article h3',
                  lvl4: 'article h4',
                  lvl5: 'article h5, article td:first-child',
                  lvl6: 'article h6',
                  content: 'article p, article li, article td:last-child',
                },
                indexHeadings: true,
                aggregateContent: true,
                recordVersion: 'v3',
              });
            },
          },
        ],
        initialIndexSettings: {
          YOUR_INDEX_NAME: {
            attributesForFaceting: [
              'type',
              'lang',
              'language',
              'version',
              'docusaurus_tag',
            ],
            attributesToRetrieve: [
              'hierarchy',
              'content',
              'anchor',
              'url',
              'url_without_anchor',
              'type',
            ],
            attributesToHighlight: ['hierarchy', 'content'],
            attributesToSnippet: ['content:10'],
            camelCaseAttributes: ['hierarchy', 'content'],
            searchableAttributes: [
              'unordered(hierarchy.lvl0)',
              'unordered(hierarchy.lvl1)',
              'unordered(hierarchy.lvl2)',
              'unordered(hierarchy.lvl3)',
              'unordered(hierarchy.lvl4)',
              'unordered(hierarchy.lvl5)',
              'unordered(hierarchy.lvl6)',
              'content',
            ],
            distinct: true,
            attributeForDistinct: 'url',
            customRanking: [
              'desc(weight.pageRank)',
              'desc(weight.level)',
              'asc(weight.position)',
            ],
            ranking: [
              'words',
              'filters',
              'typo',
              'attribute',
              'proximity',
              'exact',
              'custom',
            ],
            highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
            highlightPostTag: '</span>',
            minWordSizefor1Typo: 3,
            minWordSizefor2Typos: 7,
            allowTyposOnNumericTokens: false,
            minProximity: 1,
            ignorePlurals: true,
            advancedSyntax: true,
            attributeCriteriaComputedByMinProximity: true,
            removeWordsIfNoResults: 'allOptional',
            separatorsToIndex: '_',
          },
        },



        // END UNKNOWN VALUES

      },
    }),
};

module.exports = config;
