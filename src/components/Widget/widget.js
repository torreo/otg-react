import React from 'react';
import './widget.css';
import TextWidget from "../TextWidget/textWidget";
import { connect } from 'react-redux';

const Widget = (props) => {
  return (
    <div className="widget" style={{
      left: props.x,
      top: props.y,
      width: props.width,
      height: props.height,
    }}>
      <div style={{
        width: '100%',
        height: '30px',
        backgroundColor: 'red'        
      }}></div>
      <TextWidget {...props.properties} id={props.id} />
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    ...state.widgets[ownProps.widgetId]
  }
}

export default connect(mapStateToProps)(Widget)
