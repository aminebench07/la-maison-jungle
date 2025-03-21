import { useState } from "react";
import { plantList } from "../datas/PlantList";
import "../styles/ShoppingList.css";
import { Categories } from "./Categories";
import { PlantItem } from "./PlantItem";

function ShoppingList({ cart, setCart }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = plantList.reduce((acc, currentPlant) => {
    if (!acc.includes(currentPlant.category)) {
      return acc.concat(currentPlant.category);
    }
    return acc;
  }, []);

  function addToCart(plantName, plantPrice) {
    const plantAdded = cart.find((article) => article.name === plantName);
    if (plantAdded) {
      const cartWithoutPlantAdded = cart.filter(
        (article) => article.name !== plantName
      );
      setCart([
        ...cartWithoutPlantAdded,
        { name: plantName, price: plantPrice, amount: plantAdded.amount + 1 },
      ]);
    } else {
      setCart(cart.concat([{ name: plantName, price: plantPrice, amount: 1 }]));
    }
  }

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
                <button onClick={() => addToCart(plant.name, plant.price)}>
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
