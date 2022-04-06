import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div className="App" style={{height:"1000vh"}}>
      <img src='https://static7.depositphotos.com/1001651/762/i/950/depositphotos_7620905-stock-photo-big-and-small-apples-on.jpg' alt="IU" />
      <button>Make fullscreen</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
