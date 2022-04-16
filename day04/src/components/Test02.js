import { useRef, useState } from "react";

const Test02 = () => {

    const [form, setForm] = useState({
        userId: '',
        userPw: '',
        userEmail: ''
    })
    const {userId, userPw, userEmail} = form
    const idRef = useRef()

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const onReset = () => {
        setForm({
            userId: '',
            userPw: '',
            userEmail: ''
        })
        idRef.current.focus()
    }

    return (
        <div>
            <input type='text' onChange={handleChange} name='userId' value={userId} ref={idRef}/>
            <input type='text' onChange={handleChange} name='userPw' value={userPw}/>
            <input type='text' onChange={handleChange} name='userEmail' value={userEmail}/>
            <button onClick={ onReset }>reset</button>

            <hr/>

            <div>
                <h3>아이디: { userId }</h3>
                <h3>패스워드: { userPw }</h3>
                <h3>이메일: { userEmail }</h3>
            </div>
        </div>
    );
};

export default Test02;