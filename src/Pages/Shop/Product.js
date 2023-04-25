import { useContext } from 'react';
import {ShopContext} from "../../Context/ContextShop"
 const Product = (props) => {
  const{id,price,productName,img}=props.data;
  const{addToCart,cart}=useContext(ShopContext )
  const cartAmount=cart[id];
  return (
    <div className="product">
     <img src={img} alt="" />
     <div className="description">
        <p>
            <b>{productName}</b>
        </p>
        <p>
         ₹{price}
        </p>
     </div>
     <button className="addToCartBttn" onClick={()=>addToCart(id)}>
      Add To Cart {cartAmount > 0 ?<>{cartAmount}</>:<></>}
     </button>
    </div>
  )
}

export default Product