import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

<<<<<<< Updated upstream
=======
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

>>>>>>> Stashed changes
const config: Config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Comprehensive Guide to Robotics, AI, and Simulation',
  favicon: 'img/favicon.ico',

<<<<<<< Updated upstream
  // Set the production url of your site here
  url: 'https://physical-ai-humanoid-robotics.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Only essential i18n config
=======
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-github-username.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Physical-AI-and-Humanoid-Robotics/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-github-username',
  projectName: 'Physical-AI-and-Humanoid-Robotics',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
>>>>>>> Stashed changes
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

<<<<<<< Updated upstream
  // Minimal preset configuration
=======
>>>>>>> Stashed changes
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
<<<<<<< Updated upstream
=======
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
>>>>>>> Stashed changes
        },
        theme: {
          customCss: './src/css/custom.css',
        },
<<<<<<< Updated upstream
      } as Preset.Options,
    ],
  ],

  // Minimal theme config without navbar or footer that could cause issues
  themeConfig: {
=======
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Textbook',
      logo: {
        alt: 'Physical AI & Humanoid Robotics Textbook',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'textbookSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Textbook',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
>>>>>>> Stashed changes
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
<<<<<<< Updated upstream
  } as Preset.ThemeConfig,
=======
  } satisfies Preset.ThemeConfig,
>>>>>>> Stashed changes
};

export default config;