import React                from 'react';
import {render}             from 'react-dom';
import Root                 from './root';
import {Provider}           from 'react-redux'
import configureStore       from './store/configureStore';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const target = document.getElementById('root');
const store = configureStore(window.__INITIAL_STATE__);

const node = (
    <Provider store={store}>
      <Root history={createBrowserHistory()}/>
    </Provider>
);

render(node, target);