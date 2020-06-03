import React from 'react';
import Widget from "../Widget/widget";
import { connect } from 'react-redux';

class Canvas extends React.Component {

  isEventInHeader = (e) => {
    let widgets = Object.keys(this.props.widgets).map((key) => {
      return this.props.widgets[key];
    });
    let clickedWidget = widgets.find((w) => {
      return w.x <= e.clientX && (w.width + w.x) >= e.clientX && w.y <= e.clientY && (20 + w.y) >= e.clientY;
    });
    if (clickedWidget) {

    }
  }

  handleMouseMove = (e) => {
    //console.log(e);
  }

  handleMouseUp = (e) => {
    //console.log(e);
  }

  handleResize = (e) => {
    //console.log(e);
  }

  handleMouseDown = (e) => {
    console.log(e);
    if (this.isEventInHeader(e)) {

    }
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
    window.addEventListener('mousedown', this.handleMouseDown);
    window.addEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div style={{
        width: '100%',
        height: '100%'
      }}>
        {Object.keys(this.props.widgets).map((widgetKey) => {
          return (
            <Widget
              key={widgetKey}
              widgetId={widgetKey}
            />
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    widgets: state.widgets
  }
}

export default connect(mapStateToProps)(Canvas);
