import React, {Component} from 'react';
import SearchBar from '../components/SearchBar';

if (process.env.BROWSER) require('../styles/search.css');


console.log('process', process.env);

class SearchContainer extends Component {

  static displayName = "SearchContainer";
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
        <SearchBar />
    );
  }
}
export default SearchContainer;
