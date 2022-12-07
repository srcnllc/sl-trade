import { createContext, useState } from "react";
// import productdata from '../json/data.json'


export const ProductBasketContext = createContext()

const Provider = ({children})=>{

    const [basketdata,setBasketData] = useState({
        cart:[]
      });
      const addToCart = product => setBasketData({
        ...basketdata,
        cart: basketdata.cart.find(cartItem => cartItem.id === product.id)
        ? basketdata.cart.map(cartItem => cartItem.id === product.id ? {...cartItem, count: cartItem.count+1 } : cartItem)
        :[...basketdata.cart, { ...product, count: 1}]
      });
    
      const removeFromCart = id => setBasketData({
        ...basketdata,
        cart:basketdata.cart.filter(cartItem => cartItem.id !== id )
      })
    
      const increase = id => {
        setBasketData({
          ...basketdata,
          cart:basketdata.cart.map(cartItem => cartItem.id === id ? {...cartItem,count:
          cartItem.count + 1 } : cartItem)
        });
      };
      const decrease = id => {
        setBasketData({
          ...basketdata,
          cart:basketdata.cart.map(cartItem => cartItem.id === id ? {...cartItem,count:
            cartItem.count > 1 ? cartItem.count - 1 : 1 } : cartItem)
        });
      };

      const data={
        addToCart,
        basketdata,
        setBasketData,
        removeFromCart,
        increase,
        decrease
    }
    return(
        <ProductBasketContext.Provider value={data}>
            {children}
        </ProductBasketContext.Provider>
    )
}

export default Provider