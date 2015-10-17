import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { loadProfiles } from '../actions/profile';
//import { loadDocsIntoIndex, lunrStartSearch, loadStateIntoIndex } from 'redux-lunr'

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
        <div className="myFirstComponent">
          <h1>r</h1>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {snippets: state.snippets}
}

export default connect(mapStateToProps)(App)