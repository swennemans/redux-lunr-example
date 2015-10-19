import React, {Component} from 'react';
import HighLighter from './HighLighter';
import SearchResultTitle from './SearchResultTitle';
import SearchResultBody from './SearchResultBody';

class SearchResult extends Component {

  static displayName = "SearchResult";
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  render() {
    const {query} = this.props.lunr;
    const renderSearchResults = () => {
      return this.props.lunr.results.map( (result, index) => {
        return (
            <div key={index} className="search-result-item">
                <SearchResultTitle query={query} text={result.title}/>
                <SearchResultBody query={query} text={result.body}/>
            </div>
        )
      })
    };

    return (
        <div>
          {renderSearchResults()}
        </div>
    );
  }
}
export default SearchResult;
