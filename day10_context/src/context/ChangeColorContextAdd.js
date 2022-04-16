import React, { createContext, useMemo, useState } from 'react';

export const ChangeColorContextAdd = createContext( null )

const ChangeColorProviderAdd = ( props ) => {

    const [color, setColor] = useState('orange')

    const onColor = (text) => {
        setColor(text)
    }

    //useMemo(()=>(),[])
    const value = useMemo(()=>({
        color, onColor
    }),[color, onColor])

    return (
        <ChangeColorContextAdd.Provider value={{ color, onColor }}>
            {props.children}
        </ChangeColorContextAdd.Provider>
    );
};

export default ChangeColorProviderAdd;