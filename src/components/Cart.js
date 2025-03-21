import { useState } from "react";
import "../styles/Cart.css";
function Cart({ cart, setCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const total = cart.reduce(
    (acc, currentPlant) => acc + currentPlant.price * currentPlant.amount,
    0
  );

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <h2>Panier</h2>

      {cart.map(({ name, price, amount }) => (
        <div key={name}>
          {name} {price}€ x{amount}
        </div>
      ))}
      <h3>Total : {total}€</h3>
      <button onClick={() => setCart([])}>Vider le panier</button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
