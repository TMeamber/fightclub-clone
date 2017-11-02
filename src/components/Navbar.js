import React, { Component } from 'react';
import './Navbar.css'
import logo from './logo.png'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {


    render() {
        return (
            <div className='Navbar'>
                <nav className="navbar">
                <a href='http://localhost:3005/auth'>
                    <button>JOIN/SIGN IN</button>
                </a>
                <div className="cart">Cart</div>
                <img alt='' src={logo}/>
                </nav>
            </div>
          
        )
    }
}