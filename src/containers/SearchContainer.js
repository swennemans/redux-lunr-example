import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

if (process.env.BROWSER) require('../styles/search.less');

class SearchContainer extends Component {

  static displayName = "SearchContainer";
  static propTypes = {};
  constructor(props) {
    super(props);
  }



  render() {
    return (
        <div>
          <SearchBar {...this.props}/>
          <SearchResult {...this.props} />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lunr: state.lunr
  }
}

export default connect(mapStateToProps)(SearchContainer);
