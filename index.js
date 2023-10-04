/**
 * @type {{
 *  rules: { [key: string]: import('eslint').Rule.RuleModule }
 *  configs: { [key: string]: import('eslint').Linter.Config }
 * }}
 */
let plugin

module.exports = plugin = {
  rules: require('./rules').rules,
  configs: {
    'base': {
      'overrides': [
        {
          'files': [ '*.astro' ],
          'parser': 'astro-eslint-parser',
          'parserOptions': {
            'parser': '@typecript-eslint/parser',
            'extraFileExtensions': [ '.astro' ],
          },
        },
      ],
      'parser': '@typescript-eslint/parser',
      'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
      },
      'plugins': [
        '@typescript-eslint',
        '@erwin-kort',
      ],
      'rules': {
        '@erwin-kort/no-const': 'error',
        'indent': [ 'error', 2 ],
        'linebreak-style': [ 'error', 'unix' ],
        'quotes': [ 'error', 'single' ],
        'semi': [ 'error', 'never' ],
        'comma-dangle': [ 'error', 'always-multiline' ],
        'space-before-function-paren': [ 'error', { 'named': 'never' } ],
        'curly': 'error',
        'arrow-parens': 'error',
        'brace-style': 'error',
        'func-call-spacing': 'error',
        'space-before-blocks': 'error',
        'no-multi-spaces': 'error',
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        'no-multiple-empty-lines': [ 'error', { 'max': 1, 'maxEOF': 1, 'maxBOF': 0 } ],
        'object-curly-spacing': [ 'error', 'always' ],
        'no-trailing-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'key-spacing': 'error',
        'array-bracket-spacing': [ 'error', 'always' ],
        'comma-spacing': 'error',
        'new-parens': 'error',
        'padded-blocks': [ 'error', 'never' ],
      },
    },
  },
}
