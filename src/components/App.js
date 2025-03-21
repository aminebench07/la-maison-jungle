import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import "../styles/App.css"
function App() {
  return (
    <>
      <Banner />
      <div className="lmj-layout-inner">
        <Cart />
        <ShoppingList />
      </div>
      <Footer />
    </>
  );
}

export default App;
