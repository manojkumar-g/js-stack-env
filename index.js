var path = require('path');
var webpack = require('webpack');
var express = require('express');
//var config = require('./webpack.config');
var config = require('./config/webpack/dev');

var app = express();
var compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  hot : true,
  noInfo : true,
  stats: {
      colors: true
    }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, config.output.path+'/index.html'));
});

app.listen(1234, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:1234/');
})
