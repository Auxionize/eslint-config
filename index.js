"use strict";

module.exports = {
    extends: 'google',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    installedESLint: true,
    parserOptions: {
        sourceType: "module"
    },
    rules: {
        "indent": ["error", 4, {SwitchCase: 1}],
        "linebreak-style": ["error", "unix"],
        "semi": ["error", "always"],
        "max-len": [1, {code: 120}],
        "no-unused-expressions": [0],
        "new-cap": [0],
        "generator-star-spacing": ["off"],
        "space-before-function-paren": ["off"],
        "no-eq-null": ["off"],
        "eqeqeq": ["off"],
        "one-var": ["off"],
        "quote-props": ["off"],
        "object-curly-spacing": ["off"]
    }
};
