const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  test: /\.(scss)$/,
  use: [
    "style-loader", // creates style nodes from JS strings
    "css-loader", // translates CSS into CommonJS
    "sass-loader" // compiles Sass to CSS, using Node Sass by default
  ]
};
