import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Brand from './components/Brand';
import Productdetails from './components/Productsdetails';
import { Route, Link } from 'react-router';
import logo from './components/logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='Navbar'>
          <nav className="navbar">
          <img className="logo" alt='' src={logo} />
            <div className="cart">Cart</div>
            <a href='http://localhost:3005/auth'>
              <div className="login">JOIN / SIGN IN</div>
            </a>
          </nav>
          <div className="lowernav">
          <div className="airjordan">Air Jordans</div>
          <div className='nike'>Nike</div>
          <div className='adidas'>Adidas</div>
          <div className='yeezy'>Yeezy</div>
          </div>
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/brand' component={Brand} />
        <Route path='/productsdetails' component={Productdetails} />
      </div>
    );
  }
}

export default App;