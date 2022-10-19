import { useState } from "react";

function CounterDemo(): JSX.Element {
  const [counter, setCounter] = useState(0);

  const handleMinusFive = () => {
    setCounter(counter - 5);
  };

  const handleMinusOne = () => {
    setCounter(counter - 1);
  };

  const handleAddOne = () => {
    setCounter(counter + 1);
  };
  const handleAddFive = () => {
    setCounter((previousValue) => previousValue + 5);
  };
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <h1>Counter Demo</h1>
      <p>Current value: {counter}</p>
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
