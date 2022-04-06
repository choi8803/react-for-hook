import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import useAxios from './hook/useAxios';

const App = () => {
  const {loading, data, error} = useAxios({ url:"http://yts.am/api/v2/list_movies.json"});
  console.log(`Loading: ${loading}\nError: ${error}\nData:${data}`);
  return (
    <div className="App" >
      <h1>Hello</h1>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
