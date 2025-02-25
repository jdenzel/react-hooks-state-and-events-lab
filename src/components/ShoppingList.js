import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, changeCategory] = useState("All");
  function handleChange(e) {
    changeCategory(e.target.value)
  }
  const filteredList = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name ="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>nah
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList
