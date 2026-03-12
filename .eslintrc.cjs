module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2023: true
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off"
  }
};