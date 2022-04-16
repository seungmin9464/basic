import React, { createContext, useMemo, useState } from 'react';

export const ColorContext = createContext( null )

const ColorProvider = ( props ) => {

    const [color, setColor] = useState('orange')
    const onhotPink = () => {setColor('hotpink')}
    const ontomato = () => {setColor('tomato')}
    const onblue = () => {setColor('blue')}


    useMemo(()=>(
        { color, onhotPink, ontomato, onblue }
    ),[ color, onhotPink, ontomato, onblue ])

    return (
        <ColorContext.Provider value={{ color, onhotPink, ontomato, onblue }}>
            {props.children}
        </ColorContext.Provider>
    );
};

export default ColorProvider;