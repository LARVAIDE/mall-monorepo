const { merge } = require('webpack-merge');
const path = require('path');
const commonConfig = require('../../config/webpack.common');

module.exports = merge(commonConfig, {
  devtool: 'source-map',
  devServer: {
    port: 9000,
    hot: true,
  },
  entry: './src/index.ts',
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src/'),
      '@/mall': path.resolve(__dirname, './src/mall/'),
    },
    extensions: ['.ts', '.js'],
  },
});
