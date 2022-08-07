import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png';

const OrderItem = ({ product, index }) => {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = product => {
        removeFromCart(product, index);
    }

    return (
        <div className="OrderItem">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>{product.qty}x</p>
            <p>${product.price}</p>
            <img className="deleteItem" src={close} alt="close" onClick={() => handleRemove(product)} />
        </div>
    );
}

export default OrderItem;
