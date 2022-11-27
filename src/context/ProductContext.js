import { createContext, useState } from "react";
import productdata from '../json/data'


export const ProductContext = createContext()

const Provider = ({children})=>{
    const [product]=useState(productdata)
    console.log(product)
    
    const data={
        product
    }
    return(
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    )
}

export default Provider