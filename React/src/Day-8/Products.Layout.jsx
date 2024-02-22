import { useState } from "react";
import Cart from "./Cart.Layout";

const ProductView = () => {
  const [products, setProducts] = useState([]);

  const onAddNewProduct = () => {
    setProducts((prevState) => {
      return [
        ...prevState,
        {
          name: "ABC",
          price: Math.floor(Math.random() * 200) + 1,
        },
      ];
    });
  };

  /*   const onAddNewProduct2 = () => {
    setProducts((prevState) => [
      ...prevState,
      {
        name: "ABC",
        price: Math.floor(Math.random() * 200) + 1,
      },
    ]);
  }; */

  console.log("Products: ", products);
  return (
    <div>
      <button onClick={onAddNewProduct}>Add Product</button>
      <Cart siddhant={products} />
    </div>
  );
};

export default ProductView;
