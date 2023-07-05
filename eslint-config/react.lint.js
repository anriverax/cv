const getTsConfig = require("./typescript.lint");

module.exports = function getReactConfig() {
  const config = getTsConfig();

  config.plugins = [...config.plugins, "@typescript-eslint"];
  config.extends = [...config.extends, "next", "prettier"];

  config.rules = {
    ...config.rules,
    "react/no-deprecated": "warn",
    "react/jsx-boolean-value": "error",
    "react/jsx-child-element-spacing": "error",
    "react/require-default-props": "warn",
    "react/jsx-curly-brace-presence": "error",
    "react/state-in-constructor": ["error", "always"],
    "react/jsx-closing-bracket-location": ["error", "line-aligned"],
    "react/jsx-curly-spacing": ["error", { when: "never", children: true }],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "react/jsx-max-props-per-line": ["error", { when: "multiline" }],
    "react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }]
  };

  return config;
};
