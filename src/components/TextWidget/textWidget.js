import React from 'react';
import Header from '../Header/header';
import Selector from '../Selector/selector';
import { connect } from 'react-redux';

const TextWidget = (props) => {
  return (
    <div>
        <div className="preview-box">
            <Header level={props.level}>{props.text}</Header>
        </div>

        <div className="form">
        <div className="input-box">
            <input type="text" value={props.text} onChange={props.processTextChange} />
        </div>

        <div className="toolbar">
            <Selector level={props.level} processLevelChange={props.processLevelChange} />
        </div>
        </div>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    level: ownProps.level,
    text: ownProps.text,
    processTextChange: ownProps.processTextChange,
    processLevelChange: ownProps.processLevelChange
  }
}

export default connect(mapStateToProps)(TextWidget);
