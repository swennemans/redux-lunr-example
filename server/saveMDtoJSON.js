var Promise = require('bluebird');
var preparedMD = require('./prepareMD');
var jsonfile = require('jsonfile');
var marked = require('marked');

module.exports = function() {

  Promise.all(preparedMD)
      .then(function(results) {
    //console.log('res is', res);

        var rp = results.forEach( function(res) {
          //console.log('res is', typeof res);
          marked.lexer(res.toString())
        })



    //jsonfile.writeFileSync('./tmp/docs.json', res)
  });
}




Promise.all(preparedMD).then(function(results) {
  //console.log('res is', res);

  var rp  = results.map( function(res) {
    //console.log('res is', typeof res);
    return marked.lexer(res.toString())
  })

  console.log('rp is', rp.length);


  //jsonfile.writeFileSync('./tmp/docs.json', res)
});