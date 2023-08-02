/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Product.css'
const Product = (props) => {
    // const { img, name, seller, price } = props.product;
    // console.log(props.product?.img);
    const img = props.product?.img;
    const name = props.product?.name;
    const seller = props.product?.seller;
    const price = props.product?.price;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2 className='name'>{name}</h2>
            <h2>seller : {seller}</h2>
            <h2>price : ${price}</h2>
            <button className='btn'>Add to Cart </button>
        </div>
    );

};

export default Product;