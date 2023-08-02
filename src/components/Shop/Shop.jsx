import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [Products, setProducts] = useState([0]);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(json => setProducts(json))
    }, [])
    return (
        <div className="mt-10">
            <div className='shopcls'>
                <div className='shop-container'>
                    <div className="products-container">
                        {
                            // eslint-disable-next-line no-unused-vars, react/jsx-key
                            Products.map(product => <Product
                                key={product.key}
                                product={product}
                            ></Product>)
                        }
                    </div>
                    <div className="cart-container">
                        <h2>Order Summary</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;