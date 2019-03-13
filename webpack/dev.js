const path = require('path');

const merge = require('webpack-merge');
const config = require('./config');

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    historyApiFallback: true, // VUE history
    contentBase: 'dist',
    compress: true,
    open: true,
    hot: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
});
