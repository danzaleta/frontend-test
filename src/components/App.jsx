import React from 'react';
import Layout from '@containers/Layout';
import useFetch from '../hooks/useFetch';
import '@styles/global.scss';

const API = 'https://eshop-deve.herokuapp.com/api/v2/orders';
const TOKEN = `eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ`;

const App = () => {
    const { data } = useFetch(API, TOKEN);

    return (
        <Layout>
            <div>{data.map((order, index) => (<div key={index}>{order.name}</div>))}</div>
        </Layout>
    );
};

export default App;