var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var helpers = require('../helpers')
let conf = {
  entry: {
    'vendor': ['./src/vendor.js','./src/polyfills.js'],
    'app': './src/index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.styl']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: [
          {
            loader: 'babel-loader',
            options: {
              presets:[
                ["env", {"modules": false}],
                "react"],
            plugins: [
              "react-hot-loader/babel"]
            }
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',

          },
        ],
    },
    {
        test: /\.html$/,
        loader: 'html-loader'

      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
module.exports = conf
