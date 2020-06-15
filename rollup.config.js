/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/typedef, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
import html from '@rollup/plugin-html';
import resolve from '@rollup/plugin-node-resolve';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';

const isServe = Boolean(process.env.SERVE);

export default {
  input: 'hello-world.js',
  output: {
    dir: '.',
    entryFileNames: '[name].min.[ext]',
    format: 'esm',
    sourcemap: true,
  },
  preserveModules: true,
  external: isServe ? [] : ['lit-element', 'lit-html'],
  onwarn(warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    warn(warning);
  },
  plugins: isServe
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
