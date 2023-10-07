import { useState } from "react";

export const Contador = () => {
  const [counter, setCounter] = useState(0);

  const actionCounter = (numberParam: number) => {
    setCounter(counter + numberParam);
  };

  return (
    <>
      <h3>
        Contador: <small>{counter}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => actionCounter(1)}>
        +1
      </button>{" "}
      &nbsp;
      <button className="btn btn-primary" onClick={() => actionCounter(-1)}>
        -1
      </button>
    </>
  );
};
