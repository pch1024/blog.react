var path = require('path');
var webpack = require('webpack');
var VueLoaderPlugin = require('vue-loader/lib/plugin'); // vue-loader在15之后需要在webpack.config.js中当插件引入

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

var entry = path.resolve(__dirname, './src/main.js');
var output_name = 'js/app.js';
var output_path = path.resolve(__dirname, './dist');
var output_public_path = '/';
var output_css_name = 'css/app.css';

var MECP = new MiniCssExtractPlugin({
  filename: output_css_name,
  chunkFilename: "[id].css"
});

module.exports = {
  entry: entry,
  output: {
    path: output_path,
    filename: output_name,
    publicPath: output_public_path,
  },
  module: {
    rules: [{
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV === 'dev' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(woff2?|eot|ttf|otf|png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "file-loader",
        exclude: /node_modules/,
        options: {
          limit: 10000,
          name: "./media/[name].[ext]?[hash]" // 源文件
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      minify: true,
      title: 'vue',
      template: 'index.ejs',
      favicon: 'favicon.ico'
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, './static'),
      to: path.resolve(__dirname, './dist'),
      ignore: ['.*'],
      force: true
    }])
  ]
}


// 输出到本机生产环境
if (process.env.NODE_ENV === 'deploy') {
  console.log("部署模式\n")
  module.exports.mode = 'production';
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    MECP
  ]);
}

// 输出生产环境的源码
if (process.env.NODE_ENV === 'build') {
  console.log("产品模式\n")
  module.exports.mode = 'production';
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    MECP
  ]);
}

// 输出开发环境的源码
if (process.env.NODE_ENV === 'debug') {
  console.log("测试模式\n")
  module.exports.mode = 'development';
  module.exports.devtool = '#eval-source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    MECP
  ]);
}

// 开发测试
if (process.env.NODE_ENV === 'dev') {
  console.log("开发模式\n")
  module.exports.mode = 'development';
  module.exports.devtool = '#eval-source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
  ]);
}