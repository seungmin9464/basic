import React, { useState } from 'react';
import Test05Sub from './Test05Sub';

const Test05 = () => {
    const [isShow, setIsShow] = useState(false)
    const onToggle = () => {
        setIsShow(!isShow)
    }

    return (
        <div>
            <button onClick={onToggle}>
                {
                    isShow ? '숨기기' : '보이기'
                }
            </button>
            <hr/>
            {
                isShow && <Test05Sub/>
            }
        </div>
    );
};

export default Test05;