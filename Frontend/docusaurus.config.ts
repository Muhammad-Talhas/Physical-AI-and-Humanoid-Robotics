import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Comprehensive Guide to Robotics, AI, and Simulation',
  favicon: 'img/favicon.ico',

  future: { v4: true }, // Important for Vercel build

  url: 'https://physical-ai-humanoid-robotics.vercel.app',
  baseUrl: '/',

  organizationName: 'Muhammad-Talhas', // GitHub org/user
  projectName: 'Physical-AI-and-Humanoid-Robotics', // repo name

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'], // Add at least one extra locale
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Textbook',
      logo: { alt: 'Physical AI & Humanoid Robotics Textbook', src: 'img/logo.svg' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'textbookSidebar', // Make sure this matches sidebars.ts
          position: 'left',
          label: 'Textbook',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Textbook. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
