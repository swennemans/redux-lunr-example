import React, { PropTypes } from 'react'
import { Redirect, Router, Route } from 'react-router';
import routes from './routes';

class Root extends React.Component {

  static displayName = "Root";
  static propTypes = {
    history       : React.PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Router history={this.props.history}>
          {routes}
        </Router>
    );
  }
}
export default Root;
