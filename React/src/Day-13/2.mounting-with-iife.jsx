import { useState } from "react";

const MWIIFE = () => {
  const [counter, setCounter] = useState(0);

  if (counter === 0) {
    (() => {
      setCounter((val) => val + 10);
    })();
  }
};

export default MWIIFE;
