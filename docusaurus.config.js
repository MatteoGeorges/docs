const math = require('remark-math')
const katex = require('rehype-katex')

module.exports = {
  title: 'Astraly',
  tagline: 'Documentation and Guides',
  url: 'https://docs.astraly.xyz/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.png',
  organizationName: 'Astraly', // Usually your GitHub org/user name.
  projectName: 'Astraly-docs', // Usually your repo name.
  themeConfig: {
    image: 'img/twitter_card_bg.jpg',
    prism: {
      additionalLanguages: ['solidity'],
    },
    algolia: {
      apiKey: '32465e2ab6f7554ff014e64c0d92171c',
      indexName: 'v3-docs',
      appId: 'S0IDD0YGLZ',
    },
    navbar: {
      title: 'Astraly Docs',
      logo: {
        alt: 'Astraly Asteroid',
        src: 'img/ast_dark_icon.svg',
      },
      items: [
        {
          to: '/introduction',
          label: 'Intro',
          position: 'right',
          className: 'persistent',
        },
        {
          to: '/protocol/reference/smart-contracts',
          label: 'Contracts',
          position: 'right',
          className: 'persistent',
        },
        {
          to: '/protocol/concepts/governance/overview',
          label: 'Governance',
          position: 'right',
          className: 'persistent',
        },
        {
          label: 'Give Feedback',
          to: 'https://forms.gle/KvLdKnLprrER3VyM6',
          position: 'right',
          className: 'persistent',
        },
        {
          href: 'https://github.com/Astraly-Labs',
          label: 'GitHub',
          position: 'right',
          className: 'persistent',
        },
        // {
        //   href: 'https://unigrants.org/',
        //   label: 'Grants',
        //   position: 'right',
        //   className: 'persistent',
        // },
      ],
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'protocol',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          routeBasePath: 'protocol/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/uniswap/uniswap-docs/tree/main/',
          includeCurrentVersion: false,
          versions: {
            V1: {
              banner: 'none',
            },
          },
        },
        blog: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          path: 'blog/',
          blogTitle: 'Engineering Blog',
          blogSidebarCount: 0,
        },
        googleAnalytics: {
          trackingID: 'UA-128182339-7',
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          customCss2: require.resolve('./src/css/colors.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'SDK',
        path: 'sdk',
        routeBasePath: 'sdk/',
        sidebarPath: require.resolve('./sdkSidebars.js'),
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
        includeCurrentVersion: false,
        versions: {
          '3.0.0': {
            banner: 'none',
          },
          '2.0.0': {
            banner: 'none',
          },
          '1.0.0': {
            banner: 'none',
          },
        },
      },
    ],
  ],
}
