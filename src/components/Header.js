import React, { Component, PropTypes } from 'react';
const {div, h2, p} = React.DOM;

if (process.env.BROWSER) require('../styles/header.less');

class Header extends Component {

  constructor() {
    super();
  }

  render() {
    return (
        <div className="header">
          <div className="header_inner_top">
            <div className="header_text">
              <div className="header_text_title">
                redux-lunr
              </div>
              <div className="header_text_subtext">
                <a href="https://github.com/rackt/redux">Redux</a> middleware for making your stores searchable with <a
                  href="https://github.com/olivernn/lunr.js">Lunr.js</a>
              </div>
            </div>

          </div>
          <div className="header_inner_bottom">
            <div className="header_inner_bottom_nav">
              <div className="nav-item">
                <a href="https://github.com/swennemans/redux-lunr">Code + Documentation</a>
              </div>
              <div className="nav-item">
                <a className="github-button" href="https://github.com/swennemans/redux-lunr" data-icon="octicon-star"
                   data-style="mega" data-count-href="/swennemans/redux-lunr/stargazers"
                   data-count-api="/repos/swennemans/redux-lunr#stargazers_count"
                   data-count-aria-label="# stargazers on GitHub"
                   aria-label="Star swennemans/redux-lunr on GitHub">Star</a>
              </div>
              <div className="nav-item">
                <a className="github-button" href="https://github.com/swennemans/redux-lunr/issues"
                   data-icon="octicon-issue-opened" data-style="mega"
                   data-count-api="/repos/swennemans/redux-lunr#open_issues_count"
                   data-count-aria-label="# issues on GitHub"
                   aria-label="Issue swennemans/redux-lunr on GitHub">Issue</a>
              </div>
              <div className="nav-item">
                <a className="github-button" href="https://github.com/swennemans/redux-lunr-example/fork"
                   data-icon="octicon-repo-forked" data-style="mega"
                   data-count-href="/swennemans/redux-lunr-example/network"
                   data-count-api="/repos/swennemans/redux-lunr-example#forks_count"
                   data-count-aria-label="# forks on GitHub" aria-label="Fork swennemans/redux-lunr-example on GitHub">Fork</a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Header