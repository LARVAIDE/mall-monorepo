const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    port: 9000,
  },
  entry: './src/index.ts',
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  output: {
    libraryTarget: 'commonjs',
    globalObject: 'this',
    filename: 'domain.js',
    library: 'mallDomain',
    path: path.resolve(__dirname, './dist'),
  },
};
