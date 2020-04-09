module.exports = {
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "impliedStrict": true,
      "classes": true
    }
  },
  "env": {
    "browser": true
  },
  "plugins": [
    "prettier",
    "react-hooks"
  ],
  "rules": {
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "semi": false,
        "singleQuote": true
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
