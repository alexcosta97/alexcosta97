module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import', 'react-refresh'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommnded',
    'plugin:unicorn/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'no-var': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-deplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-named-as-default': 'warn',
    'unicorn/prefer-module': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-unused-properties': 'warn',
    'unicorn/prefer-string-replace-all': 'warn',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/perfer-at': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/filename-case': ['error', { case: 'camelCase' }],
    'unicorn/prevent-abbreviations': ['error', { allowList: {}, ignore: [/^env.d$/] }],
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    'jsx-a11y/no-autofocus': 'off',
    'react-refresh/only-export-components': 'error'
  }
}
