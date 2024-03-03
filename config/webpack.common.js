const path = require('path');

/**
 * 图片转base64
 * 1024 * 8
 */
const LimitBase64ToImgTransfSize = 8192;

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, 'src/'),
      '@/mall': path.resolve(__dirname, 'src/mall/'),
    },
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      path: require.resolve('path-browserify'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|svg|png|gif|webp)$/i,
        type: 'asset',
        generator: {
          filename: 'img/[name].[contenthash:8][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: LimitBase64ToImgTransfSize,
          },
        },
      },
      {
        test: /\.ttf$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[ext]',
        },
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'jsx',
            target: 'es2015',
          },
        },
      },
    ],
  },
};
