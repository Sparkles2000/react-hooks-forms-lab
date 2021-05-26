import React from "react";

function Filter({ onCategoryChange, searchInput, setSearchInput }) {
  function handleSearchInputChange(event){
    const userInput = event.target.value;
    setSearchInput(userInput);
  }
  return (
    <div className="Filter">
      <input type="text"
      name="search"
      placeholder="Search..."
      value={searchInput}
      onChange={handleSearchInputChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
