import { useRef, useState } from "react";

const FriendInput = ({ onAdd }) => {

    const [form, setForm] = useState({
        name: '',
        age:'',
        image:''
    })
    const {name, age, image} = form
    const textRef = useRef()

    const changeInput = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(!name || !age || !image) return
        onAdd(form)
        setForm({
            name:'',
            age:'',
            image:''
        })
        textRef.current.focus()
    }

    return (
        <form className="formadd" onSubmit={ onSubmit }>
            <p>
                <label>
                    이름
                </label>
                <input 
                    type='text' 
                    value={name} 
                    name='name'
                    onChange={ changeInput }
                    ref={ textRef }
                />
            </p>

            <p>
                <label>
                    나이
                </label>
                <input 
                    type='text' 
                    value={age} 
                    name='age'
                    onChange={ changeInput }
                />
            </p>

            <p>
                <label>
                    사진
                </label>
                <input 
                    type='text' 
                    value={image} 
                    name='image'
                    onChange={ changeInput }
                />
            </p>

            <p>
                <button type="submit">
                    추가
                </button>
            </p>
        </form>
    );
};

export default FriendInput;