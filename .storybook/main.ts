/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return, @typescript-eslint/typedef */
module.exports = {
  addons: ['@storybook/addon-docs', '@storybook/addon-controls'],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: 'ts-loader',
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
