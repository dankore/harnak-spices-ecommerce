module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['import', 'react'],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/babel',
    'prettier/react',
    'prettier/standard',
    'plugin:react/recommended',
  ],
  globals: {
    shallow: true,
    render: true,
    mount: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        trailingComma: 'es5',
        bracketSpacing: true,
        parser: 'flow',
        endOfLine: 'auto',
      },
    ],
    'no-warning-comments': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
