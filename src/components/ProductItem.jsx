import React, { useContext, useState, useEffect, useRef } from "react";

import AppContext from "Context/AppContext";
import addToCartImage from "Icons/bt_add_to_cart.svg";
import SkeletonProduct from "./SkeletonProduct";

import "Styles/productItem.css";

const ProductItem = ({ product, setShowProductDetails }) => {
    const { addToCart } = useContext(AppContext);
    let [imageLoaded, setImageLoaded] = useState(false);

    const handleClick = (item) => {
        addToCart(item);
    };

    const ref = useRef();
    useEffect(() => {
        const img = new Image();
        img.src = product.images[0];
        img.onload = () => {
            setImageLoaded(true);
        };
    });

    return (
        <>
            {!imageLoaded ? (
                <SkeletonProduct ref={ref} />
            ) : (
                <div className="ProductItem">
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        onClick={() => setShowProductDetails(product)}
                    />
                    <div className="product-info">
                        <div>
                            <p>${product.price}</p>
                            <p>{product.title}</p>
                        </div>
                        <figure onClick={() => handleClick(product)}>
                            <img src={addToCartImage} alt="Add to cart" />
                        </figure>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductItem;
