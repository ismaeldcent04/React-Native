import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState<number>(1);

  const increaseBy = (value: number) => {
    setCount(count + value);
  };

  const decreaseBy = (value: number) => {
    setCount(count - value);
  };

  return {
    count,
    increaseBy,
    decreaseBy,
  };
};
