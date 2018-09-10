var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CSSTreeShakePlugin = require('css-tree-shake-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



module.exports = (() => {
	return {
		output: {
			path: path.resolve(__dirname, './dist'),
			filename: 'index_bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader'
					}
				},
				{
					test: /\.scss$/,
					use: [
						'style-loader',
						'css-loader', // translates CSS into CommonJS
						'sass-loader' // compiles Sass to CSS
					]
				},
				{
					test: /\.(png|jpg|gif|otf|svg)$/,
					use: [
						{
							loader: 'file-loader',
							options: {}
						}
					]
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: 'src/assets/index.html'
			}),
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[id].css'
			}),
			new CSSTreeShakePlugin({
				showInfo: true,
				remove: false
			})/*,
			new BundleAnalyzerPlugin()*/
		]
	};
})();