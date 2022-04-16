import { useState } from "react";
import { useFetch } from "./useFetch";

const Test14 = () => {

    const [btn, setBtn] = useState('posts')
    const [list, setList] = useState(['posts', 'todos', 'photos'])
    const {data, error, loading} = useFetch(`https://jsonplaceholder.typicode.com/${btn}`)

    const onShow = (text) => {
        setBtn(text)
    }

    return (
        <div>
            <h1>{btn} data list</h1>

            {
                list.map(item => <button key={item} onClick={()=>onShow(item)}>
                    {item}
                </button>)
            }

            { !loading && <div>loading...</div> }
            {data && data.map(item => <p key={item.id}>
                {item.id} / {item.title}
            </p>)}
        </div>
    );
};

export default Test14;