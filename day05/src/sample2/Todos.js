import { useRef, useState } from 'react';
import './Todos.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Todos = () => {

    const [ data , setData ] = useState([
        {id:1, text:'친구만나기', isChk:true },
        {id:2, text:'저녁먹기', isChk:false },
        {id:3, text:'토요일입니다.', isChk:false },
    ])
    const no = useRef(4)

    //제거
    const onDel = (id) => {
        setData(data.filter( item => item.id !== id ))
    }

    //갱신
    const onToggle = (id) => {
        setData(data.map( item => item.id === id ?
                    {...item, isChk: !item.isChk} : item ))
    }

    //추가
    const onAdd = ( text ) => {
        setData([
            ...data,
            {
                id: no.current++,
                text,
                isChk:false
            }
        ])
    }

    return (
        <div className='Todos'>
            <h1>일정관리</h1>
            <TodoForm onAdd={onAdd}/>
            <TodoList data={data} onDel={onDel} onToggle={onToggle}/>
        </div>
    );
};

export default Todos;