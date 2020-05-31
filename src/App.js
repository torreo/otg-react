import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Canvas from './components/Canvas/canvas'
import { store } from './redux/store';

class App extends React.Component {

/*  state = {
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
  };*/
 
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Canvas />
        </div>
      </Provider>
    );
  }
}

export default App;
