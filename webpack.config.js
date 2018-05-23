var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

var entryjs = './src/main.js';
var output_name = 'app.js';
var output_path = path.resolve(__dirname, 'dist');

module.exports = {
	entry: entryjs,
	output: {
		filename: output_name,
		path: output_path,
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: 'vue-style-loader',
				},
			},
		],
	},
	devServer: {
		host: 'localhost',
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			inject: true,
			minify: true,
			title: 'vue-cli',
			template: 'index.ejs',
			filename: 'index.html',
			favicon: 'favicon.ico',
		}),

		// copy custom static assets
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, './static'),
				to: path.resolve(__dirname, './dist/static'),
				ignore: ['.*'],
				force: true,
			},
		]),
	],
};

if (process.env.NODE_ENV === 'production') {
	console.log('产品模式');
	module.exports.mode = 'production';
	module.exports.devtool = 'nosources-source-map';
	module.exports.plugins = (module.exports.plugins || []).concat([
		new WebpackCleanupPlugin(),
	]);
}

if (process.env.NODE_ENV === 'development') {
	console.log('开发模式');
	module.exports.mode = 'development';
	module.exports.devtool = 'eval';
	module.exports.plugins = (module.exports.plugins || []).concat([]);
}
