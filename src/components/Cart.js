import React from 'react'

export default function Cart(props) {
    console.log("cartprops",props.cartData.length)
    return (
        <div>
            <h1>Cart.js {props.cartData.length}</h1>
        </div>
    )
}
