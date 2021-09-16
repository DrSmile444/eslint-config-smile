module.exports = {
  extends: [
    'airbnb-base',
    ...[
      './rules/prettier',
    ].map(require.resolve),
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
};
