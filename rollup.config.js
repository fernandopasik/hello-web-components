import { terser } from 'rollup-plugin-terser';

export default {
  input: 'hello-world.js',
  output: {
    file: 'hello-world.min.js',
    format: 'esm',
    sourcemap: true,
  },
  external: ['lit-element', 'lit-html'],
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/typedef
  onwarn(warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    warn(warning);
  },
  plugins: [
    terser({
      warnings: true,
      mangle: {
        module: true,
        properties: true,
      },
    }),
  ],
};
