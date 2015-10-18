export function snippets(state = {
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