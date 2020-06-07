/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/typedef, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
import html from '@rollup/plugin-html';
import resolve from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'hello-world.js',
  output: {
    file: 'hello-world.min.js',
    format: 'esm',
    sourcemap: true,
  },
  external: process.env.TESTS === 'E2E' ? [] : ['lit-element', 'lit-html'],
  onwarn(warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    warn(warning);
  },
  plugins:
    process.env.TESTS === 'E2E'
      ? [resolve(), html(), serve()]
      : [
          minifyHTML(),
          terser({
            warnings: true,
            mangle: {
              module: true,
              properties: true,
            },
          }),
        ],
};
