import React from 'react';
import './widget.css';
import TextWidget from "../TextWidget/textWidget";
import * as EventTypes from '../../redux/eventTypes';
import { connect } from 'react-redux';

const Widget = (props) => {
  return (
    <div className="widget" style={{
      left: props.x,
      top: props.y,
      width: props.width,
      height: props.height,
    }}>
        <TextWidget {...props.properties} processLevelChange={(level) => props.processLevelChange(props.id, level)} processTextChange={(text) => props.processTextChange(props.id, text)} />
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    ...state.widgets[ownProps.widgetId]
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
        },
      })
    },
    processTextChange: (id, text) => {
      dispatch({
        type: EventTypes.CHANGE_TEXT,
        data: {
          id: id,
          text: text
        },
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widget)
