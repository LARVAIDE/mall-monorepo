const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { ModuleFederationPlugin } = webpack.container;
const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('../../config/webpack.common');
const commonSharedConfig = require('../../config/shared');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  output: {
    libraryTarget: 'commonjs',
    filename: 'cart.js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@/': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './Index': './src/bootstrap',
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
