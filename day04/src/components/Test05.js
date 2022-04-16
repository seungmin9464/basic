import { useState } from 'react';
import Test05Sub from './Test05Sub';

const Test05 = () => {

    const datalist = [
        {id:1, name:'김다미'},
        {id:2, name:'최우식'},
        {id:3, name:'김성철'},
        {id:4, name:'김진주'},
        {id:5, name:'김도윤'},
    ]
    const [data, setData] = useState(datalist)
    
    const onDel = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const onAdd = (name) => {
        setData([...data, {id: 6, name}])
    }

    const onMod = (id) => {
        setData(data.map(item => item.id === id ? 
                    {...item , name: '강호동'} : item))
    }

    return (
        <div>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id} / {item.name}
                    </li>)
                }
            </ul>
            <Test05Sub onDel={onDel} onAdd={onAdd} onMod={onMod} />
        </div>
    );
};

export default Test05;