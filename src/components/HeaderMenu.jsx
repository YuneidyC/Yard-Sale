import React from 'react';
import '@styles/HeaderMenu.scss';
import Header from './Header';

const HeaderMenu = () => {
    return (
        <div className="Menu-header">
            <h3>CATEGORIES</h3>
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
            <div className='separator'></div>
            <div className='account-user'>
                <ul>
                    <li>
                        <a href="/" className="title">My orders</a>
                    </li>
                    <li>
                        <a href="/">My account</a>
                    </li>
                    <li>
                        platzi@example.com
                    </li>
                    <li>
                        <a href="/">Sign out</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderMenu;
