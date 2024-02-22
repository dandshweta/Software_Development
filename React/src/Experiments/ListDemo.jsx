import { useState } from "react";

const ListWithNoKey = () => {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Ankit",
    },
    {
      id: 2,
      name: "Ankit1",
    },
    {
      id: 21,
      name: "Ankit2",
    },
    {
      id: 3,
      name: "Ankit3",
    },
    {
      id: 4,
      name: "Ankit1",
    },
    {
      id: 5,
      name: "Ankit2",
    },
    {
      id: 6,
      name: "Ankit3",
    },
  ]);

  const onDelete = (id) => {
    setList((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <div>
      {list.map((item) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <p onClick={() => onDelete(item.id)}>{item.name}</p>
        );
      })}
    </div>
  );
};

export default ListWithNoKey;
