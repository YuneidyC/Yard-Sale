import React, { useContext } from "react";

import AppContext from "../context/AppContext";
import close from "Icons/icon_close.png";
import add from "Icons/add.png";
import reduce from "Icons/reduce.svg";

import "Styles/orderItem.css";

const OrderItem = ({ product, index }) => {
    const { removeFromCart, reduceItem, addToCart } = useContext(AppContext);

    const handleRemove = (product) => {
        removeFromCart(product, index);
    };

    return (
        <div className="OrderItem">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <div className="cart-product-quantity">
                <img
                    src={reduce}
                    className="reduce-item"
                    onClick={() => reduceItem(product, index)}
                    alt="Reduce item"
                    />
                <div className="count">{product.qty}</div>
                <img
                    src={add}
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                    alt="Add to cart"
                />
            </div>
            <p>${product.price}</p>
            <img
                className="deleteItem"
                src={close}
                alt="close"
                onClick={() => handleRemove(product)}
            />
        </div>
    );
};

export default OrderItem;
