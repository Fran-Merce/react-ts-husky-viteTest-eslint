module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  parser: 'typescript',
  endOfLine: 'auto',
  importOrder: ['^react$', '^[./]', '^@/(.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['typescript'],
  parser: 'typescript',
  jsxBracketSameLine: true,
  jsxSingleQuote: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};

