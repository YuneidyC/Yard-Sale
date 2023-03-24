import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import HeaderMenu from './HeaderMenu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toogleMenu, setToggleMenu] = useState(false);
    const { state, getAllProductsWithCategory, getAllProducts } = useContext(AppContext);

    const productsCategory = (category) => {
        getAllProductsWithCategory(category);
    }

    const totalCartItems = () => {
        let totalCartItems = 0;
        state.cart.forEach(item => {
            totalCartItems += item.qty;
        })
        return totalCartItems;
    }

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" onClick={() => { setToggleMenu(!toogleMenu); setToggleOrders(false) }} role="button" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
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
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={() => { setToggle(!toggle); setToggleOrders(false) }}>
                        platzi@example.com
                    </li>
                    <li
                        className="navbar-shopping-cart"
                        onClick={() => { setToggleOrders(!toggleOrders); setToggleMenu(false); setToggle(false) }}
                    >
                        <img src={shoppingCart} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{totalCartItems()}</div> : null}
                    </li>
                </ul>
            </div>
            {toogleMenu && <HeaderMenu />}
            {toggle && <Menu />}
            {toggleOrders && <MyOrder changeToggleOrders={toggleOrders => setToggleOrders(!toggleOrders)} />}
        </nav>
    );
}

export default Header;
