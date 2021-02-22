import React from 'react';
import './Data.css';

 function Product(props) {
     const {product,onAdd} =props
    return (
        <div>
          
            <h3>{product.name}</h3>
            <div>Price:{product.price}</div>
            <button  className='addcart' onClick={()=> onAdd(product)} >Add to cart</button>
        </div>
    )
}
export default Product;
