import { useState } from "react";

const Test04 = () => {

    const datalist = [
        {id:1, name:'김다미'},
        {id:2, name:'최우식'},
        {id:3, name:'김성철'},
        {id:4, name:'김진주'},
        {id:5, name:'김도윤'},
    ]

    const [data, setData] = useState(datalist)

    //제거
    const onDel1 = () => {
        setData(data.filter(item => item.name !== '김도윤'))
    }
    const onDel2 = () => {
        setData(data.filter(item => item.id !== 3))
    }
    const onDel3 = (num) => {
        setData(data.filter(item => item.id !== num))
    }

    //추가
    const onAdd1 = () => {
        setData(data.concat({
            id: 6, name: '강호동'
        }))
    }
    const onAdd2 = () => {
        setData([
            ...data,
            {
                id: 7,
                name: '유재석'
            }
        ])
    }
    const onAdd3 = () => {}

    //수정
    const onMod1 = () => {
        setData(data.map(item => {
            if(item.id === 1){
                return{
                    ...item,
                    name: '송혜교'
                }
            } else {
                return item
            }
        }))
    }
    const onMod2 = () => {
        setData(data.map(item => item.name === '김진주' ? 
                            {...item, name: '노홍철'} : item))
    }
    const onMod3 = (id) => {
        setData(data.map(item => item.id === id ? 
                            {...item, name: '아무개'} : item))
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

            <p>
                <button onClick={ onDel1 }>삭제</button>
                <button onClick={ onDel2 }>삭제</button>
                <button onClick={ () => onDel3(1) }>삭제</button>
                <button onClick={ () => onDel3(4) }>삭제</button>
            </p>

            <p>
                <button onClick={ onAdd1 }>추가</button>
                <button onClick={ onAdd2 }>추가</button>
                <button onClick={ onAdd3 }>추가</button>
            </p>
            
            <p>
                <button onClick={ onMod1 }>수정</button>
                <button onClick={ onMod2 }>수정</button>
                <button onClick={ () => onMod3(3) }>수정</button>
            </p>
        </div>
    );
};

export default Test04;