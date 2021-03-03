module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    semi: [1, "always"],
    quotes: [1, "double"],
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "no-unused-vars": 1,
    "prettier/prettier": 1,
  },
};
