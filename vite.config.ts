import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/hello-web-components.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/u,
    },
  },
});
