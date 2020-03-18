/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/typedef, @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
module.exports = (api) => ({
  presets: [
    [
      '@babel/preset-env',
      !api.env('test')
        ? {}
        : {
            targets: {
              node: 'current',
            },
          },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
  ],
});
