
export const useConfirm = (message = "", onConfirm, onCancel) => {
    if(!onConfirm || typeof onConfirm !== "function"){
      return;
    }
    if(onCancel && typeof onCancel !== "function"){
      return;
    }
    const confirmAction = () => {
      if(window.confirm(message)){
        onConfirm();
      }else{
        onCancel();
      }
    };
    return confirmAction;
  };
  
  /* Example 
  const App = () => {
    const deleteWorld = () => console.log("deleting the world...");
    const rejection = () => console.log("rejection");
    const confirmDelete = useConfirm("Are you sure", deleteWorld, rejection);
    return (
      <div className="App">
        <button onClick={confirmDelete}>Delete the world</button>
      </div>
    );
  };
  */