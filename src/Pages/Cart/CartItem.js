import { useContext } from "react";
import { ShopContext } from "../../Context/ContextShop";

const CartItem = (props) => {
const{id,price,productName,img}=props.data;
const{cart,addToCart,removeFromCart,updateCartItemCount}=useContext(ShopContext)
  return (
    <div className="cartItem">
        <img src={img} alt="" />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>₹{price}</p>
            <div className="countHandler">
                <button onClick={()=>removeFromCart(id)}> - </button>
                <input value={cart[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
                <button onClick={()=>addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem