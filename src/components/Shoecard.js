import React from 'react'


export default function Brand(props) {
   console.log(props.brand)
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.brand}</h2>
            <img src={props.image} alt="Images" />
            <h5>{props.price}</h5>
        </div>
    )
}