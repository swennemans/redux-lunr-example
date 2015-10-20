import fs from 'fs';
import path from 'path';
import nested from 'postcss-nested';
import lost from 'lost';
import csswring from 'csswring'

const PROJECT_SRC = path.resolve(__dirname, './src');

const babelrc = fs.readFileSync(path.join('.', '.babelrc'));
let babelLoaderQuery = {};

try {
  babelLoaderQuery = JSON.parse(babelrc);
} catch (err) {
  console.error('Error parsing .babelrc.');
  console.error(err);
}
babelLoaderQuery.plugins = babelLoaderQuery.plugins || [];
babelLoaderQuery.plugins.push('react-transform');
babelLoaderQuery.extra = babelLoaderQuery.extra || {};
babelLoaderQuery.extra['react-transform'] = {
  transforms: [{
    transform: 'react-transform-hmr',
    imports: ['react'],
    locals: ['module']
  }]
};

export default {
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: babelLoaderQuery,
      exclude: path.resolve(__dirname, 'node_modules'),
      include: [
        path.resolve(__dirname),
        PROJECT_SRC
      ]
    },
      //use .less extensions on postcss files for indentation in webstorm
      {test: /\.less$/, loader: 'style-loader!css-loader!postcss'}
    ]
  },
  //resolve: {
  //  alias: {
  //    'redux-router': PROJECT_SRC
  //  },
  //  extensions: ['', '.js']
  //},
  postcss: function() {
    return [nested, csswring, lost];
  }
};