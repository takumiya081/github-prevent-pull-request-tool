const OFF = 'off';
const ERROR = 'error';

module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 10,
  },
  extends: ['airbnb-base', 'prettier'],
  rules: {
    // no default export
    'import/prefer-default-export': OFF,
    'import/no-default-export': ERROR,
    'import/no-deprecated': ERROR,
  },
};
