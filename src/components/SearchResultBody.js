import React, {Component} from 'react';
import { HighLighter } from './HighLighter';

class SearchResultBody extends Component {
  static displayName = "SearchResultBody";
  static propTypes = {};
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="search-result-title" dangerouslySetInnerHTML={ {__html: this.props.highlighter}}/>;
  }
}
export default HighLighter(SearchResultBody);