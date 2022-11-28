import { createContext } from "react";
import productdata from '../json/data.json'


export const ProductContext = createContext()

const Provider = ({children})=>{
   
    const data={
        productdata
    }
    return(
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    )
}

export default Provider