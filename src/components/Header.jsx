import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';

import Menu from "Components/Menu";
import HeaderMenu from "Components/HeaderMenu";
import AppContext from "Context/AppContext";
import MyOrder from "Containers/MyOrder";
import menu from "Icons/icon_menu.svg";
import logo from "Logos/logo_yard_sale.svg";
import shoppingCart from "Icons/icon_shopping_cart.svg";
import "Styles/header.css";

const Header = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toogleMenu, setToggleMenu] = useState(false);
    const { state, getAllProductsWithCategory, getAllProducts } =
        useContext(AppContext);

    const productsCategory = (category) => {
        getAllProductsWithCategory(category);
    };

    const totalCartItems = () => {
        let totalCartItems = 0;
        state.cart.forEach((item) => {
            totalCartItems += item.qty;
        });
        return totalCartItems;
    };

    return (
        <nav>
            <img
                src={menu}
                alt="menu"
                className="menu"
                onClick={() => {
                    setToggleMenu(!toogleMenu);
                    setToggleOrders(false);
                }}
                role="button"
            />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <button
                            type="button"
                            onClick={() => {
                                getAllProducts();
                            }}
                        >
                            All
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => {
                                productsCategory(1);
                            }}
                        >
                            Clothes
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => {
                                productsCategory(2);
                            }}
                        >
                            Electronics
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => {
                                productsCategory(3);
                            }}
                        >
                            Furnitures
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => {
                                productsCategory(4);
                            }}
                        >
                            Shoes
                        </button>
                    </li>
                    <li>
                        <button
                            type="button"
                            onClick={() => {
                                productsCategory(5);
                            }}
                        >
                            Others
                        </button>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    {/* <li
                        className="navbar-email"
                        onClick={() => {
                            setToggle(!toggle);
                            setToggleOrders(false);
                        }}
                    > 
                    </li> */}
                    <li className="navbar-signin">
                        <p onClick={() => navigate('/signin')}>Sign in</p>
                    </li>
                    <li
                        className="navbar-shopping-cart"
                        onMouseDown={() => {
                            setToggleOrders(!toggleOrders);
                            setToggleMenu(false);
                            setToggle(false);
                        }}
                    >
                        <img src={shoppingCart} alt="shopping cart" />
                        {state.cart.length > 0 ? (
                            <div>{totalCartItems()}</div>
                        ) : null}
                    </li>
                </ul>
            </div>
            {toogleMenu && (
                <HeaderMenu
                    changeToggleMenu={(toogleMenu) =>
                        setToggleMenu(!toogleMenu)
                    }
                />
            )}
            {toggle && <Menu />}
            {toggleOrders && (
                <MyOrder
                    changeToggleOrders={(toggleOrders) =>
                        setToggleOrders(!toggleOrders)
                    }
                />
            )}
        </nav>
    );
};

export default Header;
