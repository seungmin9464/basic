import React, { useRef, useState } from 'react';

const Test03 = () => {

    const [data, setData] = useState([])
    const names = '김다미,최우식,전지현,강호동,유재석,김진주,이효리,김나은,하하, 송혜교,화사,이승기,송소희'.split(',')

    const no = useRef(1)

    const onAdd = () => {
        const ran = Math.floor(Math.random() * names.length)
        setData([
            ...data,
            {
                id: no.current++,
                text: names[ran]
            }
        ])
    }

    return (
        <div>
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

export default Test03;