import React from 'react'
import { useParams} from "react-router-dom";


function Product() {
  let { productName } = useParams();

  return (
    <>
       <h1>{productName}</h1>
    </>
  )
}

export default Product