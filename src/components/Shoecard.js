import React from 'react'
import Shoecard from './Shoecard.css'
import axios from 'axios';
export default function Brand(props) {
    
    function handleClick() {
        axios.post('/api/cart', {id: props.id})
    }


    return (
        <div>
            <img className="image" src={props.image} alt="Images" />
            <h2 className="shoebrand">{props.brand}</h2>
            <h1 className="name">{props.name}</h1>
            <h5 className="price">{props.price}</h5>
            <button className="add" onClick={handleClick}>Add to Cart</button>
        </div>
    )
}
