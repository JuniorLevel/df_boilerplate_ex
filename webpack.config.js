const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env) => ({
	mode: env.MODE || 'development',
	entry: path.resolve(__dirname, 'src', 'main.jsx'),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					},
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	resolve: {
		extensions: ['.*', '.js', '.jsx'],
	},
	plugins: [
		env.MODE === 'development' &&
			new HTMLWebpackPlugin({
				template: path.resolve(__dirname, 'public', 'index.html'),
			}),
		new EslintWebpackPlugin({
			extensions: ['js', 'jsx'],
			fix: true,
		}),
		env.MODE === 'development' && new ReactRefreshWebpackPlugin(),
	],
	devtool: env.MODE === 'development' && 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		open: true,
		hot: true,
	},
});
