import { useState } from "react";
import MeraBaccha from "./Child";

const Parent = () => {
  const [counter, setCounter] = useState(0);

  console.log("Parent Re-render");

  return (
    <div>
      <p>{counter}</p>
      <div>
        <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
        <button onClick={() => setCounter((val) => val - 1)}>Decrement</button>
        <MeraBaccha count={10} />
        <MeraBaccha />
        <MeraBaccha count={counter} />
        <MeraBaccha />
        <MeraBaccha />
        <MeraBaccha />
        <MeraBaccha />
        <MeraBaccha />
      </div>
    </div>
  );
};

export default Parent;
