import phones from '../../products';
import Product from './Product';
import './shop.css';
const Shop = () => {
  return (
    
    <div className="shop">
        <div className="shopTitle">
            <h1>Mobile Shop</h1>
        </div>
        <div className="products">
        {phones.map((product) => (
          <Product data={product} />
        ))}
        </div>
    </div>
  )
}

export default Shop