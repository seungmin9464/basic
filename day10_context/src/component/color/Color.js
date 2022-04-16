import React, { useContext } from 'react';
import { ColorContext } from '../../context/ColorContext';

const Color = () => {

    const { color, onhotPink, ontomato, onblue } = useContext(ColorContext)

    return (
        <div>
            <h1 style={{ color }}>color: {color}</h1>
            <p>
                <button onClick={() => onhotPink()}>hotpink</button>
                <button onClick={() => ontomato()}>tomato</button>
                <button onClick={() => onblue()}>blue</button>
            </p>
        </div>
    );
};

export default Color;