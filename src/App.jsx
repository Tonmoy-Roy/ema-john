import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import Product from './components/Product/Product'
import React, { Component } from 'react';
import Cart from './components/Cart/Cart'

function App() {
  // const [count, setCount] = useState[]

  return (
    <div className='App'>
      <Header></Header>
      <Shop></Shop>
      <Product></Product>
    </div>
  )
}

export default App
