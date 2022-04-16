import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test01 = () => {

    const [data, setData] = useState([])


    useEffect( () => {
        const getData = async() => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setData(res.data)
        }
        getData()
    },[] )


    /*
    useEffect( () => {
        const getData = async() => {
            const res = await  fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await res.json()
            setData(data)
        }
        getData()
    },[] )
    */

    /*
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        // .then( res => console.log(res) )

        .then( res => setData(res.data) )
    }, [] )
    */

    /*
    useEffect( () => {
        fetch.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => res.setData(res))
    },[] )
    */

    return (
        <ul>
           {
               data.map(item => <li key={item.id}>
                   {item.id} / {item.title}
               </li>)
           } 
        </ul>
    );
};

export default Test01;

/*
    비동기 통신 - Ajax
    서버에 새로고침 없이 요청할 수 있게 도와줌
    서버로 네트워크 요청을 보내고 응답을 받을 수 있도록 해줌

    1. JQUERY - $.ajax()
    2. js - fetch() - 한정적 - JSON 형식으로 가져온다
    3. 설치 - axios.get() - 선호 ( 개발단 ) - Object형식으로 가져온다

    fetch(데이터 요청 url, [options])
    

    fetch(url)
    .then(콜백) - 응답완료
    .catch(콜백) - 응답실패


    axios.get(url)
    .then(콜백) - 응답 성공
    .catch(콜백) - 응답 실패
*/