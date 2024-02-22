import { useState } from "react";

const ListWithKey = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const onDeleteItem = (id) => {
    setItems((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => onDeleteItem(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

const ListWithoutKey = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const onDeleteItem = (id) => {
    setItems((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <ul>
      {items.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <li onClick={() => onDeleteItem(item.id)}>{item.name}</li>
      ))}
    </ul>
  );
};

const ListWithWithOutFlick = () => {
  return (
    <div>
      <h2>List with Key Prop:</h2>
      <ListWithKey />

      <h2>List without Key Prop:</h2>
      <ListWithoutKey />
    </div>
  );
};

export default ListWithWithOutFlick;
