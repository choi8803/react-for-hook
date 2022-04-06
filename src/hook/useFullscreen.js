import {useRef} from 'react';
// import IU from './Images/IU.jpg';

export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = isFull => {
    if(callback && typeof callback === "function"){
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if(element.current){
      if(element.current.requestFullscreen){
        element.current.requestFullscreen();
      }else if (element.current.mozRequestFullscreen){
        element.current.mozRequestFullscreen();
      }else if (element.current.webkitRequestFullscreen){
        element.current.webkitRequestFullscreen();
      }else if (element.current.msRequestFullscreen){
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    //const checkFullScreen = document.fullscreenElement;
    //if(checkFullScreen){
      if(document.exitFullscreen){
        document.exitFullscreen();
      }else if (element.current.mozExitFullscreen){
        element.current.msExitFullscreen();
      }else if (element.current.webkitExitFullscreen){
        element.current.msExitFullscreen();
      }else if (element.current.msExitFullscreen){
        element.current.msExitFullscreen();
      }
      runCb(false);
    //}
  };
  return {element, triggerFull, exitFull};
};

// const App = () => {
//   const [fullCheck, SetFullCheck] = useState(false);
//   const onFullS = isFull =>{
//     console.log(isFull ? "We are full": "We are small");
//     SetFullCheck(isFull);
//   };
//   const {element, triggerFull, exitFull} = useFullscreen(onFullS);
//   return (
//     <div className="App" style={{ height: "1000vh" }} >
//       <div ref={element}>
//         <img src={IU} alt="IU" />
//         <br/>
//         {fullCheck ? <button onClick={exitFull}>Exit fullscreen</button> : ""}
//       </div>
//       <button onClick={triggerFull}>Make fullscreen</button>
//     </div>
//   );
// };
