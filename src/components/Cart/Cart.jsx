import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    console.log(cart);
    let totalprice = 0, totalshipping = 0;
    for (const product of cart) {
        totalprice += product.price;
        totalshipping+=product.shipping;
    }
    const tax=(totalprice*7)/100;
    return (
        <div className='summary'>
            <h2 className='title'>Order Summary</h2>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price: ${totalprice}</p>
            <p>Total Shipping Charge: ${totalshipping}</p>
            <p>Tax: ${tax}</p>
            <h2>Grand Total: ${totalprice+totalshipping+tax}</h2>
        </div>
    );
};

export default Cart;