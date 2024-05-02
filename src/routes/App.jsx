import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import AppContext from "Context/AppContext";
import useInitialState from "Hooks/useInitialState";
import Home from "Pages/Home";
import SignUp from "Pages/SignUp";

import "Styles/main.css";

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </HashRouter>
        </AppContext.Provider>
    );
};

export default App;
