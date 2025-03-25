import { useState, useEffect } from "react";
import "../styles/Cart.css";
import { CartPlant } from "./CartPlant";

function Cart({ cart, setCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, currentPlant) => acc + currentPlant.price * currentPlant.amount,
    0
  );

  useEffect(() => {
    document.title = `LMJ: ${total}€ d'achats`;
  }, [total]);

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
        <CartPlant
          cart={cart}
          setCart={setCart}
          key={name}
          amount={amount}
          name={name}
          price={price}
        />
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
