import React, { createContext, useMemo, useState } from 'react';

//1. 전체 상태 관리자 생성하기

//export const 관리자명
export const CountContext = createContext(null)

//컴포넌트명
const CountProvider = ( props ) => {

    //모든 생각, 표현

    const [count, setCount] = useState(0)
    const increment = () => {
        setCount( count + 1 )
    }
    const decrement = () => {
        setCount( count - 1 )
    }

    useMemo(()=>(
        { count, increment, decrement }
    ),[ count, increment, decrement ])

    return (
        <CountContext.Provider value={{ count, increment, decrement }}>
            { props.children }
            {/* ui design - <Count> */}
        </CountContext.Provider>
    );
};

export default CountProvider;