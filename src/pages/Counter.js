import React, { useState, useEffect } from "react";
import Header from "../partials/Header";
import Loading from "../components/Loading"

import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Variavel Alterada", { counter });
  }, [counter]);

  const handleOnClick = (operador) => {
    const newCounter = operador === "+" ? counter + 1 : counter - 1;

    setCounter(newCounter);
  };

  return (
    <>
      <Loading/>
      <Header title="Counter" />
      <div className="counter">
        <span>{counter}</span>
        <button onClick={() => handleOnClick("+")}>+</button>
        <button onClick={() => handleOnClick("-")}>-</button>
      </div>
    </>
  );
};

export default Counter;
