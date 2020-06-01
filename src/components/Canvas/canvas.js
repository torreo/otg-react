import React from 'react';
import Widget from "../Widget/widget";
import { connect } from 'react-redux';

const Canvas = (props) => {
  return (
    <>
      {Object.keys(props.widgets).map((widgetKey) => {
        return (
          <Widget
            key={widgetKey}
            widgetId={widgetKey}
          />
        )
      })}
    </>
  )
}

function mapStateToProps(state) {
  return {
    widgets: state.widgets
  }
}

export default connect(mapStateToProps)(Canvas);
