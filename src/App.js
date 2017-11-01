import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Brand from './components/Brand';
import Productdetails from './components/Productsdetails';
import Navbar from './components/Navbar';
import { Route } from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/brand' component={Brand} />
        <Route path='/productsdetails' component={Productdetails} />
      </div>
    );
  }
}

export default App;
