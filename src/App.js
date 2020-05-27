import React from 'react';
import './App.css';
import { Header } from './Header';
import { Selector } from './Selector';

class App extends React.Component {

  state = {
    text: 'text',
    level: 1
  };

  levels = [1,2,3,4,5,6];

  onChangeText = (evt) => {
    this.setState({
      text: evt.target.value
    });
  }

  setLevel = (value) => {
    if (this.state.level === 6 && value === 1) {
      return;
    }
    if (this.state.level === 1 && value === -1) {
      return;
    }
    this.setState({
      level: this.state.level + value
    });
  };

  onDecreaseFontClick = () => {
    this.setLevel(-1);
  };

  onIncreaseFontClick = () => {    
    this.setLevel(1);
  };

  onChangeLevel = (level) => {
    this.setState({
      level: Number(level)
    });
  };

  
  render() {
    return (
      <div className="app">
        <div className="preview-box">
          <Header level={this.state.level}>{this.state.text}</Header>
        </div>

        <div className="form">
          <div className="input-box">
            <input type="text" value={this.state.text} onChange={this.onChangeText} />
          </div>

          <div className="toolbar">
            <button onClick={this.onDecreaseFontClick} disabled={this.state.level === 1}>-</button>

            <Selector level={this.state.level} levels={this.levels} onChangeLevelHandler={this.onChangeLevel} />

            <button onClick={this.onIncreaseFontClick} disabled={this.state.level === 6}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
