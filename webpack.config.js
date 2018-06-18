const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: ["./src/index.js"],
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader"]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "style.css"
		})
	],
	devServer: {
		contentBase: "./dist",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Headers":
				"Origin, X-Requested-With, Content-Type, Accept"
		}
	}
};
