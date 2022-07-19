import { useState } from "react";

function CounterDemo(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(0);

  const handleMinusFive = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 5);
  };
  
  const handleMinusOne = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 1);
  };

  const handleAddOne = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 1);
  };
const handleAddFive = () => {
    queueRerenderWithNewCounterValue(previousValue => previousValue + 5);
  };
  const handleReset = () => {
    queueRerenderWithNewCounterValue(0);
  }

  return (
    <>
      <h1>Counter Demo</h1>
      <p>Current value: {counterValueFromCurrentRender}</p>
      <button onClick={handleMinusFive}>-5</button>
      <hr />
      <button onClick={handleMinusOne}>-1</button>
      <hr />
      <button onClick={handleAddOne}>+1</button>
      <hr />
      <button onClick={handleAddFive}>+5</button>
      <hr />
      <button onClick={handleReset}>Reset counter</button>
    </>
  );
}

export default CounterDemo;
