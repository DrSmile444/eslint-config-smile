module.exports = {
  overrides: [
    {
      files: [
        '*.ts',
      ],
      parserOptions: {
        project: [
          'tsconfig.base.json',
          'tsconfig.json',
        ],
        createDefaultProgram: true,
      },
      plugins: [
        '@typescript-eslint/tslint',
      ],
      rules: {
        '@typescript-eslint/tslint/config': [
          'error',
          {
            rules: {
              'ordered-imports': {
                options: {
                  'grouped-imports': true,
                  groups: [
                    {
                      name: 'internal node',
                      match: '^(fs|node|child_process|path)',
                      order: 0,
                    },
                    {
                      name: 'relative imports',
                      match: '^\\.',
                      order: 60,
                    },
                    {
                      name: 'other npm imports',
                      match: '',
                      order: 10,
                    },
                  ],
                },
              },
              'import-spacing': true,
              'no-restricted-globals': [
                true,
                'name',
                'length',
                'event',
                'isNaN',
                'isFinite',
              ],
              whitespace: [
                true,
                'check-branch',
                'check-decl',
                'check-operator',
                'check-separator',
                'check-type',
              ],
            },
          },
        ],
      },
    },
  ],
};
