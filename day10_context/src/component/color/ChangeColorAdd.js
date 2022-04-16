import React, { useContext } from 'react';
import { ChangeColorContextAdd } from '../../context/ChangeColorContextAdd';

const ChangeColorAdd = () => {

    const { color, onColor } = useContext(ChangeColorContextAdd)

    return (
        <div>
            <h1 style={{ color }}>ChangeColor: { color }</h1>
            <p>
                <button onClick={() => onColor('hotpink')}>hotpink</button>
                <button onClick={() => onColor('tomato')}>tomato</button>
                <button onClick={() => onColor('blue')}>blue</button>
                <button onClick={() => onColor('red')}>red</button>
                <button onClick={() => onColor('green')}>green</button>
                <button onClick={() => onColor('skyblue')}>skyblue</button>
            </p>
        </div>
    );
};

export default ChangeColorAdd;