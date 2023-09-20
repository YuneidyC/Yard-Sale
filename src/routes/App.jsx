import React from 'react';
// HashRouter
import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'Pages/Home';
import AppContext from 'Context/AppContext';
import useInitialState from 'Hooks/useInitialState';
import 'Styles/main.css';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter basename="/Yard-Sale">
                <Route exact path="/" component={Home} />
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;
