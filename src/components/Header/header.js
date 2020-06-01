import { createElement } from 'react';
import { connect } from 'react-redux';
import React from 'react';

class Header extends React.Component {
  render() {
    return createElement('h' + this.props.level, null, this.props.children);
  }
}

export default connect() (Header);
