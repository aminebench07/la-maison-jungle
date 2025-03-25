import Trash from "../assets/trash.svg";
import { addToCart, delFromCart } from "../Utils";
export function CartPlant({ name, price, amount, cart, setCart }) {
  return (
    <div>
      {name} {price}€
      <div>
        <button onClick={() => delFromCart(cart, setCart, name)}>
          {amount === 1 ? <img src={Trash}></img> : <span>-</span>}
        </button>
        x{amount}
        <button onClick={() => addToCart(cart, setCart, name, price)}>+</button>
      </div>
    </div>
  );
}
