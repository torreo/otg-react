import { createElement } from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
  return createElement('h' + props.level, null, props.children);
};

function mapStateToProps(state, ownProps) {
  return {
    level: ownProps.level
  }
}

export default connect(mapStateToProps) (Header);
