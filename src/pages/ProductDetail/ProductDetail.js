import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import productdata from '../../json/data.json'
import './ProductDetail.css'


function ProductDetail() {
    let { name } = useParams("");
    const [detailData,setDetailData] = useState([])

    useEffect(() => {
        setDetailData(productdata.filter(item => item.name ===`${name}`))
    },[name])

console.log(detailData)
  return (
    <div className='detailpage'>
            <div className='leftİmage'>
        {detailData.map((item, index) => {
          return (
            <img src={item.img} alt={item.name} key={index}/>
          )
        })}
    </div>
        <div className='rightDesc'>
        {detailData.map((item, index) => {
          return (
            <p key={index}>{item.desc}</p>
          )
        })}
    </div>
    </div>

  )
}

export default ProductDetail