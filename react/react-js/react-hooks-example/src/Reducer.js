import "./App.css";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1, showText: state.showText };
    case "toggleShowText":
      return { counter: state.counter, showText: !state.showText };
    default:
      return state;
  }
};

function Reducer() {
  const [state, dispatch] = useReducer(reducer, { counter: 0, showText: true });

  console.log("okay");
  return (
    <div className="main">
      <label htmlFor="">useReducer</label>
      <h1>{state.counter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click here
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
}

export default Reducer;
