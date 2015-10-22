import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import SearchContainer from './containers/SearchContainer';
import Root from './containers/Root.js'

export default (
    <Route component={App}>
        <Route path="/" component={SearchContainer} />
        <Route path="root" component={Root} />
    </Route>
);