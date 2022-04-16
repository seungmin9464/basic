import React from 'react';

const Test9 = (props) => {

    const title = '신상명세서'
    const arr = ['최우식','김다미','김성철','김진주','유재석']
    const data = [
        {id: 1, name: '최우식'},
        {id: 2, name: '김다미'},
        {id: 3, name: '김성철'},
        {id: 4, name: '김진주'},
        {id: 5, name: '유재석'},
    ]

    return (
        <>
            <h2>{title}</h2>
            <ul>
                {/* <li>{arr를 map으로 li안에 값 출력}</li> */}
                <li>
                    {arr.map( (item, idx) => {
                        return (<li key={idx}>{item}</li>)
                    }) }
                </li>
            </ul>
            <hr/>
            {
                arr.map( (item, idx) => <li key={idx}>{item}</li> )
            }
            <hr/>
            {
                arr.map( (item, idx) => {
                    //return 필수!!
                    return(
                        <li key={idx}>
                            {item}
                        </li>
                    )
                })
            }
            <hr/>
            <ul>
                {
                    data.map( (item, index) => <li key={index}>
                        {item.id}/{item.name}
                    </li>)
                }
            </ul>

            <hr/>

        </>
    );
};

export default Test9;

/*
    반복문 JSX => for 문은 사용 불가
    객체.map(function(현재값, 인덱스, 배열){
        return (반환값)
    })

    객체.map( (현재값, 인덱스) => {
        return 반환값
    })

    객체.map(현재값 => 반환값) : 반환값이 1개 일 때 ***



    JSX 화면에 map으로 추력할 경우
    반드시 Key를 넣어야 한다.( React 권장사항)
    key : 고유번호 (중첩되면 안된다)
          ex) 주민번호

    Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다. 
    key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.
*/