import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Canvas from './components/Canvas/canvas'
import { store } from './redux/store';

class App extends React.Component {
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
