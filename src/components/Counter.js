import React, {useState} from "react";
import store from "../redux/store";

function Counter() {
  const [data, setData] = useState(
    store.getState()
  )

  store.subscribe(() => setData(store.getState()));
  console.log(store.getState());
  

  return(
    <div className="counter">
      <h1>{data}</h1>
    </div>
  )
}

export default Counter;