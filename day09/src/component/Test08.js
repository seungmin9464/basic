import { useReducer } from "react"

const initialState = 0

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return 10
        
        case 'DECREMENT' :
            return 100
        
        case 'RESET' :
            return 0

        default:
            return state
    }
}

const Test08 = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>up : INCREMENT</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>down : DECREMENT</button>
            <button onClick={() => dispatch({type: 'RESET'})}>reset : RESET</button>
        </div>
    );
};

export default Test08;

/*
    useReducer는 useState의 대체 함수

    (state, action) => newState의 형태로 reducer를 받고 (필수)
    dispatch 메서드와 짝의 형태로 현재 state를 반환합니다. 

    const [state, dispatch] = useReducer(reducer, initialState);

    (Redux에 익숙하다면 이것이 어떻게 동작하는지 여러분은 이미 알고 있을 것입니다.)

    다수의 하윗값을 포함하는 복잡한 정적 로직을 만드는 경우나 다음 state가 이전 state에 의존적인 경우에 보통 useState보다 useReducer를 선호합니다. 또한 
    
    useReducer는 자세한 업데이트를 트리거 하는 컴포넌트의 성능을 최적화할 수 있게 하는데, 
    이것은 콜백 대신 dispatch를 전달 할 수 있기 때문입니다.

    const [state, dispatch] = useReducer(reducer, initialState);
    state : 상태데이터(이름 임의)
    dispatch : 액션을 발생시키는 함수(액션을 보내는 곳, 액션 전달자)
    reducer : 상태분리함수( 이름 임의 ) - 상태업데이트 로직을 담은 함수
    initialState : 초기값

    useReducer(상태업데이트로직을 담은 함수, 초기값)

    >>> dispatch({type: 'decrement'}
    dispatch({type: '액션명'})

    1. type 필수 - 액션명(별칭, 별명) 소문자, 한글도 가능하나 주로 상수형로(대문자로)작성한다.

    dispatch({type: '액션명', 키: 값, 키: 값})

    action.type, action.키


    상태업데이트로직
    function 함수명(state, action) {
        switch (action.type) {
            case '액션명':
                return 넘겨질 값;
            
            default: 반드시 존재해야 한다. redux 에러발생(아무것도 안나온다.)
                return state
        }
    }

*/