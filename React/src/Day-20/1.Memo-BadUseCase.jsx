import React, { useEffect, memo } from "react";

// A functional component that renders a list of items
const ItemList = ({ items }) => {
  console.log("Rendering ItemList component...");
  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>{item.name}</li>
      ))}
    </ul>
  );
};

const arePropsEqual = (prevProps, nextProps) => {
  const isEqual = (obj1, obj2) => {
    if (typeof obj1 !== "object" || typeof obj2 !== "object") {
      return obj1 === obj2;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let key of keys1) {
      if (!isEqual(obj1[key], obj2[key])) {
        return false;
      }
    }

    return true;
  };

  return isEqual(prevProps.data, nextProps.data);
};
const ItemListCached = memo(ItemList);

// A parent component that renders the item list
const ParentComponent = () => {
  const [items, setItems] = React.useState([]);
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    fetch(`https://api.instantwebtools.net/v1/passenger?page=0&size=10`)
      .then((response) => response.json())
      .then((data) => setItems(data.data));
  }, []);

  const onNextAPI = () => {
    setPage((prevState) => prevState + 1);

    /* fetch(`https://api.instantwebtools.net/v1/passenger?page=0&size=10`)
      .then((response) => response.json())
      .then((data) => setItems(data.data)); */
  };

  console.log("Data: ", items);

  return (
    <div>
      <button onClick={onNextAPI}>Next</button>
      <ItemListCached items={items} />
    </div>
  );
};

export default ParentComponent;
