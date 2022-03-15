import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="App">
      <h1>Function Component ({item})</h1>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );
};

class AppUgly extends React.Component {
  state = {
    item: 1
  };

  render() {
    const { item } = this.state;

    return (
      <div className="App">
        <h1>Class Component ({item})</h1>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>decrement</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1
      };
    });
  };
}


ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppUgly/>
  </React.StrictMode>,
  document.getElementById('root')
);
