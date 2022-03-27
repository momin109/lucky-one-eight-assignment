import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [newProduct, setNewProduct] = useState(-1);
    const randomProduct = () => {
        let random = Math.floor(Math.random() * cart.length);
        setNewProduct(random);
    }

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>

            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    randomProduct={randomProduct}
                    newProduct={newProduct}
                ></Cart>


            </div>
        </div>
    );
};

export default Shop;