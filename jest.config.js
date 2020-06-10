export default {
  collectCoverageFrom: ['src/**/*.{j,t}s'],
  coveragePathIgnorePatterns: ['(e2e|stories)\\.[jt]sx?$', '/__stories__/', '/node_modules/'],
  globals: { 'ts-jest': { tsConfig: 'tsconfig.all.json' } },
  transform: { '^.+\\.[j|t]s$': 'ts-jest' },
  transformIgnorePatterns: ['/node_modules/(?!(lit-html|lit-element|webcomponents|@open-wc)/).*/'],
  ...(process.env.npm_lifecycle_event === 'test:e2e'
    ? {
        preset: 'jest-puppeteer',
        testMatch: ['**/?(*.)+(e2e).[jt]s?(x)'],
      }
    : {}),
};
