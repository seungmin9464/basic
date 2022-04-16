import React, { createContext, useState } from 'react';

export const ChangeColorContext = createContext( null )

const ChangeColorProvider = ( props ) => {

    const [color, setColor] = useState('orange')

    const onColor = (text) => {
        setColor(text)
    }

    return (
        <ChangeColorContext.Provider value={{ color, onColor }}>
            {props.children}
        </ChangeColorContext.Provider>
    );
};

export default ChangeColorProvider;