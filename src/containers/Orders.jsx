import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext'
import '@styles/Orders.scss';

const Orders = () => {
    const { orders } = useContext(AppContext);

    return (
        <div className='Orders'>
            <h1 className='mt-5 mb-5'>ORDERS</h1>
            <div className='container'>
                {orders.map((order, index) => (<OrderItem order={order} index={index} key={index} />))}
            </div>
        </div>
    );
};

export default Orders;