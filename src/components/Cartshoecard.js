import React from 'react'
import Cartshoecard from './Cartshoecard.css'
import axios from 'axios';


export default function Brand(props) {
    
    function handleClick() {
        console.log(props.id)
        axios.delete(`/api/cart/${props.id}`).then((res)=>{
            props.refresh()
        })
    }


    return (
        <div>
            <img className="image" src={props.image} alt="Images" />
            <h2 className="shoebrand">{props.brand}</h2>
            <h1 className="name">{props.name}</h1>
            <h5 className="price">{props.price}</h5>
            <button className="delete" onClick={handleClick}>Remove</button>
        </div>
    )
}
