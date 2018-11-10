// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    node: true,
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ['error', 'never'],
    'vue/html-closing-bracket-spacing': [2, {
      selfClosingTag: 'always'
    }],
    'vue/max-attributes-per-line': 0,
    'semi': [2, 'never'],
    'indent': [2, 2],
    'quotes': [2, 'single'],
    'no-console': 1,
    'prefer-const': 2,
    'comma-spacing': 2,
    'comma-style': 2,
  }
}
