module.exports = {
  rootDir: 'src',
  collectCoverageFrom: ['src/**/*.ts'],
  preset: 'jest-puppeteer',
  testMatch: ['**/?(*.)+(e2e).[jt]s?(x)'],
  transform: { '^.+\\.[t|j]sx?$': 'ts-jest' },
  transformIgnorePatterns: ['/node_modules/(?!(lit-html|lit-element|webcomponents)/).*/'],
  globals: { 'ts-jest': { tsConfig: 'tsconfig.all.json' } },
};
