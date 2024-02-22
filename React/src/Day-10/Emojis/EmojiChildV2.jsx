import { useState } from "react";

const EmojisChildV2 = () => {
  const [data, setData] = useState([
    {
      name: "",
      city: "",
      age: "",
    },
    {
      name: "",
      city: "",
      age: "",
    },
  ]);
  const [emojis] = useState([
    "sad",
    "smile",
    "laugh",
    "confuse",
    "happy",
    "appreciate",
    "support",
    "care",
    "love",
    "anger",
    "sick",
    "mad",
    "play",
    "excited",
  ]);

  const onEmojiClicked = (data) => {
    console.log({ data });
  };
  return (
    <div>
      {emojis.map((item, index) => {
        return (
          <button onClick={() => onEmojiClicked(item)} key={index}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default EmojisChildV2;
