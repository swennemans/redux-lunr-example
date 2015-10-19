import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
//import { loadProfiles } from '../actions/profile';
import { loadDocsIntoIndex, lunrStartSearch, loadStateIntoIndex } from 'redux-lunr'

if (process.env.BROWSER) require('../styles/main.css');

class App extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  constructor () {
    super();
  }

  componentDidMount() {
    this.props.dispatch(loadStateIntoIndex())
  }

  render() {
    return (
        <div id="app">
          <Header />
          {this.props.children}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {snippets: state.snippets}
}

export default connect(mapStateToProps)(App)