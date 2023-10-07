import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const actionCounter = (numberParam: number) => {
    setCounter(counter + numberParam);
  };

  return {
    counter,
    actionCounter,
  };
};
