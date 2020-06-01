import React from 'react';
import Header from '../Header/header';
import Selector from '../Selector/selector';
import { connect } from 'react-redux';

class TextWidget extends React.Component {

  processTextChange = (evt) => {
    this.props.processTextChange(evt.target.value);
  }

  processLevelChange = (level) => {
    this.props.processLevelChange(level);
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
            <Selector level={this.props.level} processLevelChange={this.processLevelChange} />
          </div>
        </div>
      </div>
    )
  }
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
