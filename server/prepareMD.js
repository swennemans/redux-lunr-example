var marked = require('marked');
var fs = require('fs');
var getPaths = require('./getPaths');
var Promise = require('bluebird');
var shortid = require('shortid');
var jsonfile = require('jsonfile');
var path = require('path');
Promise.promisifyAll(fs);

//Get the file paths;
var paths = getPaths();

//module.exports = Promise.all(paths.map(function(path) {
//  return fs.readFileAsync(path);
//}));

module.exports = Promise
        .all(paths.map(function(path) {
          return fs.readFileAsync(path);
        }))
        .then((results) => {
          return results.map((result, index) => {
            return marked.lexer(result.toString())
          })
        }).then((markdown) => {
          var convertedMD = [];
          markdown.forEach((text) => {
            for (var i = 0; i < text.length; i++) {
              var obj;

              if (text[i] !== undefined) {


                if (text[i].type === "heading") {
                  //console.log('heading is', res[i].text);

                  if (text[i].text === "From Backbone") {
                    //console.log(res[i]);

                    console.log('back', text[i + 1].type);
                  }

                  obj = {};
                  obj["title"] = text[i].text;
                }

                else if (text[i].type !== "heading") {

                  if (obj["body"] === undefined) {

                    if (text[i].type === "code") {
                      obj["body"] = "  \n  ```" + text[i].text + "```  \n";
                    }
                    else if (text[i].type === 'paragraph' || text[i].type === 'text') {
                      obj["body"] = text[i].text
                    }
                    else {
                      //console.log('type is', res[i].type, "with text ", res[i]);

                    }

                  }

                  else if (text[i].type !== undefined) {

                    if (text[i].type === "code") {
                      obj["body"] = obj["body"].concat("```" + text[i].text + "```");
                    }
                    else if (text[i].type === 'paragraph' || text[i].type === 'text') {
                      obj["body"] = obj["body"].concat(text[i].text)
                    }
                  }
                }

                //Create snippet of each section.
                if (i < text.length - 1 && (text[i + 1].type === "heading")) {

                  if (obj.title === "From Backbone") {
                    console.log("HELLO!");
                  }


                  obj["id"] = shortid.generate();
                  convertedMD.push(obj);
                }
              } else {
                console.log('error', obj);

                //reject(res)
              }
            }
          })

          //console.log('convertedMD', convertedMD);
          console.log('convertedMD', convertedMD.length);

          return convertedMD;

        })
    .then((md) => {
      jsonfile.writeFileSync(path.join(__dirname, 'tmp', 'docs.json'), md)
    })
    .catch(err => console.error(err));