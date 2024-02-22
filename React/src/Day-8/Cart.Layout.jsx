const Cart = (props) => {
  console.log("Inside Cart: ", props);

  let totalPrice = 0;
  for (let i = 0; i < props.siddhant.length; i++) {
    totalPrice += props.siddhant[i].price;
  }

  return (
    <div>
      <p>
        Total Proce of {props.siddhant.length} elements is {totalPrice}
      </p>
    </div>
  );
};

export default Cart;
