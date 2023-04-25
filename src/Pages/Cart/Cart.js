import { useContext, useState } from "react"
import phones from "../../products"
import { ShopContext } from "../../Context/ContextShop"
import CartItem from "./CartItem"
import "./cart.css"
import { useNavigate } from "react-router-dom"
const Cart = () => {
  const { cart, getTotalCartAmount,checkout }=useContext(ShopContext);
   const totalAmount=getTotalCartAmount();
   const navigation = useNavigate()
  return (
    <div className="cart">
      <div>
        <h1>Yor Cart Items</h1>
      </div>
      <div className="cartItems">
      {
        phones.map((product)=>{
          if(cart[product.id]!==0)
          {
            return <CartItem data={product}/>
          }
        })
      }
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> total: ₹{totalAmount} </p>
          <button onClick={() => navigation("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigation("/checkout");
            }}
          >Checkout{" "}
          </button>
        </div>
      ):(
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  )
}

export default Cart