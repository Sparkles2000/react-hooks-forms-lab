import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("")
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function filterByCategory(item){
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  }
function filterBySearchInput(item){
  const itemName = item.name.toLowerCase();
  return itemName.includes(searchInput.toLowerCase());
}
  const itemsToDisplay = items
          .filter(filterByCategory)
          .filter(filterBySearchInput);

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
      onCategoryChange={handleCategoryChange}
      searchInput={searchInput}
      setSearchInput={setSearchInput}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id}
          name={item.name} 
          category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
