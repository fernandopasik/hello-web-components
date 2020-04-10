module.exports = {
  collectCoverageFrom: ['src/**/*.ts'],
  globals: { 'ts-jest': { tsConfig: 'tsconfig.all.json' } },
  transform: { '^.+\\.[j|t]s$': 'ts-jest' },
  transformIgnorePatterns: ['/node_modules/(?!(lit-html|lit-element|webcomponents)/).*/'],
  ...(process.env.TESTS === 'E2E'
    ? { preset: 'jest-puppeteer', testMatch: ['**/?(*.)+(e2e).[jt]s?(x)'] }
    : { testEnvironment: 'jest-environment-jsdom-sixteen' }),
};
