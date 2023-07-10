import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  lang: 'en-GB',
  title: 'Lee Luppi',
  description: 'imre.al',
  markdown: {
    html: true,
    linkify: true,
    typographer: true
  }
});

