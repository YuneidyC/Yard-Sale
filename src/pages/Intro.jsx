import React, { useContext, useEffect } from "react";

import "Styles/intro.css";
import icon from "Logos/logo_yard_sale.svg";
import AppContext from 'Context/AppContext';

const Intro = ({ onLoadFinishedCb }) => {
    const { introAnimation } = useContext(AppContext);

    useEffect(() => {
        introAnimation();
        setTimeout(() => {
            const container = document.getElementsByClassName('intro')[0];
            container.style.display = 'none';
            onLoadFinishedCb();
        }, 1000);
    }, []);

    return (
        <div className="intro">
            <img src={icon} />
        </div>
    );
};

export default Intro;
