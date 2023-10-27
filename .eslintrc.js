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
          ['^react', '^@?\\w'],
          // Packages
          ['^@?\\w', '^node:'],
          // Custom
          ['^@mall-base\\/(.+)', '^@mall-web\\/(.+)'],
          // Relative & Styles
          ['^@\\/', '^\\.', 'less$', 'css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    // 'no-magic-numbers': 1,
    'no-sparse-arrays': 'off',
    'react/jsx-uses-react': 'off',
    camelcase: 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-irregular-whitespace': 'off',
    'no-misleading-character-class': 'off',
    'n/no-callback-literal': 'off',
    'no-empty-pattern': 'off',
    'no-case-declarations': 'off',
    'array-callback-return': 'off',
  },
};
