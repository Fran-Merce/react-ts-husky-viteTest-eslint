module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  parser: 'typescript',
  endOfLine: 'crlf',
  importOrder: ['^react$', '^[./]', '^@/(.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ['typescript'],
  parser: 'typescript',
  importOrderStyle: 'keep',
  jsxBracketSameLine: true,
  jsxSingleQuote: true,
  sortImports: true,
};