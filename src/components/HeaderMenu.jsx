import React from 'react';
import '@styles/HeaderMenu.scss';

const HeaderMenu = () => {
    return (
        <div className="Menu-header">
            <ul>
                <li>
                    <a href="/">All</a>
                </li>
                <li>
                    <a href="/">Clothes</a>
                </li>
                <li>
                    <a href="/">Electronics</a>
                </li>
                <li>
                    <a href="/">Furnitures</a>
                </li>
                <li>
                    <a href="/">Shoes</a>
                </li>
                <li>
                    <a href="/">Others</a>
                </li>
            </ul>
        </div>
    );
}

export default HeaderMenu;
