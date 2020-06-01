import React from 'react';
import {connect} from 'react-redux';

const levels = [1,2,3,4,5,6];

const Selector = (props) => {
  return (
      <div>
        <button>-</button>
        <select value={props.level} onChange={(evt) => props.processLevelChange(evt.target.value)}>
          <>
            {levels.map((number) =>
              <option value={number} key={number}>h{number}</option>
            )}
          </>
        </select>
        <button>+</button>
      </div>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    level: ownProps.level,
    processLevelChange: ownProps.processLevelChange
  }
}

export default connect(mapStateToProps) (Selector);
