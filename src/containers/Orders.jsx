import React, { useEffect } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Orders.scss';

const Orders = ({ orders }) => {
    useEffect(() => {
        console.log(orders);
    }, [orders]);

    return (
        <div className='Orders'>
            <h1 className='mt-5 mb-5'>ORDERS</h1>
            <div className='container'>
                {orders.map((order, index) => (<OrderItem order={order} key={index} />))}
            </div>
        </div>
    );
};

export default Orders;