import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product></Product>}></Route>
        <Route path='/products/:productId' element={<ProductDetails></ProductDetails>}></Route>
      </Routes>

      
    </div>
  )
}

export default App
