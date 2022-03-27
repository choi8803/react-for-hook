import {useEffect} from 'react';

export const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
      const { clientY } = event;
      if(clientY <= 0){
        onBefore();
      }
    };
    useEffect(() => {
      if(typeof onBefore !== "function"){
        return;
      }
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }, []);
  };
  
  /* Example
  const App = () => {
    const begForLife = () => console.log("Pls dont leave");
    useBeforeLeave(begForLife);
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  };
  */