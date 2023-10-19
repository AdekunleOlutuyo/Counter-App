import React from "react";
import useCounter from "./useCounter";
import SvgComponent from "./SvgComponent";

const CounterPage = () => {
  const { count, increment, decrement, reset, setValue } = useCounter();

  const handleSetValue = () => {
    const value = parseInt(prompt("Enter a value:"));
    if (!isNaN(value)) {
      setValue(value);
    }
  };

  return (
    <div className="container">
      <SvgComponent />
      <div className="counter-container">
        <h1>{count}</h1>
        <div className="button-container">
          <button className="buttons" id="button-1" onClick={increment}>
            +
          </button>
          <button className="buttons" id="button-2" onClick={reset}>
            &#8634;
          </button>
          <button className="buttons" id="button-3" onClick={decrement}>
            -
          </button>
        </div>
        <div>
          <button className="set-value" onClick={handleSetValue}>
            Set Value
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
