var fs = require('fs');
var path = require('path');

module.exports  = function() {

  var reduxDocsPath = path.join(__dirname, 'redux', 'docs/')
  var paths = [];

  var readReduxDir = function(path) {
    var contents = fs.readdirSync(path);
    contents.forEach(function(content) {
      var stat = fs.statSync(path + content);
      if (stat.isFile()) {
        paths.push(path + content)
      } else {
        readReduxDir(path + content + "/")
      }
    })
  };

  readReduxDir(reduxDocsPath)
  return paths;
}




