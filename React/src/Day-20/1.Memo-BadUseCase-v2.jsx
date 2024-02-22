import React, { useEffect, memo } from "react";

// A functional component that renders a list of items
const ItemList = ({ items }) => {
  console.log("Rendering ItemList component...");
  return (
    <ul>
      {items?.data?.map((item) => (
        <li key={item._id}>{item.name}</li>
      ))}
    </ul>
  );
};

const ItemListCached = memo(ItemList);

// A parent component that renders the item list
const ParentComponentV2 = () => {
  const [items, setItems] = React.useState([]);

  useEffect(() => {
    fetch(`https://api.instantwebtools.net/v1/passenger?page=0&size=10`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const onNextAPI = () => {
    setItems((prevState) => {
      return { ...prevState };
    });
  };

  console.log("Data: ", items);

  return (
    <div>
      <button onClick={onNextAPI}>Next</button>
      <ItemListCached items={items} />
    </div>
  );
};

export default ParentComponentV2;
