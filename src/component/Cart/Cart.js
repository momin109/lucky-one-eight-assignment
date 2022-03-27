import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart, randomProduct, newProduct } = props;
    const getRandom = cart[newProduct];
    console.log(getRandom)
    return (
        <div className='cart'>
            <h4>Oder summary</h4>
            <h3>{getRandom?.name}</h3>
            {
                cart.map(product => <h3>Name : <small className='product-name'>{product.name}</small></h3>)
            }

            <div>
                <button onClick={randomProduct} className='btn-random'>Choose 1 For Me</button>
            </div>
            <br /><br />
            <div>
                <button className='btn-random'>Choose Again</button>
            </div>

        </div>
    );
};

export default Cart;