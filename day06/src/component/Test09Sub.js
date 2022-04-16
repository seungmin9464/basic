import { useEffect, useState } from "react";

const Test09Sub = () => {
    
    const [now, setNow] = useState(new Date())
    
    useEffect(()=>{
        console.log('start')
        const timer = setInterval(()=>{
            setNow(new Date())
        }, 1000)

        return()=>{
            console.log('stop')
            clearInterval(timer)
        }
    }, [])


    return (
        <div>
            <h2> 날짜 : { now.toLocaleDateString() } </h2>
            <h2> 시간 : { now.toLocaleTimeString() } </h2>
        </div>
    );
};

export default Test09Sub;