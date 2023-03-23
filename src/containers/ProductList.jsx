import React, { useContext, useEffect, useState, useRef } from 'react';
import ProductItem from '@components/ProductItem';
import ProductDetails from '@components/ProductDetails';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';
import AppContext from '@context/AppContext';

const API = 'http://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const products = useGetProducts(API);
    const { allProducts, allProductWithCategory } = useContext(AppContext);
    const [showProductDetails, setShowProductDetails] = useState([]);

    allProducts(products);

    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref.current.contains(event.target)) {
                setShowProductDetails([]);
            }
        };
        document.addEventListener("click", handleClickOutside);
    }, [ref]);

    return (
        <section className="main-container" ref={ref}>
            {showProductDetails.length !== 0 &&
                <div className="ProductList_item_info" >
                    <ProductDetails product={showProductDetails} setShowProductDetails={setShowProductDetails} />
                </div>
            }
            <div className="ProductList">
                {products.map(product => (
                    <ProductItem product={product} key={product.id} category={0} setShowProductDetails={setShowProductDetails} />
                ))}
            </div>
        </section>
    );
}

export default ProductList;
