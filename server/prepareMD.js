var marked = require('marked');
var fs = require('fs');
var getPaths = require('./getPaths');
var Promise = require('bluebird');
var shortid = require('shortid');
Promise.promisifyAll(fs);

//Get the file paths;
var paths = getPaths();

var results = paths.map(function(path) {

  return fs
      .readFileAsync(path)
      .then(function(file) {
        return marked.lexer(file.toString())
      })
      .then(function(res) {
        return new Promise(
            (resolve, reject) => {

              for (var i = 0; i < res.length; i++) {
                var obj;

                if (res[i] !== undefined) {

                  if (res[i].type === "heading") {
                    obj = {};
                    obj["title"] = res[i].text;
                  }

                  if (res[i].type !== "heading") {

                    if (obj["body"] === undefined) {

                      if (res[i].type === "code") {
                        obj["body"] = " ```" + res[i].text + "``` ";
                      }
                      else if (res[i].type === 'paragraph') {
                        obj["body"] = res[i].text
                      }

                    } else if (res[i].type !== undefined) {

                      if (res[i].type === "code") {
                        obj["body"] = obj["body"].concat(" ```" + res[i].text + "``` ");
                      }
                      else if (res[i].type === 'paragraph') {
                        obj["body"] = obj["body"].concat(res[i].text)
                      }
                    }
                  }

                  if (i < res.length - 1 && res[i + 1].type === "heading") {
                    obj["id"] = shortid.generate();

                    resolve(obj)
                  }
                } else {
                  reject(res)
                }
              }
            })

      }).catch(function(err) {
        console.log('Encountered err', err);
      })
});

//return array of promises;
module.exports = results;

