import React, { useContext } from 'react';
import '@styles/ProductInfo.scss';
import add from '@icons/bt_add_to_cart.svg';
import close from '@icons/cancel.png';
import AppContext from '@context/AppContext';

const ProductInfo = (props) => {
    const { addToCart } = useContext(AppContext);

    const handleClick = item => {
        addToCart(item);
    }

    return (
        <>
            <div className="ProductInfo">
                <div>
                    <img className='image' src={props.productDetails.images[0]} />
                    <img className='close' onClick={() => props.closeProduct('true')} src={close} alt="" />
                </div>
                <p className='price'>${props.productDetails.price}</p>
                <p className='title'>{props.productDetails.title}</p>
                <p className='description'>{props.productDetails.description}</p>
                <button className="primary-button add-to-cart-button" onClick={() => handleClick(props.productDetails)}>
                    <img src={add} alt="" />
                    Add to cart
                </button>
            </div>
        </>
    );
}

export default ProductInfo;
