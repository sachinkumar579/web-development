import React, { useState } from "react";

function Display(props) {
  const [arr, setArr] = useState(props.arr);

  return arr.map((a) => <li key={a}>{a}</li>);
}

export default Display;
