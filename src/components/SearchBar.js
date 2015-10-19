import React, {Component} from 'react';
import { lunrStartSearch } from 'redux-lunr';
import _debounce from 'lodash.debounce';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.handleSearch = _debounce(this.handleSearch, 300)
  }
  handleSearch = (event) => {
    const query = event.target.value;
    query.length > 1 ? this.props.dispatch(lunrStartSearch(event.target.value + " ", 3)) : null
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
