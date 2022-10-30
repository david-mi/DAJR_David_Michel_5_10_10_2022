const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/pages/home/home.js"),
    photographer: path.resolve(__dirname, "src/pages/photographer/photographer.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets",
          to: "assets"
        },
        {
          from: "./src/data/photographers.json",
          to: "./"
        }
      ]
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      filename: "photographer.html",
      template: path.resolve(__dirname, "src/photographer.html"),
      chunks: ["photographer"]
    })
  ],
  devtool: "source-map",
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    port: 4000
  }
};