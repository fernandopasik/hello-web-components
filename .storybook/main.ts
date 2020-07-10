/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return, @typescript-eslint/typedef, @typescript-eslint/no-explicit-any */
module.exports = {
  addons: ['@storybook/addon-docs', '@storybook/addon-controls'],
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: 'ts-loader',
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
