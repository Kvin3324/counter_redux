import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Buttons from './components/Buttons';
import store from "./redux/store";

// store.subscribe(() => console.log(store.getState()));

function App() {
  return (
    <div className="App">
      <Counter/>
      <Buttons/>
    </div>
  );
}

export default App;