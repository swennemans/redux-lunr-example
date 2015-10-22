import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/';
import {createLunrMiddleware} from 'redux-lunr'

const lunrOptions = {
  index: {
    ref: 'id',
    title: {boost: 10},
    body: {}
  },
  store: {
    existingStore: true,
    reducer: "snippets",
    entity: "docs"
  }
};

const finalCreateStore = compose(
    applyMiddleware(
        createLogger(),
        createLunrMiddleware(lunrOptions))
)(createStore);

export default function configureStore(initialState) {

  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}