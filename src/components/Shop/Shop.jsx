import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import React from 'react';

import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const [Products, setProducts] = useState([]);
    const [cart,setCart]=useState([])
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(json => setProducts(json))
    }, []);
    const handleAddToCart = (product) => {
        const newCart=[...cart,product];
        setCart(newCart);
    }
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
                                handleAddToCart={handleAddToCart}
                            ></Product>)
                        }
                    </div>
                    <div className="cart-container">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;