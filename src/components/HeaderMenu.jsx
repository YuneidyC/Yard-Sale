import React, { useContext, useRef, useEffect } from 'react';
import '@styles/HeaderMenu.scss';
import AppContext from '@context/AppContext';

const HeaderMenu = (props) => {
    const { getAllProductsWithCategory, getAllProducts } = useContext(AppContext);

    const productsCategory = (category) => {
        getAllProductsWithCategory(category);
    }

    const ref = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                props.changeToggleMenu('true');
            }
        };
        document.addEventListener("click", handleClickOutside);
    }, [ref]);

    return (
        <div className="Menu-header" ref={ref}>
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
