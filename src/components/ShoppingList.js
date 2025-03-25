import { useState } from "react";
import { plantList } from "../datas/PlantList";
import "../styles/ShoppingList.css";
import { Categories } from "./Categories";
import { PlantItem } from "./PlantItem";
import { addToCart } from "../Utils";

function ShoppingList({ cart, setCart }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = plantList.reduce((acc, currentPlant) => {
    if (!acc.includes(currentPlant.category)) {
      return acc.concat(currentPlant.category);
    }
    return acc;
  }, []);

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ul className="lmj-plant-list">
        {plantList.map(
          (plant) =>
            (!selectedCategory || plant.category === selectedCategory) && (
              <div key={plant.id}>
                <PlantItem
                  name={plant.name}
                  price={plant.price}
                  light={plant.light}
                  water={plant.water}
                  cover={plant.cover}
                />
                <button
                  onClick={() =>
                    addToCart(cart, setCart, plant.name, plant.price)
                  }
                >
                  Ajouter
                </button>
              </div>
            )
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
