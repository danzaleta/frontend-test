import { useState } from 'react'

const useInitialState = () => {
    const [orders, setOrders] = useState([]);

    const AddProduct = (object, index) =>{
        const newData = orders;
        newData[index].items.push(object);
        setOrders(newData);
    }

    return {
        orders, setOrders,
        AddProduct
    }
}

export default useInitialState;