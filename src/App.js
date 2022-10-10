import React from 'react';
import './App.css';
import AppNavbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import ShowDetail from './pages/showdetail';
import NotFoundPage from './pages/notfound';


function App() {
  return (
    <React.Fragment>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/about/team" element={<About/>} /> */}
          <Route path="/showd/:id" element={<ShowDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        
      </Router>
    </React.Fragment>
  );
}

export default App;
