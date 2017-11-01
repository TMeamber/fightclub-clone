import React, { Component } from 'react';
import './Home.css'
import Navbar from './Navbar';



export default class Home extends Component {


    render() {
        return (
            <div className='Home'>
                <h1>Home Page</h1>
                <a href='http://localhost:3005/auth'>
                    <button>JOIN/SIGN IN</button>
                </a>
            </div>
        )
    }
}
