/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/hello-world.ts',
  output: {
    path: `${__dirname}./dist`,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules\/(?!lit-html|lit-element).*/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    quiet: true,
  },
};
