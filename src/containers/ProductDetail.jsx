import React from 'react';
import '@styles/ProductDetail.scss';
import close from '@icons/icon_close.png';

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
