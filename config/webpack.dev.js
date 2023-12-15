const { merge } = require('webpack-merge');
const commonConfig = require('../../config/webpack.common');

module.exports = merge(commonConfig, {
  devtool: 'source-map',
  devServer: {
    port: 9000,
    hot: true,
  },
  entry: './src/index.ts',
});
