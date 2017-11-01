import React, { Component } from 'react';
import './Navbar.css'
import logo from './logo.png'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {


    render() {
        return (
            <div className='Navbar'>
                <button>JOIN/SIGN IN</button>
                <div className="cart">Cart</div>
                <img alt='' src={logo}/>
                <h1>Build Navbar here to render on all pages</h1>
            </div>
          
        )
    }
}