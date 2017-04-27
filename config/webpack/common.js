var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var helpers = require('../helpers')
let conf = {
  entry: {
    'polyfills': './src/polyfills.js',
    'vendor': './src/vendor.js',
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
            options: { presets:['env','react'] }
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
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
module.exports = conf
