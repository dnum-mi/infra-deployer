/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    './.eslintrc-auto-import.json',
    'standard',
  ],
  rules: {
    'comma-dangle': [2, 'always-multiline'],
    'no-irregular-whitespace': 1,
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-ignore': 'allow-with-description' },
    ],
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
}
