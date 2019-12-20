import React, {useRef} from "react";
import store from "../redux/store";

function Buttons() {
  const inputRef = useRef(null);

  return(
    <React.Fragment>
      <div className="counter--buttons">
        <button className="btn btn-primary" onClick= {() => store.dispatch({type: "INCREMENT"})}>+</button>
        <button className="btn btn-secondary" onClick= {() => store.dispatch({type: "DECREMENTE"})}>-</button>
      </div>
      <div className="counter--input mt-5">
        <button className="btn btn-primary mr-4" onClick={() => store.dispatch({type: "INCREMENT_WITH_DATA", value: inputRef }) }>Add</button>
        <input type="number" id="counter--input--number" ref={inputRef}></input>
      </div>
    </React.Fragment>
  )
}

export default Buttons