import React, { Component, PropTypes } from 'react';

if (process.env.BROWSER) require('../styles/header.css');

class Header extends Component {

  constructor () {
    super();
  }

  //componentDidMount() {
  //  const {dispatch} = this.props;
  //  dispatch(loadStateIntoIndex())
  //}

  render() {
    return (
        <div id="header">
          <div className="header-icon right">
            <i className="fa fa-github"></i>
          </div>
        </div>
    );
  }
}

export default Header