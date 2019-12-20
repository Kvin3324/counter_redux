import {createStore}  from "redux";

const appState = 0;

function buttonState(state = appState, action) {
  if (action.type === "INCREMENT") {
    return state += 1;
  }

  if (action.type === "DECREMENTE") {
    return state -= 1;
  }

  if (action.type === "INCREMENT_WITH_DATA") {
    return state += parseInt(action.value.current.value);
  }

  return state;
}

export default createStore(buttonState);


