var Promise = require('bluebird');
var preparedMD = require('./prepareMD');
var jsonfile = require('jsonfile');

module.exports = function() {

  Promise.all(preparedMD).then(function(res) {
    //console.log('res is', res);


    jsonfile.writeFileSync('./tmp/docs.json', res)
  });
}




