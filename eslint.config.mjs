// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'always-multiline'],
    'consistent-return': 'error',
    'curly': ['error', 'all'],
    'eqeqeq': ['error', 'smart'],
    'indent': ['error', 2],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'no-redeclare': 'error',
    'no-undef': 'error',
    'no-unused-vars': ['warn'],
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-infix-ops': 'error',
    'space-in-parens': ['error', 'never'],
    'vue/html-indent': ['error', 2],
    'vue/html-self-closing': ['error', { html: { normal: "never", void: "always" } }],
  },
});
