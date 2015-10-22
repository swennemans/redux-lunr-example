import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { loadDocsIntoIndex, lunrStartSearch, loadStateIntoIndex } from 'redux-lunr'

if (process.env.BROWSER) require('../styles/main.less');

//const Footer = () =>
//  <footer className="footer">
//    <p className="footer_text">
//      Copyright © <a href="https://twitter.com/swennemanns">Sven Roeterdink</a> 2015. MIT Licensed.
//    </p>
//  </footer>


class App extends Component {
  static propTypes = {
    children: PropTypes.any
  };
  constructor (props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(loadStateIntoIndex())
  }
  render() {
    return (
        <div id="app">
          <Header />
          {this.props.children}
          <Footer/>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {snippets: state.snippets}
}

export default connect(mapStateToProps)(App)