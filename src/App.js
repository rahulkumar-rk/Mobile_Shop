import './App.css';
import { Route, Routes } from "react-router-dom"
import Header from './Component/Header';
import Shop from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';
import ShopContextProvider from './Context/ContextShop';
const App = () =>{
  return (
    <div className="App">
      <ShopContextProvider>
      <Header/>
     <Routes>
      <Route path="/" element={<Shop/>} />
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </ShopContextProvider>
    </div>
   )
}

export default App