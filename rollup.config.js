import minifyHTML from '@lit-labs/rollup-plugin-minify-html-literals';
import terser from '@rollup/plugin-terser';

export default {
  external: /lit/u,
  input: 'hello-web-components.js',
  onwarn(warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    warn(warning);
  },
  output: {
    dir: '.',
    entryFileNames: '[name].min.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    minifyHTML(),
    terser({
      mangle: {
        module: true,
        properties: true,
      },
    }),
  ],
};
