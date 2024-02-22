import { useState } from "react";

const ToggleViewer = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <p>{toggle ? "Remove from cart" : "Added to cart"}</p>
      <button onClick={() => setToggle((prevState) => !prevState)}>
        Toggle
      </button>
    </div>
  );
};

export default ToggleViewer;
