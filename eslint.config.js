import css from '@eslint/css';
import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import { configs as storybookConfigs } from 'eslint-plugin-storybook';
import ymlPlugin from 'eslint-plugin-yml';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import { configs as tsConfigs } from 'typescript-eslint';

export default defineConfig([
  {
    ignores: [
      'coverage/',
      'lib/',
      'hello-web-components.*',
      '_site',
      '.jekyll-cache',
      '/blob-report/',
      '/playwright-report/',
      '/playwright/.cache/',
      '/test-results/',
    ],
  },
  eslint.configs.all,
  tsConfigs.strictTypeChecked,
  tsConfigs.stylisticTypeChecked,
  importPlugin.flatConfigs.recommended,
  importPlugin.configs.typescript,
  ...storybookConfigs['flat/recommended'],
  {
    extends: [ymlPlugin.configs['flat/standard'], ymlPlugin.configs['flat/prettier']],
    files: ['*.yaml', '*.yml'],
  },
  {
    ...css.configs.recommended,
    files: ['**/*.css'],
    language: 'css/css',
    plugins: { css },
  },
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.node },
      parserOptions: { project: 'tsconfig.json' },
      sourceType: 'module',
    },
    rules: {
      'max-lines': ['error', { max: 130, skipBlankLines: true, skipComments: true }],
      'max-lines-per-function': ['error', { max: 24, skipBlankLines: true, skipComments: true }],
      'max-statements': ['error', { max: 35 }],
      'no-magic-numbers': ['error', { ignore: [-1, 0, 1, 2] }],
      'no-ternary': 'off',
      'one-var': 'off',
      'sort-imports': 'off',
    },
    settings: { 'import/resolver': { typescript: {} } },
  },
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-magic-numbers': ['error', { ignore: [-1, 0, 1, 2] }],
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    },
  },
  {
    files: ['**/*.stories.*'],
    rules: { 'storybook/prefer-pascal-case': 'off' },
  },
  {
    files: ['**/*.test.*'],
    rules: { '@typescript-eslint/no-floating-promises': 'off' },
  },
  {
    files: ['**/*.test.*', '*.config.@(js|ts)'],
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'no-magic-numbers': 'off',
      'no-undefined': 'off',
    },
  },
  {
    extends: [tsConfigs.disableTypeChecked],
    files: ['*.config.js'],
  },
  prettier,
]);
