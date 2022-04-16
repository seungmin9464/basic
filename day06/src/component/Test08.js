import { useEffect, useState } from "react";

const Test08 = () => {
    const [count, setCount] = useState(0)
    const [isActive, setIsActive] = useState(false)
    
    const onToggle = () => {
        setIsActive( !isActive )
    }

    const onReset = () => {
        setCount(0)
        setIsActive(false)
    }

    useEffect(()=>{
        let timer = null
        if(isActive){
            timer = setInterval(()=>{
                setCount(count => count + 1)
            }, 1000)
        } else {
            clearInterval(timer)
        }

        return()=>{
            console.log('뒷정리')
            clearInterval(timer)
        }
    },[isActive])

    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={onToggle}>
                {
                    isActive ? ' stop' : 'start'
                }
            </button>
            <button onClick={onReset}>reset</button>            
        </div>
    );
};

export default Test08;