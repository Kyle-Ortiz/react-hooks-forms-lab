import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, itemHandler }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [userInput,setUserInput]= useState("");


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearch(event) {
    setUserInput(event.target.value);
  }

  function itemFormSubmit(newItem) {
    // debugger;
    itemHandler(newItem);

  }

  const itemsToDisplay = items
  .filter((item) => selectedCategory === "All" || item.category === selectedCategory
  )
  .filter((item)=> item.name.toLowerCase().includes(userInput.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={itemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={userInput} onSearchChange={handleSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
