import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";
import "../styles/PlantItem.css";

function onClickCareScale({ scaleValue, careType }) {
  alert(
    `Cette plante requiert ${
      scaleValue === 1 ? "peu" : scaleValue === 2 ? "modérement" : "beaucoup"
    } ${careType === "light" ? "de lumière" : "d'arrosage"}`
  );
}

function CareScale({ scaleValue, careType }) {
  const scaleType = careType === "light" ? Sun : Water;
  return (
    <div>
      {Array.from({ length: scaleValue }).map((_, index) => (
        <img
          onClick={() => onClickCareScale({ scaleValue, careType })}
          src={scaleType}
          alt={careType === "light" ? "Light" : "Water"}
          key={index.toString()}
        />
      ))}
    </div>
  );
}

export function PlantItem({ name, cover, id, light, water }) {
  return (
    <li key={id} className="lmj-plant-item">
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}
