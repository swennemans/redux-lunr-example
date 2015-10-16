var git = require('git-promise');


git('clone https://github.com/rackt/redux/')
    .then(function(res) {
      console.log('res is', res);
    }).fail(function(err) {
      console.error(err)
    });