import React, { useCallback, useState } from 'react';
import Test07Count from './Test07Count';
import Test07Title from './Test07Title';

const Test07 = () => {

    const [age, setAge] = useState(20)
    const [money, setMoney] = useState(10000)
    
    const onAge = useCallback(() => {
        setAge(age + 1)
    },[age])

    const onMoney = useCallback(() => {
        setMoney( money + 100000 )
    },[money])

    return (
        <div>
            <Test07Title />
            <Test07Count text='나이' count={age}/>
            <button onClick={onAge}>나이증가</button>
            <hr/>
            <Test07Count text='용돈' count={money}/>
            <button onClick={onMoney}>용돈증가</button>
        </div>
    );
};

export default Test07;