import axios from "axios";
import { useEffect, useState } from "react";
import WrapperComp from "./WrapperComp";

const WithHOCLoadProducts = () => {
  const [product, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:3000/products").then((data) => {
      console.log(data.data);
      setIsLoading(false);
      setProducts(data.data);
    });
  }, []);

  return (
    <WrapperComp loading={isLoading}>
      <p>Products</p>
      <ul>
        {product.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </WrapperComp>
  );
};

export default WithHOCLoadProducts;
