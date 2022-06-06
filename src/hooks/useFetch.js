import { useState, useEffect } from 'react'
import axios from 'axios';

const useFetch = (API, TOKEN) => {
    const [data, setData] = useState([]);

    const config = {
        headers: {
            'Authorization': `Bearer ${TOKEN}`
        }
    }

    const fetchData = async () => {
        const response = await axios.get(API, config);
        setData(response.data.orders);
        console.log(response.data.orders);
    }

    useEffect(() => {
        fetchData();
    }, [API])

    return { data };
};

export default useFetch;