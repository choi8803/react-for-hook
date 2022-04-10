import React, {useState, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import useAxios from './hook/useAxios';

const App = () => {
  const {loading, data, error, refetch} = useAxios({ 
    url:"https://yts.mx/api/v2/list_movies.json"
  });

  console.log(`Loading: ${loading}\nError: ${error}\nData:${JSON.stringify(data)}`);
  
  return (
    <div className="App" >
      {loading ? 
        <h1>Loading...</h1> : 
        <div>
            {data.data.data.movies.map((movie) => 
                <h2>{movie.title}</h2>
            )}
        </div>
        }
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
