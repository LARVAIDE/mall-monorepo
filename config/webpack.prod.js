const { merge } = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const commonConfig = require('../../config/webpack.common');

module.exports = merge(commonConfig, {
  entry: './src/index.ts',
  target: ['web', 'es6'],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  externals: {
    faker: '@faker-js/faker',
  },
  optimization: {
    usedExports: false,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
    chunkIds: 'deterministic',
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      maxSize: 250000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: 'vendors.js',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  cache: {
    type: 'filesystem',
  },
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src/'),
      '@/commodity': path.resolve(__dirname, './src/commodity/'),
    },
    extensions: ['.ts', '.js'],
  },
  plugins: [new CleanWebpackPlugin()],
});
