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


module.exports = {
  entry: entry,
  output: {
    path: output_path,
    filename: output_name,
    publicPath: output_public_path,
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "file-loader",
        options: {
          limit: 10000,
          name: "./media/[name].[ext]?[hash]" // 源文件
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "file-loader",
        options: {
          limit: 10000,
          name: "./media/[name].[ext]?[hash]" // 源文件
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "file-loader",
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
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/app.css'
    }),
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

if (process.env.NODE_ENV === 'deploy') {
  console.log("部署模式\n")
  module.exports.mode = 'production';
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([

  ]);
}
if (process.env.NODE_ENV === 'build') {
  console.log("产品模式\n")
  module.exports.mode = 'production';
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([

  ]);
}
if (process.env.NODE_ENV === 'debug') {
  console.log("测试模式\n")
  module.exports.mode = 'development';
  module.exports.devtool = '#eval-source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([

  ]);
}

if (process.env.NODE_ENV === 'dev') {
  console.log("开发模式\n")
  module.exports.mode = 'development';
  module.exports.devtool = '#eval-source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([

  ]);
}
