import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import reactLogo from './assets/react.svg'
// eslint-disable-next-line no-unused-vars
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import Product from './components/Product/Product'
// eslint-disable-next-line no-unused-vars
import React, { Component }  from 'react';

function App() {
  // eslint-disable-next-line no-unused-vars
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
