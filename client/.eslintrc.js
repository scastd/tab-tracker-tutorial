module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],

  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    quotes: ['warn', 'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'max-len': ['error', {
      code: 100,
      comments: 100
    }],
    'multiline-ternary': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 0
    }],
    'no-console': 'off'
  }
};
