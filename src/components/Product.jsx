import React from 'react';
import '@styles/Product.scss';

const Product = ({ item }) => {
    return (
        <div className='Product'>
            <h3>{`${item.name}`}</h3>
            <p>{`SKU: ${item.sku}`}</p>
            <p>{`Quantity: ${item.quantity}`}</p>
            <p>{`Price: ${item.price}`}</p>
        </div>
    );
};

export default Product;