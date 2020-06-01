import React from 'react';
import Header from '../Header/header';
import Selector from '../Selector/selector';
import { connect } from 'react-redux';
import * as EventTypes from "../../redux/eventTypes";

class TextWidget extends React.Component {

  processTextChange = (evt) => {
    this.props.processTextChange(this.props.id, evt.target.value);
  }

  render() {
    return (
      <div>
        <div className="preview-box">
          <Header level={this.props.level}>{this.props.text}</Header>
        </div>

        <div className="form">
          <div className="input-box">
            <input type="text" value={this.props.text} onChange={this.processTextChange} />
          </div>

          <div className="toolbar">
            <Selector level={this.props.level} id={this.props.id} />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processTextChange: (id, text) => {
      dispatch({
        type: EventTypes.CHANGE_TEXT,
        data: {
          id: id,
          text: text
        }
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(TextWidget);
