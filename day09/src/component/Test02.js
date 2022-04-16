import { useEffect, useState } from "react";

const user = [
    {id: 1, name: '홍길동'},
    {id: 2, name: '유재석'},
    {id: 3, name: 'cat'},
    {id: 4, name: 'DOG'},
    {id: 5, name: 'naver'},
    {id: 6, name: '송혜교'},
    {id: 7, name: 'DAum'},
    {id: 8, name: '노홍철'},
    {id: 9, name: 'Back'},
    {id: 10, name: 'Youtube'},
]

const Test02 = () => {

    const [data, setData] = useState(user)
    const [text, setText] = useState('')
    const [search, setSearch] = useState('')

    //한글 - sql 초성 검사
    /*
    useEffect(()=>{
        setData(user.filter(item => item.name.toLowerCase().indexOf(text) !== -1))
    },[text])
    */

    useEffect(()=>{
        setData(user.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
    },[search])

    const onSearch = () => {
        setSearch(text)
    }

    return (
        <div style={{margin: 40}}>
            <input
                type='text'
                onChange={e => setText(e.target.value)}
            />
            <button onClick={onSearch}>search</button>
            <hr/>
            <ul>
                {
                    data.map(item => <li key={item.id}>
                        {item.id} / {item.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test02;