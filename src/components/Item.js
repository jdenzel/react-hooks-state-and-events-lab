import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, updateCart] = useState(false)
  const listName = inCart ? "in-cart" : `""`;
  const buttonName = inCart ? "Remove From Cart" : "Add to Cart";


  function handleClick() {
    updateCart((inCart) => !inCart)
  }

  return (
    <li className={listName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick} >{buttonName}</button>
    </li>
  );
}

export default Item;