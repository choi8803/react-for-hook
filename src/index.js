import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  return (
    <div className="App">
      <h1>"Hello"</h1>
      <p>"welcome to Crossfit"</p>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
