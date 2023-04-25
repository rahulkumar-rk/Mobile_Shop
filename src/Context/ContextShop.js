import { createContext, useState } from "react"
import phones from "../products"
export const ShopContext=createContext(null);
const getingCart=()=>{
    let cart = {};
    for (let i = 1; i < phones.length + 1; i++) {
      cart[i] = 0;
    }
    return cart; 
}
const ShopContextProvider = (props) => {
    const[cart,setCart]=useState(getingCart());

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cart){
            if(cart[item]>0)
            {
                let info=phones.find((product)=>product.id===Number(item));
                totalAmount+=cart[item]*(info.price);
            }
                
        }
        return totalAmount;
    }
    const addToCart = (itemId) => {
        setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      };
    const removeFromCart = (itemId) => {
        setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      };
    const updateCartItemCount = (newAmount, itemId) => {
        setCart((prev) => ({ ...prev, [itemId]: newAmount }));
      }; 
      const checkout = () => {
        setCart(getingCart());
      }; 
      const contextValue = {
        cart,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout
      };
  return (
   <ShopContext.Provider value={contextValue}>
    {props.children}
   </ShopContext.Provider>
  )
}

export default ShopContextProvider;