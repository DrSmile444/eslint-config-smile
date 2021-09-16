module.exports = {
  extends: [
    'prettier',
  ],
  plugins: [
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: [
        '*.html',
      ],
      extends: [
        'prettier',
      ],
      plugins: ['prettier'],
      rules: {
        'prettier/prettier': 'error',
      },
    },
  ],
};
