// import logo from './logo.svg';
import React from 'react';
import './App.css';
import AppNavbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import ShowDetail from './pages/ShowDetail'

import SearchForm from './components/Search/SearchForm';
import SearchFilter from './components/SearchFilter/SearchFilter';
import FruitCard from './components/FruitCard/FruitCard';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [fruits, setFruits] = useState([]);
  const [fruitInDetail, setFruitinDetail] = useState({});

  const getFruitDetails  = async (fruitname) => {
    try {
      const response = await fetch(`https://fruityvice.com/api/fruit/${fruitname}`);
      console.log("response = ",response);
      const oneFruit = await response.json();
      if (response.status === 200) {
        setFruitinDetail(oneFruit);
        console.log(`oneFruit = `, oneFruit)
      }
    } catch (error) {
      console.log('Something went wrong while fetching the fruit details from the server!', error);
    }
  }

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
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path={`/showd/*`} element={<ShowDetail />} fruitInDetail={fruitInDetail} />

          {/* https://fruityvice.com/api/fruit/${fruit.name} */}
        </Routes>
      </Router>
      <SearchForm fruits={fruits} setFruits={setFruits} />
      <SearchFilter />
      <FruitCard fruits={fruits} getFruitDetails={getFruitDetails} />
    </React.Fragment>
  );
}

export default App;
