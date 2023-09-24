import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from 'Pages/Home';
import AppContext from 'Context/AppContext';
import useInitialState from 'Hooks/useInitialState';
import 'Styles/main.css';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </HashRouter>
        </AppContext.Provider>
    );
}

export default App;
