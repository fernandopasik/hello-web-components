/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/typedef, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
import html from '@open-wc/rollup-plugin-html';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import serve from 'rollup-plugin-serve';

const isServe = Boolean(process.env.SERVE);

export default {
  input: 'hello-web-components.js',
  output: {
    dir: '.',
    entryFileNames: '[name].min.js',
    format: 'esm',
    sourcemap: true,
  },
  external: isServe ? [] : [/lit/],
  onwarn(warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    warn(warning);
  },
  plugins: isServe
    ? [resolve(), html(), serve()]
    : [
        minifyHTML.default(),
        terser({
          warnings: true,
          mangle: {
            module: true,
            properties: true,
          },
        }),
      ],
};
