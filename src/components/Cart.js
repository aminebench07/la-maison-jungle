import { useState } from "react";
import "../styles/Cart.css";

function Cart() {
  const [cart, setCart] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const monsteraPrice = 8;
  const ivyPrice = 10;
  const flowerPrice = 15;
  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <h2>Panier</h2>
      <div>Monstera : {monsteraPrice}€</div>
      <button onClick={() => setCart(cart + 1)}>Ajouter</button>
      <button onClick={() => setCart(0)}>Vider le panier</button>
      <h3>Total: {monsteraPrice * cart}€</h3>
    </div>
  ) : (
    <div className='lmj-cart-closed'>
      <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
    </div>
  );
}

export default Cart;
