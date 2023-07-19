import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import add from '@icons/bt_add_to_cart.svg';
import '@styles/ProductDetails.scss';
import close from '@icons/cancel.png';

const ProductDetails = ({ product, setShowProductDetails }) => {
    const { addToCart } = useContext(AppContext);

    const handleClick = item => {
        addToCart(item);
    }

    const closeContainer = () => {
        setShowProductDetails([]);
    }

    return (
        <>
            {product &&
                <div className="ProductDetails">
                    <div className='ProductDetails__image-container'>
                        <img className='close' onClick={closeContainer} src={close} alt="close" />
                        <img className='image' src={product.images[0]} />
                    </div>
                    <div className='ProductDetails__info-container'>
                        <p className='price'>${product.price}</p>
                        <p className='title'>{product.title}</p>
                        <p className='description'>{product.description}</p>
                        <button className="primary-button add-to-cart-button" onClick={() => handleClick(product)}>
                            <img src={add} alt="" />
                            Add to cart
                        </button>
                    </div>
                </div>
            }
        </>
    );
}

export default ProductDetails;
