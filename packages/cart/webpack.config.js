const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { ModuleFederationPlugin } = webpack.container;
const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('../../config/webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  output: {
    libraryTarget: 'commonjs',
    filename: 'cart_[hash8].js',
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
        faker: {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
});
