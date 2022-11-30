import React from 'react'
import HomePage from '../HomePage/HomePage'
import Product from './Product/Product'
import {
    Routes, Route
} from 'react-router-dom'
import Basket from '../Basket/Basket'
import ProductDetail from '../ProductDetail/ProductDetail'


function Content() {
  return (
    <div className='center'>    
    <Routes>
        <Route exact path="/sl-trade/" element={<HomePage/>} />
        <Route path={`/sl-trade/:productName`} element={<Product/>} />
        <Route path={`/sl-trade/:productName/:categoryName`}  element={<Product/>} />
        <Route path={`/sl-trade/:productName/:categoryName/:name`} element={<ProductDetail/>} />
        <Route path={`/sl-trade/sepet`} element={<Basket/>} />
    </Routes>
</div>
    )
}

export default Content