import React, { useEffect, useState } from 'react'
import './Product.css'
import { useParams } from "react-router-dom";
import Card from '../../../components/Card/Card';
import productdata from '../../../json/data.json'
import List from '../../../json/List.json'
import AltList from '../../../components/AltList/AltList';




function Product() {
  let { productName } = useParams("");
  let { categoryName } = useParams("");

  const [productAltData, setProductAltData] = useState([]);
  const [altlist, setAltlist] = useState([]);
  useEffect(() => {
    setProductAltData(categoryName ? productdata.filter(item => item.category.toLowerCase() === `${categoryName.toLowerCase()}`) : productdata.filter(item => item.topCategory === `${productName.toLowerCase()}`))
    setAltlist(List.filter((item) => item.name.toLocaleLowerCase() === `${productName.toLowerCase()}`))
  }, [productName, categoryName])

  return (
    <div className='product'>
      <div className='altMenü'>
        <AltList altlist={altlist} />
      </div>
      <div className='Card'>
        {productAltData.map((item, index) => {
          return (
            <Card item={item} key={index} />
          )
        })}
      </div>
    </div>
  )
}
export default Product