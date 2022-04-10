import {useState, useEffect} from 'react';
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });

    const [trigger, setTrigger] = useState(0);
    const refetch = () => {
        setState({
            ...state,
            loading: true
        });
        setTrigger(Date.now());
    }

    useEffect(() => {
        if(!opts.url){
            return;
        }
        axiosInstance(opts).then(data => {
            setState({  
                ...state,
                loading: false,
                data: data
            });
        }).catch(error => {
            setState({ ...state, loading: false, error })
        });
    }, [trigger]);
    return {...state, refetch};
};

export default useAxios;



// const App = () => {
//     const {loading, data, error, refetch} = useAxios({ 
//       url:"https://yts.mx/api/v2/list_movies.json"
//     });
  
//     console.log(`Loading: ${loading}\nError: ${error}\nData:${JSON.stringify(data)}`);
    
//     return (
//       <div className="App" >
//         {loading ? 
//           <h1>Loading...</h1> : 
//           <div>
//               {data.data.data.movies.map((movie) => 
//                   <h2>{movie.title}</h2>
//               )}
//           </div>
//           }
//       </div>
//     );
//   };