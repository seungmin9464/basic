import { useCounter } from "./useCounter";

const Test12 = () => {

    const {state, increment, decrement, reset} = useCounter(100)

    return (
        <div>
            <h2>사용자 정의 훅 useCounter</h2>
            <h1>count : {state}</h1>
            <p>
                <button onClick={() => increment()}>up</button>
                <button onClick={() => decrement()}>down</button>
                <button onClick={() => reset()}>reset</button>
            </p>
        </div>
    );
};

export default Test12;