import React, { useState } from 'react';

const Test10 = (props) => {

    const [name, setName] = useState('아무개')
    const [age, setAge] = useState(5)
    const [color,setColor] = useState('yellow')

    const onName1 = () => {
        setName('최우식')
    }
    const onName2 = () => {
        setName('김다미')
    }
    const onName3 = () => {
        setName('김진주')
    }

    const onColor1 = () => {
        setColor('hotpink')
    }
    const onColor2 = () => {
        setColor('tomato')
    }
    const onColor3 = () => {
        setColor('skyblue')
    }

    return (
        <>
            <h2 style={{padding: 15, backgroundColor: color}}>
                이름: {name},
                나이: {age}살,
                컬러: {color}
            </h2>

            <p>
               <button onClick={ onName1 }>최우식</button> 
               <button onClick={ onName2 }>김다미</button> 
               <button onClick={ onName3 }>김진주</button> 
            </p>

            <p>
               <button onClick={ onColor1 }>hotpink</button> 
               <button onClick={ onColor2 }>tomato</button> 
               <button onClick={ onColor3 }>skyblue</button> 
            </p>

            <p>
               <button onClick={ () => setAge(30) }>30살</button> 
               <button onClick={ () => setAge(20) }>20살</button> 
               <button onClick={ () => setAge(25) }>25살</button> 
            </p>
        </>
    );
};

export default Test10;

/*
    useState : 값이 유동으로 변할 때
    React.useState
    import React, { useState } from 'react';

    const [count, setCount] = useState(0);
    const [변수, 함수] = React.useState(초기값);

    const [상태데이터, 상태데이터의 값을 변경을 도와주는 함수] = useState(초기값)
    const [상태데이터, 상태를 위한 setter함수] = useState(초기값)

    초기값 : 문자, 숫자, [], {}, 논리값 모두 가능

    const [A, B] = useState(100)
    A = 100

    B(200) => A = 200
    B(300) => A = 300

    B함수 안에는 값 또는 수식

    const [aaa,bbb] = useState(10);

    aaa = 10
*/