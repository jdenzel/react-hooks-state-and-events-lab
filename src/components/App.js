import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import React, { useState } from 'react'

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [theme, setTheme] = useState(false);
  const appClass = theme ? "App dark" : "App light";
  const buttonTheme = theme ? "Dark Mode" : "Light Mode";
  
  function toggle() {
    setTheme((theme) => !theme);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggle} >{buttonTheme} </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
