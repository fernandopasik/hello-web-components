import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import storybook from 'eslint-plugin-storybook';
import ymlPlugin from 'eslint-plugin-yml';
import globals from 'globals';
import ts from 'typescript-eslint';

export default ts.config(
  {
    ignores: [
      'coverage/',
      'lib/',
      'hello-web-components.*',
      '_site/',
      'blob-report/',
      'playwright-report/',
      'playwright/.cache/',
      'test-results/',
    ],
  },
  eslint.configs.all,
  ts.configs.strictTypeChecked,
  ts.configs.stylisticTypeChecked,
  importPlugin.flatConfigs.recommended,
  importPlugin.configs.typescript,
  ...storybook.configs['flat/recommended'],
  {
    extends: [ymlPlugin.configs['flat/recommended'], ymlPlugin.configs['flat/prettier']],
    files: ['*.yaml', '*.yml'],
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
      '@typescript-eslint/no-magic-numbers': ['error', { ignore: [0, 1, 2] }],
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'max-lines': ['error', { max: 130, skipBlankLines: true, skipComments: true }],
      'max-lines-per-function': ['error', { max: 30, skipBlankLines: true, skipComments: true }],
      'max-statements': ['error', { max: 35 }],
      'no-ternary': 'off',
      'one-var': 'off',
      'sort-imports': 'off',
    },
    settings: { 'import/resolver': { typescript: {} } },
  },
  {
    files: ['**/*.test.*'],
    rules: {
      '@typescript-eslint/no-floating-promises': 'off',
      'max-lines': 'off',
      'max-lines-per-function': 'off',
    },
  },
  {
    files: ['**/*.stories.*'],
    rules: {
      'storybook/prefer-pascal-case': 'off',
    },
  },
  {
    files: ['**/*.test.*', '*.config.@(js|ts)'],
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
      'no-magic-numbers': 'off',
      'no-undefined': 'off',
    },
  },
  {
    extends: [ts.configs.disableTypeChecked],
    files: ['*.config.js'],
  },
  prettier,
);
