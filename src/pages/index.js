import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import SearchForm from '../components/Search/SearchForm';
import SearchFilter from '../components/SearchFilter/SearchFilter';
import FruitCard from '../components/FruitCard/FruitCard';
import { useState } from 'react';
import { useEffect } from 'react';

import Basket from '../assets/empty-fruit-basket.png';

import './style.css';

const Home = () => {
  const [fruits, setFruits] = useState([]);
  const [filteredFruits, setFilteredFruits] = useState([]);
  const [fruitInDetail, setFruitinDetail] = useState({});

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
      {filteredFruits.length > 0 ? (
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

          <div className="empty-basket">
            <div className="empty-basket-title">No Fruits Found</div>
            <img className="basket-img" src={Basket} alt="Empty Fruit Basket" />
            <button
              className="empty-basket-btn"
              onClick={() => {
                window.location.href = '/';
              }}
            >
              Go To Homepage
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
