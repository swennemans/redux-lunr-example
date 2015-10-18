import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div id="search-bar">
          <div id="search-bar-inner">
            <input type="text" placeholder="search..."/>
          </div>
        </div>
    )
  }
}
