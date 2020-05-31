module.exports = {
  addons: ['@storybook/addon-knobs'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: 'ts-loader',
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
