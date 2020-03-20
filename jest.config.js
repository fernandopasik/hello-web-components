module.exports = {
  collectCoverageFrom: ['src/**/*.ts'],
  globals: { 'ts-jest': { tsConfig: 'tsconfig.all.json' } },
  testEnvironment: 'jest-environment-jsdom-sixteen',
  transform: { '^.+\\.[j|t]s$': 'ts-jest' },
  transformIgnorePatterns: ['/node_modules/(?!(lit-html|lit-element|webcomponents)/).*/'],
};
