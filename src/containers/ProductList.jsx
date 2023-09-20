import React, { useContext, useState } from 'react';
import ProductItem from 'Components/ProductItem';
import ProductDetails from 'Components/ProductDetails';
import 'Styles/productList.css';
import AppContext from 'Context/AppContext';

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
