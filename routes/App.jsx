import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/main.css';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter basename="/Yard-Sale">
                <Route exact path="/">
                    <Home />
                </Route>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
