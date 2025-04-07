import Trash from "../assets/trash.svg";
import { addToCart, delFromCart } from "../Utils";
import "../styles/CartPlant.css";
export function CartPlant({ name, price, amount, cart, setCart }) {
  return (
    <div>
      {name} {price}€
      <div className="lmj-amount-cart-plant">
        <button
          className="lmj-button-cart-plant"
          onClick={() => delFromCart(cart, setCart, name)}
        >
          {amount === 1 ? <img className="trash-icon"src={Trash}></img> : <span>-</span>}
        </button>
        x{amount}
        <button
          className="lmj-button-cart-plant"
          onClick={() => addToCart(cart, setCart, name, price)}
        >
          +
        </button>
      </div>
    </div>
  );
}
