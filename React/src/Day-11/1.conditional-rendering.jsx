import { useState } from "react";

const ConditionalRenderingV1 = () => {
  const [isActive, setIsActive] = useState(true);
  const [data] = useState("");
  const [formVal] = useState("");

  return (
    <div>
      <button onClick={() => setIsActive((prevState) => !prevState)}>
        Toggle
      </button>
      <p>You are {isActive ? "Active" : "Not Active"}</p>
      {/* <p>
        {" "}
        {userMessage} ? You entered ${userMessage} : Not added anything
      </p>
      <p>{userMessage ? `You entered ${userMessage}` : "Not added anything"}</p> */}
      {data.length ? <p>u hv entered nothing</p> : <p>{data} </p>}

      <h1>You have entered {formVal.length > 0 ? formVal : "nothing"}</h1>

      {isActive && (
        <h1>
          <strong>Hello World</strong>
        </h1>
      )}
    </div>
  );
};

export default ConditionalRenderingV1;
