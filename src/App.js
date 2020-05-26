import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="preview-box">
        <h1>Preview text</h1>
      </div>

      <div className="form">
          <div className="input-box">
            <input type="text" value="Preview text" />
          </div>

          <div className="toolbar">
            <button>-</button>

            <select>
              <option>h1</option>
              <option>h2</option>
              <option>h3</option>
              <option>h4</option>
              <option>h5</option>
              <option>h6</option>
            </select>

            <button>+</button>
          </div>
      </div>
    </div>
  );
}

export default App;
