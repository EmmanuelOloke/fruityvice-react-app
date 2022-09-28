// import logo from './logo.svg';
import React from 'react';
import './App.css';

import SearchForm from './components/Search/SearchForm';
import SearchFilter from './components/SearchFilter/SearchFilter';
import FruitCard from './components/FruitCard/FruitCard';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [fruits, setFruits] = useState([]);

  const fetchFruits = async () => {
    try {
      const response = await fetch('https://fruityvice.com/api/fruit/all');
      const fruits = await response.json();
      if (response.status === 200) {
        setFruits(fruits);
      }
    } catch (error) {
      console.log('Something went wrong while fetching the fruits', error);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <React.Fragment>
      <SearchForm fruits={fruits} setFruits={setFruits} />
      <SearchFilter />
      <FruitCard fruits={fruits} />
    </React.Fragment>
  );
}

export default App;
