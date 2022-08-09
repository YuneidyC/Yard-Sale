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
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
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
            <img src={menu} alt="menu" className="menu" onClick={() => setToggleMenu(!toogleMenu)} role="button" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
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
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        platzi@example.com
                    </li>
                    <li
                        className="navbar-shopping-cart"
                        onClick={() => setToggleOrders(!toggleOrders)}
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
