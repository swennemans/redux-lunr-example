//import { routerStateReducer } from 'redux-router';
import { combineReducers } from 'redux';
import { lunrReducer } from 'redux-lunr';

function snippets(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case 'LOAD_SNIPPETS':
      return Object.assign({}, state, {
        items: action.items
      });
    default:
      return state;
  }
}


function selectedReddit(state = 'reactjs', action) {
  switch (action.type) {
    case 'SELECT_REDDIT':
      return action.reddit;
    default:
      return state;
  }
}

function postsByReddit(state = { }, action) {
  switch (action.type) {
    case 'INVALIDATE_REDDIT':
    case 'RECEIVE_POSTS':
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        [action.reddit]: posts(state[action.reddit], action)
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  snippets,
  postsByReddit,
  selectedReddit,
  lunr: lunrReducer
});

export default rootReducer