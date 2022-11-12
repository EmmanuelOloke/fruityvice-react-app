import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import SearchForm from '../components/Search/SearchForm';
import SearchFilter from '../components/SearchFilter/SearchFilter';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import FruitCard from '../components/FruitCard/FruitCard';
import { useState } from 'react';
import { useEffect } from 'react';

import './style.css';

const Home = () => {
  const [fruits, setFruits] = useState([]);
  const [filteredFruits, setFilteredFruits] = useState([]);
  const [fruitInDetail, setFruitinDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getFruitDetails = async () => {
    try {
      const response = await fetch(`https://fruityvice.com/api/fruit/${fruitInDetail}`);
      console.log('response = ', response);
      const oneFruit = await response.json();
      if (response.status === 200) {
        setFruitinDetail(oneFruit);
        console.log(`oneFruit = `, oneFruit);
      }
    } catch (error) {
      console.log('Something went wrong while fetching the fruit details from the server!', error);
    }
  };

  const fetchFruits = async () => {
    try {
      const response = await fetch('https://fruityvice.com/api/fruit/all');
      const fruits = await response.json();
      if (response.status === 200) {
        setFruits(fruits);
        setFilteredFruits(fruits);
        setIsLoading(false);
      }
    } catch (error) {
      console.log('Something went wrong while fetching the fruits', error);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="container">
          <div className="search-components">
            <SearchForm
              fruits={fruits}
              filteredFruits={filteredFruits}
              setFilteredFruits={setFilteredFruits}
            />
            <SearchFilter
              fruits={fruits}
              filteredFruits={filteredFruits}
              setFilteredFruits={setFilteredFruits}
            />
          </div>

          <div className="loading-state">
            <LoadingSpinner />
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="search-components">
            <SearchForm
              fruits={fruits}
              filteredFruits={filteredFruits}
              setFilteredFruits={setFilteredFruits}
            />
            <SearchFilter
              fruits={fruits}
              filteredFruits={filteredFruits}
              setFilteredFruits={setFilteredFruits}
            />
          </div>

          <div className="fruit-cards">
            <FruitCard fruits={filteredFruits} getFruitDetails={getFruitDetails} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
