import { memo, useState } from "react";

const Greetings = ({ children }) => {
  console.log("Re-Render");
  return (
    <div>
      <h1>Hello Children</h1>
      {children}
    </div>
  );
};

const CachedGreeting = memo(Greetings);

const WelcomeMemo = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <CachedGreeting>
      <p>Counter: {counter} </p>
      <p>Counter2: {counter2} </p>
      <button onClick={() => setCounter((prevState) => prevState + 1)}>
        Increment
      </button>
      <button onClick={() => setCounter((prevState) => prevState - 1)}>
        Decrement
      </button>

      <button onClick={() => setCounter2((prevState) => prevState + 1)}>
        Increment 2
      </button>
      <button onClick={() => setCounter2((prevState) => prevState - 1)}>
        Decrement 2
      </button>
    </CachedGreeting>
  );
};

export default WelcomeMemo;
