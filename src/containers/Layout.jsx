import React, { useEffect, useContext } from 'react';
import useFetch from '@hooks/useFetch';
import AppContext from '@context/AppContext';
import '@styles/Layout.scss';

const Layout = ({ children }) => {
    const { setOrders } = useContext(AppContext);

    const API = 'https://eshop-deve.herokuapp.com/api/v2/orders';
    const TOKEN = `eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ`;

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
        console.log(filteredData)
    }, [data]);
    return (
        <div className='Layout'>{children}</div>
    );
};

export default Layout;