const path = require('path')

module.exports = {
  "parser": "babel-eslint",
  "plugins": ["prettier", "react", "jsx-a11y"],
  "env": {
    "browser": true,
    "node": true
  },
  "extends": ["airbnb-base", "plugin:prettier/recommended",  "plugin:react/recommended"],
  "rules": {
    "no-bitwise": ["error", { "allow": ["~"] }],
    "prettier/prettier": "error",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "off",
    "prefer-destructuring": "off",
    "semi": ["error", "never"],
    "eol-last": "off",
    "no-console": "off",
    "import/no-extraneous-dependencies": "off",
    "no-restricted-syntax": "warn",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "warn",
    "react/prop-types": "warn",
    "no-use-before-define": ["error", "nofunc"],
    "react/no-unescaped-entities": ["error", {
      "forbid": [">", "\"", "}"]
    }],
    "import/prefer-default-export": "warn",
    "consistent-return": "warn",
    "linebreak-style": 0
  },
  "settings": {
    "react": {
      "version": "16.8"
    }
  }
}
