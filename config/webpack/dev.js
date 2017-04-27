var commonConfig = require('./common.js')
var helpers = require('../helpers')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpackMerge = require('webpack-merge')

 let conf= webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:1234/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
})


module.exports = conf
