/* eslint-disable @typescript-eslint/naming-convention */

export default {
  collectCoverageFrom: ['src/**/*.{j,t}s'],
  coveragePathIgnorePatterns: ['(e2e|stories)\\.[jt]sx?$', '/__stories__/', '/node_modules/'],
  moduleNameMapper: { '^(\\.{1,2}/.*)\\.js$': '$1' },
  preset: 'ts-jest/presets/js-with-ts-esm',
  setupFilesAfterEnv: ['jest-axe/extend-expect'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '/node_modules/(?!(@lit|lit|lit-html|lit-element|webcomponents|@open-wc)/).*/',
  ],
};
