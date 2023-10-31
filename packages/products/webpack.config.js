const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
    hot: true,
  },
  output: {
    libraryTarget: 'commonjs',
    filename: 'products_[hash8].js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './Index': './src/bootstrap.js',
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
};
