import { useState } from "react";

/* this.state = {
  name: "",
  profile: {
    name: "",
    city: "",
  },
  hobbies: [],
}; */
const FCExampleOne = () => {
  /* 
  const [profile, setProfile] = useState({ name: "", city: "" });
  const [hobbies, setHobbies] = useState(['music', 'food']); */

  let [uName, setUName] = useState("Dee");
  let [uCity] = useState("Delhi");
  return (
    <div>
      <p>{uName}</p>
      <input
        type="text"
        value={uName}
        onChange={(e) => {
          //uName = e.target.value;
          setUName(e.target.value);
        }}
      />
      <input type="text" value={uCity} disabled />
      <p>Hello from FC</p>
    </div>
  );
};

export default FCExampleOne;
