const _ = require.resolve;
module.exports = {
  test: /\.jsx?$/,
  loader: "babel-loader",
  options: {
    presets: [
      [
        _("@babel/preset-env"),
        {
          useBuiltIns: "entry",
          targets: {
            chrome: "58",
            ie: "11"
          }
        }
      ],
      _("@babel/preset-react")
    ],
    plugins: [
      _("@babel/plugin-syntax-dynamic-import"),
      _("@babel/plugin-transform-regenerator"),
      _("@babel/plugin-proposal-class-properties")
    ]
  }
};
