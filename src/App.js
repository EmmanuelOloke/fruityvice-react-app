// import logo from './logo.svg';
import React from 'react';
import './App.css';
import AppNavbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';

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
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <SearchForm fruits={fruits} setFruits={setFruits} />
      <SearchFilter setFruits={setFruits} />
      <FruitCard fruits={fruits} />
    </React.Fragment>
  );
}

export default App;
