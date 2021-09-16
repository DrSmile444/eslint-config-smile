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
      rules: {
        'operator-linebreak': 'error',
        'no-unneeded-ternary': 'error',
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'array',
          },
        ],
        '@typescript-eslint/consistent-type-definitions': 'error',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
          'off',
          {
            accessibility: 'explicit',
          },
        ],
        indent: 'off',
        'indent-legacy': 'off',
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'semi',
              requireLast: true,
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false,
            },
          },
        ],
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: false,
            },
          },
          {
            selector: 'property',
            format: [
              'strictCamelCase',
              'snake_case',
              'UPPER_CASE',
            ],
          },
        ],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/quotes': [
          'error',
          'single',
        ],
        '@typescript-eslint/semi': [
          'error',
          'always',
        ],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        'arrow-body-style': 'error',
        'arrow-parens': [
          'error',
          'always',
        ],
        'brace-style': [
          'error',
          '1tbs',
        ],
        'comma-dangle': [
          'error',
          'always-multiline',
        ],
        'constructor-super': 'error',
        curly: 'error',
        'dot-notation': 'off',
        'eol-last': 'error',
        eqeqeq: [
          'off',
          'smart',
        ],
        'guard-for-in': 'error',
        'id-blacklist': 'off',
        'id-match': 'off',
        'max-len': [
          'error',
          {
            code: 140,
          },
        ],
        'no-bitwise': 'off',
        'no-caller': 'error',
        'no-console': [
          'error',
          {
            allow: [
              'log',
              'warn',
              'dir',
              'timeLog',
              'assert',
              'clear',
              'count',
              'countReset',
              'group',
              'groupEnd',
              'table',
              'dirxml',
              'error',
              'groupCollapsed',
              'Console',
              'profile',
              'profileEnd',
              'timeStamp',
              'context',
            ],
          },
        ],
        'no-debugger': 'error',
        'no-duplicate-imports': 'error',
        'no-empty': 'off',
        'no-empty-function': 'off',
        'no-eval': 'error',
        'no-fallthrough': 'error',
        'no-new-wrappers': 'error',
        'no-restricted-imports': [
          'error',
          'primeng/primeng',
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': [
          'error',
          {
            hoist: 'all',
          },
        ],
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-underscore-dangle': 'off',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-use-before-define': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'quote-props': [
          'error',
          'as-needed',
        ],
        radix: 'error',
        semi: 'error',
        'space-before-function-paren': 'off',
        'spaced-comment': [
          'error',
          'always',
          {
            markers: [
              '/',
            ],
          },
        ],
        'valid-typeof': 'error',
      },
    },
  ],
};
