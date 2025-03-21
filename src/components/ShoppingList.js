import { plantList } from "../datas/PlantList";
import "../styles/ShoppingList.css";
import { PlantItem } from "./PlantItem";

function ShoppingList() {
  const categories = plantList.reduce((acc, currentPlant) => {
    if (!acc.includes(currentPlant.category)) {
      return acc.concat(currentPlant.category);
    }
    return acc;
  }, []);

  return (
    <div className="lmj-shopping-list">
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map((plant) => (
          <PlantItem
            key={plant.id}
            name={plant.name}
            id={plant.id}
            light={plant.light}
            water={plant.water}
            cover={plant.cover}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
