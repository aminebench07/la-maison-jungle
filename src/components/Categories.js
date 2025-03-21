import "../styles/Categories.css";
export function Categories({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="lmj-categories">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="lmj-categories-select"
      >
        <option value="">---</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={() => setSelectedCategory("")}>Réinitialiser</button>
    </div>
  );
}
