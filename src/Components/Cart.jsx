import { useContext } from "react";
import { CartContext } from "../context/Cart";

function Cart() {
  const cart = useContext(CartContext);

  const total = cart.item.reduce((a, b) => a + b.price, 0);
  
  return (
    <div>
      <h1>cart</h1>
      {cart &&
        cart.item.map((item) => (
          <li>
            {item.name}-${item.price}
          </li>
        ))}

      <h5>total bill : ${total}</h5>
    </div>
  );
}

export default Cart;
