import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Orders from '@containers/Orders';
import Checkout from '@containers/Checkout';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.scss';

const App = () => {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Orders />} />
                        <Route path='/checkout' element={<Checkout />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>

    );
};

export default App;