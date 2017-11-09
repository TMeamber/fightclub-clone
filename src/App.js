import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Brand from './components/Brand';
// import Productdetails from './components/Productsdetails';
import { Route, Link } from 'react-router-dom';
import logo from './components/logo.png'
import Cart from './components/Cart';
import cartlogo from './components/cart.png'
import Stripe from './components/Stripe'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='Navbar'>
          <nav className="navbar">
            <Link to="/"><img className="logo" alt='' src={logo} /></Link>
            <input className="search" />
            <a href='process.env.HREF'>
              <div className="login">JOIN / SIGN IN</div>
            </a>
            <Link to="/cart"><img className="cartlogo" alt='' src={cartlogo} /></Link> 
          </nav>
        </div>
        <div className="lowernav">
          <Link to="/brand/air-jordan">
            <div className="airjordan">Air Jordan</div>
          </Link>
          <Link to="/brand/nike">
            <div className='nike'>Nike</div>
          </Link>
          <Link to="/brand/adidas">
            <div className='adidas'>Adidas</div>
          </Link>
          <Link to="/brand/yeezy">
            <div className='yeezy'>Yeezy</div>
          </Link>


        </div>
        <Route exact path='/' component={Home} />
        <Route path='/brand/:brand/' component={Brand} />
        {/* <Route path='/productsdetails' component={Productdetails} /> */}
        <Route path='/cart' component={Cart} />
      </div>
    );
  }
}

export default App;