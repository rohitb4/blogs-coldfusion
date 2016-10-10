var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var webpack = require("webpack");

module.exports = {
  entry: ['webpack-dev-server/client?http://0.0.0.0:8180', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ["react-hot","babel?presets[]=es2015"]
      }, {
        test: /\.scss$/,
        loaders: [ 'style', 'css?sourceMap', 'postcss?sourceMap','sass?sourceMap']
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file"
      },{
          test: /\.(ico)$/,
          loader: "static-loader"
      }
    ]
  },
  postcss:function (webpack) {
      return [
          require("postcss-import")({ addDependencyTo: webpack }),
          require("postcss-url")(),
          require("postcss-cssnext")(),
          require("postcss-browser-reporter")(),
          require("postcss-reporter")(),
      ];
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    HTMLWebpackPluginConfig,
    new webpack.optimize.DedupePlugin()
  ]
};
