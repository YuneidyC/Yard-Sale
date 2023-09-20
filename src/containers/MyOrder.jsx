import React, { useContext, useRef, useEffect } from 'react';
import OrderItem from 'Components/OrderItem';
import AppContext from 'Context/AppContext';
import 'Styles/myOrder.css';

const MyOrder = (props) => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumalator, currentValue) => accumalator + (currentValue.price * currentValue.qty);
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }

    const ref = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                props.changeToggleOrders('true');
            }
        };
        document.addEventListener("click", handleClickOutside);
    }, [ref]);

    return (
        <aside className="MyOrder" ref={ref}>
            <div className="title-container">
                <button type="button" alt="arrow" onClick={() => props.changeToggleOrders('true')}></button>
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">
                {state.cart.map((product, index) => (
                    <OrderItem product={product} key={product.id} index={index} />
                ))}
            </div>

            <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>${sumTotal()}</p>
            </div>
            <button className="primary-button">
                Checkout
            </button>

        </aside >
    );
}

export default MyOrder;
