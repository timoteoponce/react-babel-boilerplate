var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',

  entry: __dirname + "/app/main.jsx",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules!postcss'
      }
    ]
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      { from: __dirname + "/static", to: 'public/static' },
    ])
  ],
  resolve: {
    extensions: ['', '.jsx', '.js']
  },

  devServer: {
    colors: true,
    historyApiFallback: true,
    port: process.env.PORT||9090,
    inline: true,
    hot: true,
    progress: true,
    stats: 'errors-only',
    proxy: {
      "*": "http://localhost:8080"
    },
    stats: { colors: true }
  }
}
