/* eslint-disable @typescript-eslint/naming-convention */

export default {
  collectCoverageFrom: ['src/**/*.{j,t}s'],
  coveragePathIgnorePatterns: ['(e2e|stories)\\.[jt]sx?$', '/__stories__/', '/node_modules/'],
  moduleNameMapper: { '(.*)\\.js': '$1' },
  preset: 'ts-jest/presets/js-with-ts-esm',
  setupFilesAfterEnv: ['jest-axe/extend-expect'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '/node_modules/(?!(@lit|lit|lit-html|lit-element|webcomponents|@open-wc)/).*/',
  ],
  ...(process.env.npm_lifecycle_event === 'test:e2e'
    ? {
        preset: 'jest-puppeteer',
        testEnvironment: 'jest-environment-puppeteer',
        testMatch: ['**/?(*.)+(e2e).[jt]s?(x)'],
        transform: { '^.+\\.[j|t]s$': 'ts-jest' },
      }
    : {}),
};
