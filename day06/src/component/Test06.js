import React, { useEffect, useState } from 'react';

const Test06 = () => {

    const [count, setCount] = useState(1)

    useEffect(()=>{
        console.log('useEffect')
        const timer = setInterval(()=>{
            setCount(state => state + 1)
        }, 1000)

        return () => {
            console.log('뒷정리')
            clearInterval(timer)
        }
    },[])

    return (
        <div>
            <h1>count : {count}</h1>
        </div>
    );
};

export default Test06;