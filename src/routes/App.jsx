import React from 'react';
// HashRouter
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'Pages/Home';
import AppContext from 'Context/AppContext';
import useInitialState from 'Hooks/useInitialState';
import 'Styles/main.css';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
