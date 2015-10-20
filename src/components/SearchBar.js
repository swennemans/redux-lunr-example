import React, {Component} from 'react';
import { lunrStartSearch } from 'redux-lunr';
import _debounce from 'lodash.debounce';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.handleSearch = _debounce(this.handleSearch, 150)
  }
  handleSearch = (event) => {
    const query = event.target.value;
    this.props.dispatch(lunrStartSearch(event.target.value + " ", 3))
    //query.length > 1 ? this.props.dispatch(lunrStartSearch(event.target.value + " ", 3)) : null
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
