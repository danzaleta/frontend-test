import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '@styles/OrderItem.scss';

const OrderItem = ({ order }) => {
    const navigate = useNavigate();

    return (
        <div className='OrderItem'>
            <div>
                <h2>{`Order N. ${order.number}`}</h2>
                <p>{`${order.items.length} articles`}</p>
            </div>
            <Button variant="outline-secondary" onClick={() => navigate('/checkout')}>
                More details
            </Button>{' '}
        </div>
    );
};

export default OrderItem;