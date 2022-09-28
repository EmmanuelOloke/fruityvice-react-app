import React, { useState } from 'react';
import { MdKeyboardReturn, MdSearch } from 'react-icons/md';

import './search-form.css';

const SearchForm = ({ fruits, setFruits }) => {
  const [searchInput, setSearchInput] = useState('');
  const searchedFruit = [];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!searchInput) {
      alert('Please enter a fruit to search for');
      return;
    }

    // const match = fruits.filter((fruit) => {
    //   return fruit.name.includes(searchInput);
    // });

    // setFruits(match);

    try {
      const response = await fetch(`https://fruityvice.com/api/fruit/${searchInput}`);
      searchedFruit.push(await response.json());

      if (response.status !== 200) {
        alert('The Fruit was not found');
        return;
      } else {
        setFruits(searchedFruit);
      }
    } catch (error) {
      console.log('Something went wrong', error);
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="search-container">
        <MdSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search for a fruit..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="return-btn">
          <MdKeyboardReturn />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
