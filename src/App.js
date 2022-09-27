// import logo from './logo.svg';
import React from 'react';
import './App.css';
import AppNavbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/';
import About from './pages/about';
import Contact from './pages/contact';



import SearchForm from './components/Search/SearchForm';
import SearchFilter from './components/SearchFilter/SearchFilter';

function App() {
  return (
    <React.Fragment>
    <Router>
      <AppNavbar/>
      <Routes>
        <Route path='./index' component={Home} />
        <Route path='./about' component={About} />
        <Route path='./contact' component={Contact} />
      </Routes>
    </Router>
      <SearchForm />
      <SearchFilter />
    </React.Fragment>
  );
}

export default App;
