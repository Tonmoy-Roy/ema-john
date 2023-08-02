/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // const { img, name, seller, price } = props.product;
    console.log(props);
    const img = props.product?.img;
    const name = props.product?.name;
    const seller = props.product?.seller;
    const price = props.product?.price;
    const handleAddToCart=props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2 className='name'>{name}</h2>
            <h2>Manufacture : {seller}</h2>
            <h2>Price : ${price}</h2>
            <button onClick={()=>handleAddToCart(props.product)} className='btn'>Add to Cart  <FontAwesomeIcon icon={ faShoppingCart}> </FontAwesomeIcon>
            </button>
        </div>
    );

};

export default Product;