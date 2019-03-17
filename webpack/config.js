const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map', // enum
  context: path.resolve(__dirname, '../'),
  entry: {
    app: ['@babel/polyfill', path.resolve(__dirname, '../src/main.js')],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js?[hash]',
    chunkFilename: 'js/[name].js?[hash]',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf|png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
        // exclude: /node_modules/,
        options: {
          limit: 10000,
          name: './assets/[name].[ext]?[hash]', // 源文件
        },
      },
    ],
  },
  resolve: {
    alias: {
      // '@ant-design/icons/lib/dist$': 'src/icons.js',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'webpack/index.ejs',
      title: 'Hello React',
      favicon: 'webpack/favicon.ico',
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
};
