import React from 'react';
import './App.css';
import AppNavbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import ShowDetail from './pages/ShowDetail';
import NotFoundPage from './pages/notfound';

function App() {
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
    </React.Fragment>
  );
}

export default App;
