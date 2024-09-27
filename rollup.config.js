/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
import terser from '@rollup/plugin-terser';

export default {
  input: 'hello-web-components.js',
  output: {
    dir: '.',
    entryFileNames: '[name].min.js',
    format: 'esm',
    sourcemap: true,
  },
  external: /lit/,
  onwarn(warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    warn(warning);
  },
  plugins: [
    terser({
      mangle: {
        module: true,
        properties: true,
      },
    }),
  ],
};
