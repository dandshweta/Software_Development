import { useEffect, useState } from "react";

const NullVsArray = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  if (!products) {
    return <p>Please wait while we are loading</p>;
  }

  return (
    <div>
      <h1>My Products</h1>
      <ul>
        {products &&
          products.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
      </ul>
    </div>
  );
};

export default NullVsArray;
