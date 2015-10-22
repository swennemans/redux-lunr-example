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
    const {query, results} = this.props.lunr;
    const renderSearchResults = () => {
      return this.props.lunr.results.map((result, index) => {
        return (
            <div key={index} className="search-result-item">
              <SearchResultTitle query={query} text={result.title}/>
              <SearchResultBody query={query} text={result.body}/>
            </div>
        )
      })
    };

    return (
        <div id="search-results">
          {results.length > 0 ?
              renderSearchResults() :
              <div className="search-result-item">
                <h1 className="search-result-title">
                  Welcome
                </h1>
                <div className="search-result-title">
                  <p>This is an example of using redux-lunr. In this example the Redux docs are parsed to different doc
                    snippets saved in the store and thus searched on the client</p>

                  <p><strong>Please note </strong> that this only serves as an example, because the parsing negatively
                    impacts the performance. The markdown is parsed to HTML on every keystroke when delivering the results. In real
                    life case you would probably search your objects in your store. But I thought it would serve as a
                    nice example :)
                  </p>

                  <p>
                    I'm aware of some glitches in the search results (eg. weird text). But don't worry this is because
                    of
                    the parsing.
                  </p>
                  <strong>Enjoy</strong>
                </div>
              </div>
          }
        </div>
    );
  }
}
export default SearchResult;
