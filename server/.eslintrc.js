module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
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
    }]
  }
};
