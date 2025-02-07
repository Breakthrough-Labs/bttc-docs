// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bittorrent-Chain Docs',
  tagline: 'Learn about Bittorrent Chain',
  url: 'https://doc.bt.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/bittorrent-logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bttcprotocol', // Usually your GitHub org/user name.
  projectName: 'bttc-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    "@cookbookdev/docusaurus-jsx-runtime-fallback-plugin"
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/bttcprotocol/bttc-docs/tree/master',
          path: "docs",
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        title: 'Bittorrent-Chain Docs',
        logo: {
          alt: 'Logo',
          src: 'img/bittorrent-logo.png',
          target: "_self",
        },
        items: [
          {
            label: "Apps",
            position: "right",
            items: [
              {
                href: 'https://bt.io/wallet?language=EN',
                label: 'Wallet',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://bt.io/bridge?language=EN',
                label: 'Bridge',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://bt.io/staking?language=EN',
                label: 'Staking',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://bt.io/bttcswap?language=EN',
                label: 'Swap',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://bttcscan.com/',
                label: 'Explorer',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://scan.bt.io',
                label: 'BTTCSCAN',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://bt.io/swap?language=EN',
                label: 'BTT Redenomination',
                target: '_blank',
                rel: null,
              },

            ],
          },
          {
            label: "Community",
            position: "right",
            items: [
              {
                href: 'https://discord.com/invite/qrxfbgQYGa',
                label: 'Discord',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://forum.bt.io',
                label: 'Forum',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://twitter.com/BitTorrent',
                label: 'Twitter',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://t.me/bttccoredev',
                label: 'Telegram',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://medium.com/@BitTorrent',
                label: 'Medium',
                target: '_blank',
                rel: null,
              },

            ],
          },
          {
            label: "Security Audit",
            position: "right",
            items: [
              {
                href: 'https://official.bt.io/doc/SlowMist%20Audit%20Report%20-%20BitTorrent%20-%20TRON.pdf',
                label: 'Bittorrent TRON',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://official.bt.io/doc/SlowMist%20Audit%20Report%20-%20BitTorrent%20-%20Ethereum.pdf',
                label: 'Bittorrent Ethereum',
                target: '_blank',
                rel: null,
              },

            ],
          },

          {
            label: "FAQ",
            position: "right",
            items: [
              {
                to: 'docs/faq/general-faq',
                label: 'General FAQ',
                target: '_blank',
                rel: null,
              },
              {
                to: 'docs/faq/technical-faq',
                label: 'Technical FAQ',
                target: '_blank',
                rel: null,
              },
              {
                to: 'docs/faq/delegate-faq',
                label: 'Delegator FAQ',
                target: '_blank',
                rel: null,
              },
              {
                to: 'docs/faq/validator-faq',
                label: 'Validator FAQ',
                target: '_blank',
                rel: null,
              },
              {
                to: 'docs/faq/staking-faq',
                label: 'Staking FAQ',
                target: '_blank',
                rel: null,
              },

            ],
          },
          {
            to: "docs/contribute/guidelines",
            label: "How to Contribute",
            position: "right",
            //activeBasePath: "docs/contribute",
          },

          {
            href: "https://github.com/bttcprotocol",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },

          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      cookbookDocsBot: {
        features: {
          enableExplainSnippet: true,
        },
        dataSources: [
          {
            name: "Bittorrent",
            hostname: "https://bttc-docs.vercel.app"
          },
        ],
        greetingMessage:
          "Hi! I'm ChefGPT, ask me anything about Bittorrent Chain!",
        explainPromptTemplate: "Could you please elaborate on the content within the specified section? The section I'm referring to is:\n```\n$1\n```\n\nI'm seeking a comprehensive explanation to better understand the nuances, procedures, or concepts outlined in this particular segment. Your clarification will greatly assist in grasping the intricacies of the topic at hand.",
        dialogTitle: "ChefGPT",
        suggestions: [
          "What's Bittorrent Chain?",
          "How are Tron and Bittorrent Chain different?",
          "How do I deploy to Bittorrent Chain?",
        ],
        messageInputPlaceholder:
          "Ask anything about Bittorrent Chain",
        ui: {
          modalContainer: {
            width: "1000px",
            height: "800px",
            shadow: "inset 1px 1px 0 0 #2c2e40, 0 3px 8px 0 #000309",
            background: "var(--ifm-background-surface-color)",
          },
        },
        apiBaseUrl: "https://simple-web3-api.herokuapp.com",
        avatars: {
          ChefGPT: "/img/bittorrent-logo.png",
          User: "https://cookbook.dev/img/Richard.png",
        },
        // It's a public API key, so it's safe to commit it.
        apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWMxOGYwZTA1MjA1MDZmZmEwMDhjNDkiLCJpYXQiOjE3MDcxODM4ODYsImV4cCI6MjAyMjc1OTg4Nn0.vM0hNriY7Cqkugtg0kZOe_GA-vaDnHDLiSTuKAe109c",
      },
      algolia: {
        indexName: "bttc_developer",
        appId: '1QBPKMZ7KH',
        apiKey: "257d6b7627b4435cd2f99fd23e6ab5d6",
        contextualSearch: false,
        algoliaOptions: {},

      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Apps',
            items: [
              {
                label: 'Wallet',
                to: 'https://bt.io/wallet?language=EN',
              },
              {
                label: 'Bridge',
                to: 'https://bt.io/bridge?language=EN',
              },
              {
                label: 'Staking',
                to: 'https://bt.io/staking?language=EN',
              },
              {
                label: 'Swap',
                to: 'https://bt.io/bttcswap?language=EN',
              },
              {
                label: 'Explorer',
                to: 'https://bttcscan.com/',
              },
              {
                label: 'BTTCSCAN',
                to: 'https://scan.bt.io',
              },
              {
                label: 'BTT Redenomination',
                to: 'https://bt.io/swap?language=EN',
              },


            ],
          },
          {
            title: 'DevCenter',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/bttcprotocol',
              },
              {
                label: 'Faucet',
                href: 'https://testfaucet.bt.io/',
              },
              {
                label: 'Testnet',
                href: 'https://test.bt.io',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/qrxfbgQYGa',
              },
              {
                label: 'Forum',
                href: 'https://forum.bt.io',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/BitTorrent',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/bttccoredev',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@BitTorrent',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bittorrent-Chain | All rights reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
module.exports = config;
