const cfg = {
  output: require("./output"),
  module: require("./module"),
  resolve: require("./resolve")
};

const { normalize, resolve } = require("path");
const absolutePath = relativePath =>
  normalize(resolve(__dirname, relativePath));

module.exports = {
  entry: absolutePath("../../src/js/index.js"),
  output: cfg.output,
  module: cfg.module,
  resolve: cfg.resolve,
  stats: {
    colors: true
  },
  devServer: {
    contentBase: absolutePath("../../public"),
    compress: true,
    port: 9000,
    overlay: true,
    watchContentBase: true,
    watchOptions: {
      poll: true
    }
  },
  devtool: "source-map"
};
