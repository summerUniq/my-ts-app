module.exports = {
  "extends": ['airbnb', 'plugin:prettier/recommended'],
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": 'module',
    "ecmaFeatures": {
      "jsx": true,
    },
  },
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
  },
  "plugins": ["react", "jsx-a11y", "import"],
  "rules": {
    "prettier/prettier": "error",
    "import/no-named-as-default": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx", "ts", "tsx"],
      },
    ],
    "import/no-unresolved": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-plusplus": ["error", {"allowForLoopAfterthoughts": true}],
    "no-unused-expressions": [
      "error",
      {
        "allowShortCircuit": true,
        "allowTernary": true,
      },
    ],
    "no-void": "off",
    "lines-between-class-members": ["error", "always", {"exceptAfterSingleLine": true}],
    "no-console": ["error", {"allow": ["log"]}],
    "one-var": "off",
    "no-new": "off",
    "radix": "off",
    "no-bitwise": "off",
  },
};
