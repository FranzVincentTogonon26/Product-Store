module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2023: true
  },

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: ["react"],

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ],

  rules: {
    "no-unused-vars": "warn",
    "no-console": "off"
  },

  settings: {
    react: {
      version: "detect"
    }
  }
};