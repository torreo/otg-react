import React from 'react';
import {connect} from 'react-redux';

const levels = [1,2,3,4,5,6];

class Selector extends React.Component {

  processLevelChange = (evt) => {
    this.props.processLevelChange(Number(evt.target.value));
  }

  setLevel = (value) => {
    if (this.props.level === 6 && value === 1) {
      return;
    }
    if (this.props.level === 1 && value === -1) {
      return;
    }

    this.props.processLevelChange(this.props.level + value);
  };

  onDecreaseFontClick = () => {
    this.setLevel(-1);
  };

  onIncreaseFontClick = () => {
    this.setLevel(1);
  };

  render() {
    return (
      <div>
        <button disabled={this.props.level === 1} onClick={this.onDecreaseFontClick}>-</button>
        <select value={this.props.level} onChange={this.processLevelChange}>
          <>
            {levels.map((number) =>
              <option value={number} key={number}>h{number}</option>
            )}
          </>
        </select>
        <button disabled={this.props.level === 6} onClick={this.onIncreaseFontClick}>+</button>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    level: ownProps.level,
    processLevelChange: ownProps.processLevelChange
  }
}

export default connect(mapStateToProps) (Selector);
