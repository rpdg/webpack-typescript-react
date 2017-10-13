const path = require("path");
const webpack = require('webpack');

const commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
	names: ["common"]
});

module.exports = {
	entry: {
		counter: "./src/counter.tsx",
		ant: "./src/ant.tsx",
	},
	output: {
		filename: "[name].js",
		path: path.join(__dirname , "/dist")
	},

	plugins: [new webpack.optimize.UglifyJsPlugin({
		mangle: {
			except: ['$super', '$', 'exports', 'require']
		}
	})],


	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{test: /\.tsx?$/, loader: "awesome-typescript-loader"},

			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
		]
	},

	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},
};