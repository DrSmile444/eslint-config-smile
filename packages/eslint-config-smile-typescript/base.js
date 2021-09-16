module.exports = {
  extends: [
    '@smile/eslint-config-smile-base',
    'eslint-config-smile-base',
  ].map((name) => {
    try {
      return require.resolve(name);
    } catch (e) {
      return null;
    }
  }).filter(Boolean),
  rules: {},
};
