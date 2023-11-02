const { merge } = require('webpack-merge');
const path = require('path');
const commonConfig = require('../../config/webpack.common');

module.exports = merge(commonConfig, {
  mode: process.env.NODE_ENV,
  devServer: {
    port: 9000,
  },
  entry: './src/index.ts',
  output: {
    libraryTarget: 'commonjs',
    globalObject: 'this',
    filename: 'domain_[hash8].js',
    library: '@mall/domain',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src/'),
      '@/mall': path.resolve(__dirname, './src/mall/'),
    },
    extensions: ['.ts', '.js'],
  },
});
