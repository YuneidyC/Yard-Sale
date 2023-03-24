import React, { useContext } from 'react';
import '@styles/HeaderMenu.scss';
import AppContext from '@context/AppContext';

const HeaderMenu = () => {
    const { getAllProductsWithCategory, getAllProducts } = useContext(AppContext);

    const productsCategory = (category) => {
        getAllProductsWithCategory(category);
    }

    return (
        <div className="Menu-header">
            <h3>CATEGORIES</h3>
            <ul>
                <li>
                    <button type='button' onClick={() => {
                        getAllProducts()
                    }}>All
                    </button>
                </li>
                <li>
                    <button type='button' onClick={() => {
                        productsCategory(1)
                    }}>Clothes
                    </button>
                </li>
                <li>
                    <button type='button' onClick={() => {
                        productsCategory(2)
                    }}>Electronics
                    </button>
                </li>
                <li>
                    <button type='button' onClick={() => {
                        productsCategory(3)
                    }}>Furnitures
                    </button>
                </li>
                <li>
                    <button type='button' onClick={() => {
                        productsCategory(4)
                    }}>Shoes
                    </button>
                </li>
                <li>
                    <button type='button' onClick={() => {
                        productsCategory(5)
                    }}>Others
                    </button>
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
