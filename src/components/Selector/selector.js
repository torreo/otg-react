import React from 'react';
import {connect} from 'react-redux';
import * as EventTypes from "../../redux/eventTypes";

const levels = [1,2,3,4,5,6];

class Selector extends React.Component {

  processLevelChange = (evt) => {
    this.props.processLevelChange(this.props.id, Number(evt.target.value));
  }

  setLevel = (value) => {
    if (this.props.level === 6 && value === 1) {
      return;
    }
    if (this.props.level === 1 && value === -1) {
      return;
    }

    this.props.processLevelChange(this.props.id, this.props.level + value);
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

const mapDispatchToProps = (dispatch) => {
  return {
    processLevelChange: (id, level) => {
      dispatch({
        type: EventTypes.CHANGE_LEVEL,
        data: {
          id: id,
          level: level
        }
      })
    }
  }
}

export default connect(null, mapDispatchToProps) (Selector);
