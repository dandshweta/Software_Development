import { useRef, useState } from "react";

export const CVSUC = () => {
  const [search, setSearch] = useState("");

  console.log("Render: ", search);

  const onSubmit = () => {
    console.log("Value is : ", search);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export const CVSUCV2 = () => {
  const inputRef = useRef(null);

  console.log("Render: ");

  const onSubmit = () => {
    //console.log("Value is : ", inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
