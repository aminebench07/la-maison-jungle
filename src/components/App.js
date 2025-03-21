import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import "../styles/App.css";
import { useState, useEffect } from "react";

function App() {
  const initCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(initCart ? JSON.parse(initCart) : []);
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);
  return (
    <div>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
