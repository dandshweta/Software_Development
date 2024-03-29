import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cartMapping, setCartMapping] = useState({});

  useEffect(() => {
    onLoadProducts();
  }, []);

  const onLoadProducts = async () => {
    const result = await axios.get("http://localhost:3000/products");
    if (result.data) {
      setProducts(result.data);
    }
  };

  const onRemoveFromCart = async (productId) => {
    const result = await axios.delete(
      `http://localhost:3000/cart/${productId}`
    );
    if (!result.data) {
      // Show Error message
      toast("No product removed from the cart");
      return;
    }

    toast.success("Product removed from the cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setCartMapping((prevState) => {
      return {
        ...prevState,
        [productId]: !prevState[productId],
      };
    });
  };

  const onAddToCart = async (productId) => {
    const payload = { productId };
    const result = await axios.post("http://localhost:3000/cart", payload);
    if (!result.data) {
      // Show Error message
      toast("No product added to the cart");
      return;
    }

    toast.success("Product added to the cart successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setCartMapping((prevState) => {
      return {
        ...prevState,
        [productId]: !prevState[productId],
      };
    });
  };

  return (
    <div style={{ display: "flex", gap: 12 }}>
      <div>
        <Link to={"/cart"}>View Cart</Link>
        <h1>Products</h1>
        <ul>
          {products.map((item) => {
            return (
              <CardItem
                {...item}
                key={item.id}
                onAdd={onAddToCart}
                onRemove={onRemoveFromCart}
                cartMapping={cartMapping}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
