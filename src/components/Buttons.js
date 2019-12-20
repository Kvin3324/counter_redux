import React, {useRef} from "react";
import store from "../redux/store";

function Buttons() {
  const inputRefAdd = useRef(null);
  const inputRefRemove = useRef(null);

  return(
    <React.Fragment>
      <div className="counter--buttons">
        <button className="btn btn-primary" onClick= {() => store.dispatch({type: "INCREMENT"})}>+</button>
        <button className="btn btn-danger" onClick= {() => store.dispatch({type: "DECREMENTE"})}>-</button>
      </div>
      <div className="counter--input mt-5">
        <div className="counter--input--increment mb-5">
          <button className="btn btn-primary mr-4" onClick={() => store.dispatch({type: "INCREMENT_WITH_DATA", value: inputRefAdd }) }>Add</button>
          <input type="number" id="counter--input--number" ref={inputRefAdd}></input>
        </div>
        <div className="counter--input--decremente ml-4">
          <button className="btn btn-danger mr-4" onClick={() => store.dispatch({type: "DECREMENTE_WITH_DATA", value: inputRefRemove }) }>Remove</button>
          <input type="number" id="counter--input--number" ref={inputRefRemove}></input>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Buttons