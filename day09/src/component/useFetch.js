//사용자 정의 훅
//useFetch.js

import React, { useEffect, useState } from 'react';

export const useFetch = (url) => {
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setData(res)
            setLoading(true)
            setError(null)
        })
        .catch(error => {
            setError(error)
        })
    },[url])

    return {
        data,
        error,
        loading
    }
};