import React from 'react'
import HomePage from '../HomePage/HomePage'
import Product from './Product/Product'
import {
    Routes, Route
} from 'react-router-dom'


function Content() {
  return (
    <div className='center'>
    <Routes>
        <Route exact path="/sl-trade/" element={<HomePage/>} />
        <Route path={`/sl-trade/:productName`} element={<Product/>} />
    </Routes>
</div>
    )
}

export default Content