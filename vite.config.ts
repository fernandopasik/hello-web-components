import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/hello-web-components.ts',
      formats: ['es'],
    },
    rolldownOptions: {
      external: /^lit/u,
    },
  },
});
