// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css'
import logo from '../../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" className='logo'/>
            <div className='order'>
                <a href="/order">Order </a>
                <a href="/order-review">Review </a>
                <a href="/inventory">Inventory    </a>
                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;