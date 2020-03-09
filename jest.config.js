module.exports = {
  collectCoverageFrom: ['src/**/*.ts'],
  testEnvironment: 'jest-environment-jsdom-sixteen',
  transform: { '^.+\\.[j|t]s$': 'ts-jest' },
  transformIgnorePatterns: ['/node_modules/(?!(lit-html|lit-element|webcomponents)/).*/'],
  globals: { 'ts-jest': { tsConfig: 'tsconfig.all.json' } },
};
