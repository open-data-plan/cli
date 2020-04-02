'use strict'

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'function-name-case': null,
  },
  ignoreFiles: ['**/*.(t|j)sx'],
}
