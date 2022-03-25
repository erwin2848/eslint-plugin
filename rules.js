/** @type {{ [key: string]: import('eslint').Rule.RuleModule }} */
exports.rules = {
  'no-const': {
    meta: {
      type: 'suggestion',
      fixable: 'code',
      messages: {
        unexpectedConst: 'Unexpected const, use let instead.',
      },
    },
    create: (ctx) => {
      let sourceCode = ctx.getSourceCode()

      return {
        /** @param {import('estree').VariableDeclaration} node */
        'VariableDeclaration:exit'(node) {
          if (node.kind !== 'const') {
            return
          }

          if (node.loc) {
            let { start } = node.loc
            let end = { ...start, column: start.column + 5 }

            node.loc = { start, end }
          }

          ctx.report({
            node,
            messageId: 'unexpectedConst',
            fix(fixer) {
              let token = sourceCode.getFirstToken(node, { filter: (t) => t.value === 'const' })

              return token ? fixer.replaceText(token, 'let') : null
            },
          })
        },
      }
    },
  },
}
