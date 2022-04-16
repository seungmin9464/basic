import React, { useState } from 'react';

const Test02 = () => {

    const [data, setData] = useState([])

    const onAdd = () => {
        setData([
            ...data,
            {
                id: data.length,
                text: '김다미' + Math.floor(Math.random() * 10)
            }
        ])
    }

    return (
        <div>
            <h2>데이터 추가</h2>
            <button onClick={onAdd}>추가</button>
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

export default Test02;