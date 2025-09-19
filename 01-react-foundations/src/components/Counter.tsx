import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(10);

  return (
    <>
      <h3>
        Contador: <small>{count}</small>
      </h3>
      <div>
        <button onClick={() => setCount((preValue) => preValue + 1)}>+1</button>
        &nbsp;
        <button onClick={() => setCount((prevValue) => prevValue - 1)}>
          -1
        </button>
      </div>
    </>
  );
};
