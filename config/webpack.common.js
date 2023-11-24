/**
 * 图片转base64
 */
const LimitBase64ToImgTransfSize = 8192;

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'source-map',
  output: {
    devtoolModuleFilenameTemplate: 'webpack://[namespace]/[resource-path]?[loaders]',
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
            target: 'es2015',
          },
        },
      },
    ],
  },
};
