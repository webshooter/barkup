module.exports = {
  extends: "airbnb-base",
  env: {
    browser: true,
    node: true,
  },
  rules: {
    quotes: ["error", "double"],
    indent: ["error", 2],
    "no-unused-vars": "error",
  },
  settings: {
    "import/core-modules": ["electron"],
  },
};
