import React, { Component, useState } from "react";

function Form({ name, label }) {
  const [state, setState] = useState("");
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={state}
        name={name}
        onChange={(e) => setState(e.target.value)}
      />
      {state}
    </div>
  );
}

export default Form;
