import React from "react";
import { useState, useEffect } from "react";

const Time = () => {
  let date = new Date();

  const [state, setState] = useState({
    h: date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
    m: date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
    s: date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(),
    transitionClass: ["hours", "mins"],
  });

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      let transitionClass;

      if (state.h == "00" && state.m == "00") {
        transitionClass = ["hours-transition", "mins-transition"];
      } else if (state.m == "00") {
        transitionClass = ["hours-transition", "mins-transition"];
      } else {
        transitionClass = ["hours", "mins"];
      }

      setState({
        h: date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
        m: date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
        s: date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(),
        transitionClass: transitionClass,
      });
    }, 1000);
  }, []);

  return (
    <div className="container">
      <span className={state.transitionClass[0]}>{state.h}</span>
      <span>:</span>
      <span className={state.transitionClass[1]}>{state.m}</span>
      <span>:</span>
      <span className={"secs-transition"}>{state.s}</span>
    </div>
  );
};

export default Time;
