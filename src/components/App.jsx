import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Orders from '@containers/Orders';
import Checkout from '@containers/Checkout';
import useFetch from '@hooks/useFetch';
import '@styles/global.scss';

const API = 'https://eshop-deve.herokuapp.com/api/v2/orders';
const TOKEN = `eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ`;

const App = () => {
    const [orders, setOrders] = useState([]);
    const { data } = useFetch(API, TOKEN);

    useEffect(() => {
        const filteredData = data.map((object) => {
            return {
                number: object.number,
                items: object.items.map((item) => {
                    return {
                        sku: item.sku,
                        name: item.name,
                        quantity: item.quantity,
                        price: item.price
                    }
                })
            }
        });

        setOrders(filteredData);
    }, [data]);

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Orders orders={orders} />} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;