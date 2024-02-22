import { useState } from "react";
import Greetings from "./Greetings";
import GreetingsV2 from "./GreetingsV2";

function Homepage() {
  const [name, setName] = useState("Rahul");
  return (
    <div>
      <p>Greetings</p>
      <div>
        <input
          type="text"
          //value={name}
          onChange={(e) => {
            console.log("Event:", e.target.value);
            //setName(e.target.value)
          }}
        />
      </div>
      <Greetings name={name} city="Dehradun" />
      <Greetings name={"Manas"} />
      <Greetings name={"Ajit"} />
    </div>
  );
}

export default Homepage;
