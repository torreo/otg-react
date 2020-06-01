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
        <TextWidget {...props.properties} processLevelChange={() => props.processLevelChange(props.id)} processTextChange={() => props.processTextChange(props.id)} />
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
    processLevelChange: (id) => {
      dispatch({
        type: EventTypes.CHANGE_LEVEL,
        data: {
          id: id
        },
      })
    },
    processTextChange: (id) => {
      dispatch({
        type: EventTypes.CHANGE_TEXT,
        data: {
          id: id
        },
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Widget)
