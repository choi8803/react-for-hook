import {useEffect, useRef} from 'react';

export const useClick = onClick => {
    const element = useRef();
    // useEffect 안에 function을 넣으면 ComponentDidMount, ComponentDidUpdate가 호출된다.
    useEffect(() => {
      if(element.current){
        element.current.addEventListener("click", onClick);
      }
      // ComponentWillUnmount
      return () => {
        if(element.current){
          element.current.removeEventListener("click", onClick);
        }
      }
    }, []);
    return element;
  };

  /* Example
  const App = () => {
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello);
    return (
      <div className="App">
        <h1 ref={title}>Hello</h1>
      </div>
    );
  };
  */