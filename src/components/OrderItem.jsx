import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = product => {
        removeFromCart(product);
    }

    return (
        <div className="OrderItem">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
{/* TODO: Si eliges el mismo elemento varias veces y después eliminas 1, se eliminarán todos porque todos comparten el mismo id. */}
            <img src={close} alt="close" onClick={() => handleRemove(product)} />
        </div>
    );
}

export default OrderItem;