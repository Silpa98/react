import React from 'react'

function Header(props) {
    const {countCartItems}=props
    
    return (
        <header className='row block center'>
             <div>
                <h1>Shopping App</h1>
            </div>
            <div className='row'>
                <h4>
                    Cart {' '}
                    {countCartItems ? (
                        <button >{countCartItems}</button>
                    ):('')}
                    </h4>
            </div>
        </header>
           
           
        
    )
}

export default Header;
