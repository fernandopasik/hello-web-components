import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  addons: ['@storybook/addon-a11y'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  stories: ['../src/**/*.stories.@(js|ts|mdx)'],
};
export default config;
