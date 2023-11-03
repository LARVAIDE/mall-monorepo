const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require('webpack-merge');
const commonConfig = require('../../config/webpack.common');
const commonSharedConfig = require('../../config/shared');

module.exports = merge(commonConfig, {
  mode: process.env.NODE_ENV,
  devServer: {
    port: 8081,
    hot: true,
  },
  output: {
    libraryTarget: 'commonjs',
    filename: 'products.js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './Index': './src/bootstrap.js',
      },
      shared: {
        ...commonSharedConfig,
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
});
