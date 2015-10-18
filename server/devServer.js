var path = require('path');
var express = require('express');
var webpack = require('webpack');

import favicon from 'serve-favicon';

var Promise = require('bluebird');
var prepareMD = require('./prepareMD');
var jsonfile = require('jsonfile');
Promise.promisifyAll(jsonfile)

import config from '../webpack.config.clientDev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

/* Set-up server side rendering etc */
import React from 'react'
import {renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router'
import createHistory from 'history/lib/createMemoryHistory';

import { createStore, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import routes from '../src/routes';
import reducers from '../src/reducers/index';
import configureStore from '../src/store/configureStore.js'
import qs from 'query-string';
import serialize from 'serialize-javascript';


var app = express();
app.use(favicon(__dirname + '/public/favicon.ico'))
var compiler = webpack(config);

import {MOUNT_ID} from '../src/constants'


const getMarkup = (docs, renderProps) => {
  const store = configureStore({snippets: {docs}});

  const markup = renderToString(
      <Provider store={store}>
        <RoutingContext {...renderProps} />
      </Provider>
  );

  const initialState = serialize(store.getState());

  return `<!doctype html>
    <html>
      <head>
        <title>Redux React Router – Server rendering Example</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
      </head>
      <body>
        <div id="${MOUNT_ID}">${markup}</div>
        <script>window.__initialState = ${initialState};</script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `;
};

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use((req, res) => {

  const store = configureStore({snippets: {docs: [1, 2, 3]}})

  const query = qs.stringify(req.query);
  const url = req.path + (query.length ? '?' + query : '');

  match({routes, location: url}, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      console.error('Router error:', error);
      res.satus(500).send(error);
    } else if (renderProps) {

      console.log('location is', url);

      //if (url === "/") {

        jsonfile.readFileAsync(path.join(__dirname, 'tmp', 'docs.json'))
            .then((docs) => {
              return docs.filter((doc) => {
                if (doc) return doc;
              });
            }).then((filteredDocs) => {
              res.send(getMarkup(filteredDocs, renderProps));
            })
            .catch((err) => {
              console.error('Error reading .json', err)
            })
      //} else {
      //  res.send(getMarkup({}, renderProps));
      //}


    } else {
      res.status(404).send('Not Found');
    }
  });
});


app.listen(3002, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3002');
});