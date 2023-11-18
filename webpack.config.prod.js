const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// eslint-disable-next-line import/extensions
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "production",
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
		new CopyPlugin({
			patterns: [
				{ from: "img", to: "img" },
				{ from: "css", to: "css" },
				{ from: "icon.svg", to: "icon.svg" },
				{ from: "favicon.ico", to: "favicon.ico" },
				{ from: "robots.txt", to: "robots.txt" },
				{ from: "icon.png", to: "icon.png" },
				{ from: "404.html", to: "404.html" },
				{ from: "site.webmanifest", to: "site.webmanifest" },
			],
		}),
	],
});
