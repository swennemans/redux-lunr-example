import React, {Component} from 'react';
import { HighLighter } from './HighLighter';

class SearchResultTitle extends Component {
  static displayName = "SearchResultTitle";
  static propTypes = {};
  constructor(props) {
    super(props);
  }
  render() {
    return <h1 className="search-result-title" dangerouslySetInnerHTML={ {__html: this.props.highlighter}}/>
  }
}
export default HighLighter(SearchResultTitle);
