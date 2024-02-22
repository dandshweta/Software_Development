import { useState } from "react";

const DynamicHello = () => {
  const [hello, setHello] = useState([]);
  const [totalHello, setTotalHello] = useState("");

  const onInputChange = (e) => {
    const { value } = e.target;
    setTotalHello(value);

    const result = [];
    for (let i = 0; i < value; i++) {
      result.push("hello");
    }
    setHello(result);
  };

  return (
    <div>
      <input type="text" value={totalHello} onChange={onInputChange} />
    </div>
  );
};
