import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import SearchContainer from './containers/SearchContainer';
import Root from './containers/Root.js'

export default (
    <Route path="/" component={App}>
        <Route path="search" components={SearchContainer} />
        <Route path="root" components={Root} />
    </Route>
);