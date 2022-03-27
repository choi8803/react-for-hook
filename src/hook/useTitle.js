import {useState, useEffect} from 'react';

export const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);
    return setTitle;
  };
  
  /* Example
  const App = () => {
    const titleUpdater = useTitle("Loading...");
    setTimeout(()=> titleUpdater("Home"), 5000);
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  };
  */