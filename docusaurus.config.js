// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'neoVI API',
  tagline: 'Intrepid Control Systems',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cdn.intrepidcs.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/guides/sdocs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',          
            breadcrumbs: true,
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        title: 'neoVI API Docs',
        logo: {
          alt: 'neoVI API Docs',
          src: 'img/favicon.ico',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'left',
          //   dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          //   dropdownActiveClassDisabled: true,
          // },
          // {
          //   type: 'localeDropdown',
          //   position: 'left',
          //   dropdownItemsAfter: [
          //     {
          //       to: 'https://intrepidcs.com',
          //       label: 'Help us translate',
          //     },
          //   ],
          // },
          // {
          //   type: 'search',
          //   position: 'left',
          // },
          {
            href: 'https://intrepidcs.com/support/support-resources/',
            label: 'All Docs',
            position: 'right',
            className: 'nav-link',
          },
          {
            href: 'https://intrepidcs.com/products/',
            label: 'Products',
            position: 'right',
            className: 'nav-link',
          },

          {
            href: 'https://intrepidcs.com/learning-center/',
            label: 'Learning Center',
            position: 'right',
            className: 'nav-link',
          },
          {
            href: 'https://intrepidcs.com/support/',
            label: 'Support',
            position: 'right',
            className: 'nav-link',
          },

          {
            href: 'https://github.com/intrepidcs/neoVI_API_Docs',
            label: 'GitHub',
            position: 'right',
          },

        ],
      },
      footer: {
        style: 'dark',
        // logo: {
        //   alt: 'Meta Open Source Logo',
        //   src: 'img/IntrepidCS-Website.png',
        //   href: 'https://intrepidcs.com/',
        //   width: 300,
        //   height: 50,
        // },
        links: [
          {
            title: 'Applications',
            items: [
              {
                label: 'Cybersecurity',
                // to: '/docs/intro',
                href:'https://intrepidcs.com/applications/cybersecurity/',
              },
              {
                label: 'Data Logging',
                // to: '/docs/intro',
                href:'https://intrepidcs.com/applications/data-logging/',
              },
              {
                label: 'Simulate ECU Functions',
                // to: '/docs/intro',
                href:'https://intrepidcs.com/applications/simulate-ecu-functions/',
              },
              {
                label: 'Diagnostics, Testing and Validation',
                // to: '/docs/intro',
                href:'https://intrepidcs.com/applications/diagnostics-testing-validation/',
              },
            ],
          },
          {
            title: 'Products',
            items: [
              {
                label: 'Vehicle Network Adapters',
                href: 'https://intrepidcs.com/products/vehicle-network-adapters/',
              },
              {
                label: 'Data Loggers',
                href: 'https://intrepidcs.com/products/data-loggers/',
              },
              {
                label: 'Software',
                href: 'https://intrepidcs.com/products/software/',
              },
              {
                label: 'Automotive Ethernet Tools',
                href: 'https://intrepidcs.com/products/automotive-ethernet-tools/',
              },
            ],
          },
          {
            title: 'Support ',
            items: [
              {
                label: 'Support Resources',
                href: 'https://intrepidcs.com/support/support-resources/',
              },
              {
                label: 'Contact Support',
                href: 'https://intrepidcs.com/support/contact-support/',
              },
              {
                label: 'Class Schedule & Registration',
                href: 'https://intrepidcs.com/learning-center/class-schedule-registration/',
              },
              {
                label: 'Training Video Library',
                href: 'https://intrepidcs.com/learning-center/videos/',
              },
            ],
          },
          {
            title: 'Company ',
            items: [
              {
                label: 'About Us',
                href: 'https://intrepidcs.com/about/',
              },
              {
                label: 'News',
                href: 'https://intrepidcs.com/news/',
              },
              {
                label: 'Events',
                href: 'https://intrepidcs.com/events/',
              },
              {
                label: 'Contact Us',
                href: 'https://intrepidcs.com/contact-us/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://intrepidcs.com/" class="ics-link"> Intrepid Control Systems, Inc.</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp','basic','vbnet'],
      },

      algolia: {
        // The application ID provided by Algolia
        appId: 'XIRY0VQ1I2',
  
        // Public API key: it is safe to commit it
        apiKey: '24a329cd4a7855055acc7385697b2c9e',
  
        indexName: 'neovi api',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: 'guides/sdocs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },


    }),
};

module.exports = config;