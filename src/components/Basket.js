import React from 'react'

 function Basket(props) {
     const {cartItems,onAdd,onRemove,finalPrice,clear}=props
    return (
      <aside className='block col-1'>
          {/* <h2>CART</h2> */}
          <div>
              {cartItems.length===0 && <div>Cart is Empty</div>}
          </div>
          {cartItems.map((item)=>(
          <div key={item.id} className='row'>
              <div className='col-2'>{item.name}</div>
              <div className='col-2'>
                <button onClick={()=> onAdd(item) } className='add'>+</button>
                <button onClick={()=> onRemove(item)} className='remove'>-</button>
              </div>
              <div className='col-2'>
                  {item.qty}
                    x
                  {item.price}
              </div>
            </div>
         
          )
         
          )}
          <div>
              {cartItems.length!==0 && <div>
                  <div className='block col-2'>
                  Total Price  ---------
                 {finalPrice}
                 </div>
                 <div>
                  
                     <button  onClick={clear}>CLEAR CART</button>
                 </div>
                 </div>
              }
          
          </div>
           
          
      </aside>
    )
}

export default Basket;
