import React, { useMemo, useState } from 'react';
import Test07Sub from './Test07Sub';

const Test07 = () => {

    const [count, setCount] = useState(1)
    const increment = () => {
        setCount ( count + 1 )
    }

    //사용자정의 함수
    const testSub = useMemo(() => {
        return <Test07Sub/>
    },[count])

    return (
        <div>
            <h1>출력 : {count}</h1>
            <button onClick={increment}>증가</button>
            <hr/>
            {testSub}
        </div>
    );
};

export default Test07;