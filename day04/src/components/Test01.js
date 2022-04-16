import { useState } from "react";

const Test01 = () => {

    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')

    const handleChange1 = (e) => {
        setUserId(e.target.value)
    }
    const handleChange2 = (e) => {
        const {value} = e.target
        setUserPw(value)
    }

    return (
        <div>
            <input type='text' onChange={ handleChange1 }/>
            <input type='text' onChange={ handleChange2 }/>

            <button>확인</button>
        </div>
    );
};

export default Test01;