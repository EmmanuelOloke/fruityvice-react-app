// import logo from './logo.svg';
import React from 'react';
import './App.css';

import SearchForm from './components/Search/SearchForm';
import SearchFilter from './components/SearchFilter/SearchFilter';

function App() {
  return (
    <React.Fragment>
      <SearchForm />
      <SearchFilter />
    </React.Fragment>
  );
}

export default App;
