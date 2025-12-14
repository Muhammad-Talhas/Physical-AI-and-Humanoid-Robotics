import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Comprehensive Guide to Robotics, AI, and Simulation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://physical-ai-humanoid-robotics.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  onBrokenLinks: 'warn',

  // Only essential i18n config
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } as Preset.Options,
    ],
  ],

  // Minimal theme config without navbar or footer that could cause issues
  themeConfig: {
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } as Preset.ThemeConfig,
};

export default config;