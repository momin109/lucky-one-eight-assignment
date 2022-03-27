import React from 'react';
import './Product.css';
const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, img, price, } = product;


    return (

        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='price'>${price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add TO Cart</p>
            </button>
        </div>
    );
};

export default Product;