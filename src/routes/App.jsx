import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import AppContext from "Context/AppContext";
import useInitialState from "Hooks/useInitialState";
import Home from "Pages/Home";

import "Styles/main.css";

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </HashRouter>
        </AppContext.Provider>
    );
};

export default App;
