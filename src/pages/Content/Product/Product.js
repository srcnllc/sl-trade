import React, { useEffect, useState } from 'react'
import './Product.css'
import { Link, useParams } from "react-router-dom";
import Card from '../../../components/Card/Card';
import productdata from '../../../json/data.json'
import List from '../../../json/List.json'



function Product() {
  let { productName } = useParams();
  const [productData, setProductData] = useState([]);
  const [altlist, setAltlist] = useState([]);
  useEffect(() => {
    setProductData(productdata.filter(item => item.topCategory === `${productName.toLowerCase()}`))
    setAltlist(List.filter((item) => item.name.toLocaleLowerCase() === `${productName.toLowerCase()}`))
  }, [productName])
  console.log(altlist.map(item => item.test.map(i => i.name)))

  return (
    <div className='product'>
      <div className='altMenü'>
          <ul>
        {altlist.map((item) => item.test.map((i, index) => {
          return (
            <div className='navlist' key={index}>
            <Link className='navlist' to={`/sl-trade/${item.name}/${i.name}`}>
              <img src={i.image} alt={i.name} />
              <li >{i.name}</li>
            </Link>
          </div>
          )
        }))}
                    </ul>

      </div>
      <div className='Card'>
        {productData.map((item, index) => {
          return (
            <Card item={item} key={index} />
          )
        })}
      </div>
    </div>
  )
}
export default Product