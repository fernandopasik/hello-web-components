import { defineConfig, devices } from '@sand4rt/experimental-ct-web';

const isCI = Boolean(process.env.CI);

export default defineConfig({
  forbidOnly: isCI,
  fullyParallel: true,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  reporter: 'html',
  retries: isCI ? 2 : 0,
  snapshotDir: './__snapshots__',
  testMatch: 'src/**/*.e2e.ts',
  timeout: 10 * 1000,
  use: {
    ctPort: 3100,
    trace: 'on-first-retry',
  },
  workers: isCI ? 1 : undefined,
});
