import { useState } from "react";

export function State() {
  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount(count + 1);
  }

  function decreaseCounter() {
    setCount(count - 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={increaseCounter}>Increment +</button>
      <br />
      <br />
      <button onClick={decreaseCounter}>Decrement -</button>
    </div>
  );
}
