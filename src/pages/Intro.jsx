import React, { useContext, useEffect } from "react";

import AppContext from "Context/AppContext";
import icon from "Logos/logo_yard_sale.svg";

import "Styles/intro.css";

const Intro = ({ onLoadFinishedCb }) => {
    const { introAnimation } = useContext(AppContext);

    useEffect(() => {
        introAnimation();
        setTimeout(() => {
            const container = document.getElementsByClassName("intro")[0];
            container.style.display = "none";
            onLoadFinishedCb();
        }, 1000);
    }, []);

    return (
        <div className="intro">
            <img src={icon} alt="Intro logo" />
        </div>
    );
};

export default Intro;
