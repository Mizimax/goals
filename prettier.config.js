module.exports = {
  semi: false,
  printWidth: 100,
  singleQuote: true,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.gql',
      options: {
        parser: 'graphql',
      },
    },
  ],
}