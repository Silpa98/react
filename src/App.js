import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import {useState} from "react";
import './App.css';

function App() {
    const {products} = data
    const [cartItems,setCartItems] =useState([]);
    const onAdd=(product)=>{
      const exist=cartItems.find((x)=>x.id===product.id);
      if(exist){
        setCartItems(
          cartItems.map((x)=>
          x.id===product.id ? {...exist,qty:exist.qty+1}:x)
        )
      }
      else{
          setCartItems([...cartItems,{...product,qty:1}]);
      }
    }
    const onRemove=(product)=>{
      const exist=cartItems.find((x)=>x.id===product.id)
      if(exist.qty===1){
        setCartItems(cartItems.filter((x)=>x.id!==product.id))
        // setCartItems([...cartItems,{...p}])
      }
      else{
        setCartItems(
          cartItems.map((x)=>
          x.id===product.id ? {...exist,qty:exist.qty-1}:x)
        )
      }
    }
    
    
    const count=cartItems.map((item)=>item.qty)
    const finalcount=count.reduce((total,count)=>total+count,0)
    const totalPrice=cartItems.map((item)=>item.qty*item.price)
    const finalPrice=totalPrice.reduce((total,totalPrice)=>total+totalPrice,0)

    
   const clearCart =()=>{
     setCartItems([])
   }

  return (
    <div >
     {/* <Header countCartItems={cartItems.length}/> */}
     <Header countCartItems={finalcount}/>
     <div className='row'>
     <Main onAdd={onAdd} products={products}/>
     <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} finalPrice={finalPrice} clear={clearCart}/>
     </div>
     
    </div>
  );
}

export default App;
