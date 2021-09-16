module.exports = {
  extends: [
    '@smile/eslint-config-smile-base',
    './rules/tslint-imports',
    './rules/typescript',
  ].map(require.resolve),
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {},
};
