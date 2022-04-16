import { useState } from "react";
import Test01Sub from "./Test01Sub";

const Test01 = () => {

    const [ color , setColor ] = useState('')
    const [ food, setFood ] = useState('')

    const onColor = ( e ) => {
        const { value } = e.target 
        setColor( value )
    }

    const onFood = ( e ) => {
        const { value } = e.target 
        setFood( value )
    }


    return (
        <div style={{margin: 40}}>
            <h2>당신이 좋아하는 색은?</h2>
            <div>
                <input
                    type='text'
                    value={color}
                    onChange={ onColor }
                />
                <p>pink, tomato, skyblue, orange</p>
            </div>            

            <h2>당신이 좋아하는 음식은?</h2>
            <div>
                <p>
                    <input
                        type='radio'
                        value="갈비"
                        name='food'
                        onChange={ onFood }
                    />
                    <label>갈비</label>
                </p>
                <p>
                    <input
                        type='radio'
                        value="냉면"
                        name='food'
                        onChange={ onFood }
                    />
                    <label>냉면</label>
                </p>
                <p>
                    <input
                        type='radio'
                        value="비빔밥"
                        name='food'
                        onChange={ onFood }
                    />
                    <label>비빔밥</label>
                </p>
                <p>
                    <input
                        type='radio'
                        value="불고기"
                        name='food'
                        onChange={ onFood }
                    />
                    <label>불고기</label>
                </p>
                <hr/>
                <Test01Sub color={color} food={food}/>
            </div> 
        </div>
    );
};

export default Test01;

/*

메모이제이션 - useMemo, useCallback

메모이제이션(memoization)은 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 
이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술이다. 
동적 계획법의 핵심이 되는 기술이다. 메모아이제이션이라고도 한다.

“생성(create)” 함수와 그것의 의존성 값의 배열을 전달하세요. 

useMemo( () => {}, [] )

useMemo는 의존성이 변경되었을 때에만 메모이제이션된 값만 다시 계산 할 것입니다. 
이 최적화는 모든 렌더링 시의 고비용 계산을 방지하게 해 줍니다.

단) useMemo / useEffect ?

useMemo로 전달된 함수는 렌더링 중에 실행된다는 것을 기억하세요. 
사이드 이펙트(side effects)는 useEffect에서 하는 일이지 useMemo에서 하는 일이 아닙니다.

useMemo( () => {}, [] ) - return 값을 기억 / 의존성에 의해 재계산

React.memo(컴포넌트) : 컴포넌트의 리턴값을 기억

useCallback( () => {}, [] ) - 함수를 기억 / 의존성에 의해 재생성

*/