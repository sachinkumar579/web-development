import { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="main">
      <label htmlFor="State">useState</label>
      {counter}
      <button onClick={() => setCounter(counter + 1)}> Increment</button>
    </div>
  );
};

export default State;
