import axios from "axios";
import { useEffect, useState } from "react";

// ('https://jsonplaceholder.typicode.com/todos ')

const Test04 = () => {
    
    const [todo, setTodo] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [id, setId] = useState(2)
    const [num,setNum] = useState(2)

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/todos/${id}`
        axios.get(url)
            .then( res => {
                setTodo(res.data)
                setLoading(false)
                setError('')
            })
            .catch(error => {
                setTodo({})
                setLoading(true)
                setError('주소를 찾을 수 없습니다.')
            })
    },[num] )

    // const changeInput = (e) => {
    //     const { id  }  = e.target 
    //     setId( id )
    // }

    const onNum = () => {
        setNum(id)
    }

    return (
        <div>
            <p>
                <input type='text' value={id} onChange={e => setId(e.target.value)}/>
                <button onClick={onNum}>search</button>
            </p>            
            <h3>{todo.id} / {todo.title}</h3>
        </div>
    );
};

export default Test04;