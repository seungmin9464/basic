import React, { useContext } from 'react';
import { CountContext } from '../../context/CountContext';

const Count = () => {

    const {count, increment, decrement} = useContext(CountContext)

    return (
        <div>
            <h1>Ui Count : { count }</h1>
            <button onClick={()=>increment()}>증가</button>
            <button onClick={()=>decrement()}>감소</button>
        </div>
    );
};

export default Count;