import React from 'react';
import './App.css';
import AppNavbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import ShowDetail from './pages/ShowDetail';
import NotFoundPage from './pages/notfound';

import SearchForm from './components/Search/SearchForm';
import SearchFilter from './components/SearchFilter/SearchFilter';
import FruitCard from './components/FruitCard/FruitCard';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
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
    <React.Fragment>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/showd/:id" element={<ShowDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <SearchForm fruits={fruits} setFruits={setFruits} />
      <SearchFilter
        fruits={fruits}
        filteredFruits={filteredFruits}
        setFilteredFruits={setFilteredFruits}
      />
      <FruitCard fruits={filteredFruits} getFruitDetails={getFruitDetails} />
    </React.Fragment>
  );
}

export default App;
