import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Buttons from './components/Buttons';
import store from "./redux/store";

// store.subscribe(() => console.log(store.getState()));

function App() {
  return (
    <div className="App container">
      <h1 style={{"text-align": "left"}} className="mb-5 mt-3">Counter Redux presents:</h1>
      <Counter/>
      <Buttons/>
    </div>
  );
}

export default App;