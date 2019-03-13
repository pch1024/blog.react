const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map', // enum
  context: path.resolve(__dirname, '../'),
  entry: { app: path.resolve(__dirname, '../src/main.js') },
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
      favicon: 'webpack/favicon.ico'
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
