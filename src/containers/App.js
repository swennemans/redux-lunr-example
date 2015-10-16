import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { loadProfiles } from '../actions/profile';
import { loadDocsIntoIndex, lunrStartSearch, loadStateIntoIndex } from 'redux-lunr'

class App extends Component {

  componentDidMount() {
  }

  render() {
    console.log('this.props', this.props);
    return (
        <div className="myFirsComponent">
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {profile: state.profiles}
}

export default connect(mapStateToProps)(App)