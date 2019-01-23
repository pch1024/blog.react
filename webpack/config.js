const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: path.resolve(__dirname, '../src/main.js'),
	},
	output: {
		filename: 'js/app.js',
		path: path.resolve(__dirname, '../dist'),
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.(woff2?|eot|ttf|otf|png|jpe?g|gif|svg|mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'file-loader',
				exclude: /node_modules/,
				options: {
					limit: 10000,
					name: './assets/[name].[ext]?[hash]', // 源文件
				},
			},
		],
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					filename: 'js/vendors.js',
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
				},
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src'),
		},
		extensions: ['*', '.js', '.vue', '.json'],
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			hash: true,
			inject: true,
			minify: true,
			title: 'PCH1024',
			template: 'index.ejs',
			favicon: 'favicon.ico',
		}),
	],
};
