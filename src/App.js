import React, { Component } from 'react';

import './App.css';

import axios from 'axios';

import Header from './components/header/header.component';
import Search from './components/search/search.container';
import Countries from './containers/countries/countries.container';

class App extends Component {

  state = {
    contr: []
}


componentDidMount() {  
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => this.setState({ contr: res.data })) 
}

  
render() {
  return (
    <div className="App"> 
      <Header />
      <Search />
      <Countries data={this.state.contr}/>
    </div>  
  );
}


}

export default App;


