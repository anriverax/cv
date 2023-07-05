const getBaseConifg = require("./base.lint");

module.exports = function getTsConfig() {
  const config = getBaseConifg();

  config.parser = "@typescript-eslint/parser";
  config.parserOptions = {
    ...config.parserOptions,
    tsconfigRootDir: __dirname,
    project: ["../tsconfig.json"],
    ecmaFeatures: {
      jsx: true
    }
  };
  config.plugins = [...config.plugins, "@typescript-eslint"];
  config.extends = [
    ...config.extends,
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ];
  config.rules = {
    ...config.rules,
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: false }],
    "@typescript-eslint/no-invalid-this": ["error"],
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false
      }
    ],
    "@next/next/no-html-link-for-pages": "off"
  };

  config.settings = {
    ...config.settings,
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
      moduleDirectory: ["node_modules", "src/"]
    },
    "import/resolver": {
      typescript: {}
    }
  };

  return config;
};
