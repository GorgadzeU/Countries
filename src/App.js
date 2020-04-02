import React from 'react';

import './App.css';

import Header from './components/header/header.component';
import Search from './components/search/search.container';
import Countries from './containers/countries/countries.container';

function App() {



  return (
    <div className="App"> 
      <Header />
      <Search />
      <Countries />
    </div>  
  );
}

export default App;


