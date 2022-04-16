import React, {useRef, useState} from 'react'
import FriendInput from './FriendInput';
import FriendList from './FriendList';
import dataList from '../assets/api/friendData';
import './style.css'


const Friend = () => {

    const [data, setData] = useState(dataList)
    const no = useRef(dataList.length + 1)

    //제거
    const onDel = ( id ) => {
        setData( data.filter(item => item.id !== id) )
    }

    //모두제거
    const onRemove = () => {
        setData([])
    }

    //초기복구
    const onRestore = () => {
        setData(dataList)
    }

    const onAdd = (form) => {
        form.id = no.current++
        setData([
            ...data,
            form
        ])
    }

    return (
        <div className='wrap'>
            <h1>친구들 총 인원</h1>
            <FriendList data={data} onDel={onDel}/>

            <div className='btn'>
                <button onClick={ onRemove }>모두삭제</button>
                <button onClick={ onRestore }>초기복구</button>
            </div>

            <FriendInput onAdd={onAdd}/>            
        </div>
    );
};

export default Friend;