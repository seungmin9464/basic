import { useRef, useState } from "react";

const AddUser = ({ onAdd }) => {

    const [user, setUser] = useState({
        name: '',
        addr: ''
    })
    const {name, addr} = user

    const nameRef = useRef()

    const changeInput = (e) => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name || !addr) return
        onAdd( user )
        setUser({
            name:'',
            addr:''
        })
        nameRef.current.focus()
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>스물다섯 스물하나 추가</h2>
            <p>
                <label>이름</label>
                <input 
                    type='text'
                    value={name}
                    name='name'
                    onChange={changeInput}
                    ref={nameRef}
                />
            </p>
            <p>
                <label>주소</label>
                <input
                    type='text'
                    value={addr}
                    name='addr'
                    onChange={changeInput}
                />
            </p>
            <p>
                <button>추가</button>
            </p>
        </form>
    );
};

export default AddUser;