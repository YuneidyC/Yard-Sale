import React, { useContext, useEffect, useState, useRef } from 'react';
import ProductItem from '@components/ProductItem';
import ProductDetails from '@components/ProductDetails';
import '@styles/_ProductList.scss';
import AppContext from '@context/AppContext';

const ProductList = () => {
    const { currentProducts } = useContext(AppContext);
    const [showProductDetails, setShowProductDetails] = useState([]);


    return (
        <section className="main-container">
            {showProductDetails.length !== 0 &&
                <div className="ProductList_item_info" >
                    <ProductDetails product={showProductDetails} setShowProductDetails={setShowProductDetails} />
                </div>
            }
            <div className="ProductList">
                {currentProducts.map(product => (
                    <ProductItem product={product} setShowProductDetails={setShowProductDetails} />
                ))}
            </div>
        </section>
    );
}

export default ProductList;
