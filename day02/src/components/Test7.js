import React from 'react';
import Test7Sub from './Test7Sub';

const Test7 = (props) => {
    return (
        <>
            <Test7Sub 
                name = '강호동'
                age = {20}
                addr = '서울'
                tel = '010-0000-0000'
                done = { true }
                color = 'tomato'
            />
            <hr/>
            <Test7Sub 
                name = '김철수'
                age = { 16 }
                addr = '제주'
                color = 'orange'
                bgColor = 'teal'
            />
            <hr/>
            <Test7Sub 
                name = '홍록기'
                age = { 45 }
                addr = '강원도'
                color = 'gray'
                bgColor = 'hotpink'
            />
        </>
    );
};
export default Test7;