import React, { useContext, useState } from 'react';

import ProductItem from 'Components/ProductItem';
import ProductDetails from 'Components/ProductDetails';
import AppContext from 'Context/AppContext';
import SkeletonProduct from '../components/SkeletonProduct';
import 'Styles/productList.css';

const ProductList = () => {
    const { currentProducts, productRequestLimit } = useContext(AppContext);
    const [showProductDetails, setShowProductDetails] = useState([]);

    return (
        <section className="main-container">
            {showProductDetails.length !== 0 &&
                <div className="ProductList_item_info" >
                    <ProductDetails product={showProductDetails} setShowProductDetails={setShowProductDetails} />
                </div>
            }
            <div className="ProductList">
                {currentProducts.length < productRequestLimit ? <SkeletonProduct /> : currentProducts.map((product) => (
                    <ProductItem key={product.id} product={product} setShowProductDetails={setShowProductDetails} />
                ))}
            </div>
        </section>
    );
}

export default ProductList;
