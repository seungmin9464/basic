import React, { useRef, useState } from 'react';

const Test05 = () => {

    const [data, setData] = useState([])
    const [form, setForm] = useState({
        text: '',
        age: ''
    })
    const {text, age} = form
    const no = useRef(1)
    const textRef = useRef()

    const changeInput = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const onAdd = (e) => {
        e.preventDefault()
        setData([
            ...data,
            {
                id: no.current++,
                text: text,
                age: age
            }
        ])
        setForm({
            text: '',
            age:''
        })
        textRef.current.focus()
    }

    return (
        <div>
            <form onSubmit={onAdd}>
                <input type='text' name='text' value={text} onChange={changeInput} ref={textRef}/>
                <input type='text' name='age' value={age} onChange={changeInput}/>
                <button type='submit'>add</button>
            </form>
            <hr/>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id} / {item.text} / {item.age}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test05;