module.exports = {
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: 'ts-loader',
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
