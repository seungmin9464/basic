import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {red, blue, yellow} from '../../store/modules/color'

const Color = () => {

    // const color = useSelector( state => state.리듀서파일명.상태데이터 )
    const color = useSelector( state => state.color.color )
    const dispatch = useDispatch

    return (
        <div>
            <h1 style={{ color: color }}>색:{ color }</h1>
            <p>
                <button onClick={() => dispatch(red())}>red</button>
                <button onClick={() => dispatch(blue())}>blue</button>
                <button onClick={() => dispatch(yellow())}>yellow</button>
            </p>
        </div>
    );
};

export default Color;