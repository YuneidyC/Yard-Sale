import React from "react";

import close from "Icons/icon_close.png";

import "Styles/productDetail.css";

const ProductDetail = () => {
    return (
        <aside className="ProductDetail">
            <div className="ProductDetail-close">
                <img src={close} alt="close" />
            </div>
        </aside>
    );
};

export default ProductDetail;
