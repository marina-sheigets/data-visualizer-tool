const path = require('path');

let bundles = [
	{
		name: 'entry',
		path: './src/entry.ts',
		hash: null,
	},
];
module.exports = {
	entry: bundles.reduce((entry, bundle) => {
		entry[bundle.name] = bundle.path;
		return entry;
	}, {}),
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'),
		chunkFilename: '[name].js',
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		static: [
			{
				directory: __dirname,
			},
			{
				directory: path.join(__dirname, 'dist'),
			},
		],
		open: true,
		port: 8080,
	},
};
