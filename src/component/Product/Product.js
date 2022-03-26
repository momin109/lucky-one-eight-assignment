import React from 'react';
import './Product.css';
const Product = (props) => {
    const { name, img, price, } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <p>{price}</p>

        </div>
    );
};

export default Product;