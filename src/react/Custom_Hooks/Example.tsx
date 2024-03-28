'use client'

import React, { useState, useEffect } from 'react'


const Home = () => {
    const { value, handleClick, data } = useHome()
    return (
        <div>
            {value && <p>true</p>}
            {data && <p>Dados recuperados</p>}
            <button onClick={handleClick}></button>
        </div>
    )
}

const useHome = () => {
    const [value, setValue] = useState<boolean>(false)
    const [data, setData] = useState(null)

    const handleClick = () => {
        setValue(!value)
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('`https://api.github.com/users/JhonItalo/repos`');
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    return {
        value, handleClick, data
    }
}
export default Home
