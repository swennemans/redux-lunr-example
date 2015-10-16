var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');
var Promise = require('bluebird');
var preparedMD = require('./prepareMD');
var jsonfile = require('jsonfile');
Promise.promisifyAll(jsonfile)

var app = express();
var compiler = webpack(config);

var jsonData = jsonfile.readFileSync(path.join(__dirname, 'tmp', 'docs.json'));
console.log('jsonData is', jsonData);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3002, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3002');
});