import { useCallback, useState } from "react";

const Test04 = () => {

    const [count,setCount] = useState(1)

    const ran = Math.random()

    const incre = useCallback(() => {
        console.log(ran)
        setCount(c => c + 1)
    },[count])
    const decre = useCallback(() => {
        console.log(ran)
        setCount(c => c - 1)
    },[count])

    return (
        <div>
            <h2>count: {count}</h2>
            <p>
                <button onClick={incre}>up</button>
                <button onClick={decre}>down</button>
            </p>
        </div>
    );
};

export default Test04;