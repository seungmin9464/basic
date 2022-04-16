import React, { useRef, useState } from 'react';

const Test04 = () => {

    const [data, setData] = useState([])
    const [text, setText] = useState('')
    const no = useRef(1)

    const changeInput = (e) => {
        setText(e.target.value)
    }

    const onAdd = () => {
        setData([
            ...data,
            {
                id: no.current++,
                text: text
            }
        ])
    }

    return (
        <div>
            <input type='text' onChange={ changeInput }/>
            <button onClick={onAdd}>add</button>
            <hr/>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id} / {item.text}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test04;