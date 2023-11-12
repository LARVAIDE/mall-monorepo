module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'standard', 'prettier'],
  ignorePatterns: ['**/node_modules/**', '**/dist/**'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'unused-imports', 'prettier', 'jsx-a11y', 'simple-import-sort', 'import'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^@?\\w', '^node:'],
          ['^@mall/application-*', '^@mall/base', '^@mall/domain'],
          ['^@\\/', '^\\.', 'less$', 'css$', 'scss$'],
        ],
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'no-magic-numbers': 'warn',
    'no-sparse-arrays': 'off',
    camelcase: 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-irregular-whitespace': 'off',
    'no-misleading-character-class': 'off',
    'n/no-callback-literal': 'off',
    'no-empty-pattern': 'off',
    'no-case-declarations': 'off',
    'array-callback-return': 'off',
    'no-use-before-define': 'off',
  },
};
