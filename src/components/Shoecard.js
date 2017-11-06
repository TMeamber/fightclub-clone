import React from 'react'
import Shoecard from './Shoecard.css'

export default function Brand(props) {
    console.log(props.brand)
    return (
        <div className="shoecard">
            <img className="image" src={props.image} alt="Images" />
            <h2 className="shoebrand">{props.brand}</h2>
            <h1 className="name">{props.name}</h1>
            <h5 className="price">{props.price}</h5>
        </div>
    )
}