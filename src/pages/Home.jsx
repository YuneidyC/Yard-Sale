import React, { useState } from 'react';

import ProductList from 'Containers/ProductList';
import Header from 'Components/Header';
import Intro from './Intro';

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    function onLoadFinished() {
        setIsLoaded(true);
    }

    return (
        <>
        { !isLoaded ? <Intro onLoadFinishedCb={onLoadFinished}/> :
            <>
                <Header />
                <ProductList />
            </>
        }
        </>
    );
};

export default Home;
