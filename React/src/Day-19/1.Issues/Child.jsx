import { memo } from "react";

// Normal Imports
import { uName as YashKaName, uCity as YashKiCity } from "./utils";

// Default imports
import meraJoManKregaWalaName from "./utils";

const Child = ({ count = 999 }) => {
  console.log("Child Re-Render");

  return (
    <p>
      I am a child: {meraJoManKregaWalaName} {/* {uName} {uCity} */}
    </p>
  );
};

const ChildComponent = memo(Child);
export default ChildComponent;
