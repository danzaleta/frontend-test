import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '@styles/OrderItem.scss';

const OrderItem = ({ order, index }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/checkout', {state: {index}});
    }

    return (
        <div className='OrderItem'>
            <div>
                <h2>{`Order N. ${order.number}`}</h2>
                <p>{`${order.items.length} articles`}</p>
            </div>
            <Button variant="outline-secondary" onClick={() => handleClick()}>
                More details
            </Button>{' '}
        </div>
    );
};

export default OrderItem;