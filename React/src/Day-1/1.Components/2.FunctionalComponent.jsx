import { useState } from "react";
const FCExample1 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);

  const onUpdate = () => {
    setCount1(count1 + 1);
    setCount1((prevState) => prevState + 1);
    setCount2(count2 + 1);
    setCount3(count3 + 1);
    setCount4(count4 + 1);
    setCount5(count5 + 1);
  };

  console.log("Re-render");

  return (
    <>
      <button onClick={onUpdate}>Update UI </button>
      <p>{count1}</p>
      <p>{count2}</p>
      <p>{count3}</p>
      <p>{count4}</p>
      <p>{count5}</p>
    </>
  );
};

export default FCExample1;
