import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '@styles/orderItem.css';
import close from '@icons/icon_close.png';
import add from '@icons/add.png';
import reduce from '@icons/reduce.svg';

const OrderItem = ({ product, index }) => {
    const { removeFromCart, reduceItem, addToCart } = useContext(AppContext);

    const handleRemove = product => {
        removeFromCart(product, index);
    }

    return (
        <div className="OrderItem">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <div className="cart-product-quantity">
                <img src={reduce} className='reduce-item' onClick={() => reduceItem(product, index)} />
                <div className="count">{product.qty}</div>
                <img src={add} className='add-to-cart' onClick={() => addToCart(product)} />
            </div>
            <p>${product.price}</p>
            <img className="deleteItem" src={close} alt="close" onClick={() => handleRemove(product)} />
        </div>
    );
}

export default OrderItem;
