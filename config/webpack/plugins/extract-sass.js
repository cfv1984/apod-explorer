const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = new ExtractTextPlugin({
    filename : (getPath) =>
    {
        console.log("GetPath", getPath("../css/[name].css").replace("css/js", "css"));
        return getPath("../css/[name].css").replace("css/js", "css");
    },
    allChunks: true
});