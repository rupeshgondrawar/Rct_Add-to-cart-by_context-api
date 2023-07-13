import { useContext } from "react";
import { CartContext } from "../context/Cart";

function Item(props) {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      <p>{props.name}</p>
      <h3>price : ${props.price}</h3>
      <button
        onClick={() =>
          cart.setItem([
            ...cart.item,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add to cart
      </button>
    </div>
  );
}

export default Item;
