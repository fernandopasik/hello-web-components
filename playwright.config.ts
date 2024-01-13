// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig, devices } from '@sand4rt/experimental-ct-web';

export default defineConfig({
  // Glob patterns or regular expressions that match test files.
  testMatch: 'src/**/*.e2e.ts',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
