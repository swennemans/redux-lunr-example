import React, {Component} from 'react';
import { lunrStartSearch, lunrResetSearchResults } from 'redux-lunr';
import _debounce from 'lodash.debounce';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.handleSearch = _debounce(this.handleSearch, 150)
  }
  handleSearch = (event) => {
    const query = event.target.value;

    console.log('query is', query);

    query.length > 0 ?
        this.props.dispatch(lunrStartSearch(query, 3)) :
        this.props.dispatch(lunrResetSearchResults())
  };
  render() {
    return (
        <div id="search-bar">
          <div id="search-bar-inner">
            <input type="text" onChange={this.handleSearch} placeholder="search..."/>
          </div>
        </div>
    )
  }
}
