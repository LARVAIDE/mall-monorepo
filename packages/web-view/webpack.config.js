const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('../../config/webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  output: {
    libraryTarget: 'commonjs',
    filename: 'container.js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: '@mall/web-container',
      remotes: {
        products: 'products@http://localhost:8081/remoteEntry.js',
        cart: 'cart@http://localhost:8082/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
});
