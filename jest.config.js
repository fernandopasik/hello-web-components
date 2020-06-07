module.exports = {
  collectCoverageFrom: ['src/**/*.ts'],
  globals: { 'ts-jest': { tsConfig: 'tsconfig.all.json' } },
  transform: { '^.+\\.[j|t]s$': 'ts-jest' },
  transformIgnorePatterns: ['/node_modules/(?!(lit-html|lit-element|webcomponents|@open-wc)/).*/'],
  ...(process.env.npm_lifecycle_event === 'test:e2e'
    ? {
        preset: 'jest-puppeteer',
        testEnvironment: 'jest-environment-puppeteer',
        testMatch: ['**/?(*.)+(e2e).[jt]s?(x)'],
      }
    : {}),
};
