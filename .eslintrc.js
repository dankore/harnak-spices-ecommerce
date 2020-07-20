module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  plugins: ["import", "react"],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    allowImportExportEverywhere: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/babel",
    "prettier/react",
    "prettier/standard",
    "plugin:react/recommended",
  ],
  globals: {
    shallow: true,
    render: true,
    mount: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
