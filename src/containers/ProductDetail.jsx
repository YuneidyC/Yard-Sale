import React from 'react';
import 'Styles/productDetail.css';
import close from 'Icons/icon_close.png';

const ProductDetail = () => {
    return (
        <aside className="ProductDetail">
            <div className="ProductDetail-close">
                <img src={close} alt="close" />
            </div>
        </aside>
    );
}

export default ProductDetail;
