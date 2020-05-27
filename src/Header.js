import React, { createElement } from 'react';

export class Header extends React.Component {
  render() {
    return createElement('h' + this.props.level, null, this.props.children);
  }
};
