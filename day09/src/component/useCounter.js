import { useState } from "react";

//사용자 정의 훅
export const useCounter = (initialState = 10) => {

    const [state, setState] = useState(initialState)

    //증가
    const increment = () => {
        setState(state + 1)
    }

    //감소
    const decrement = () => {
        setState(state - 1)
    }

    //초기화
    const reset = () => {
        setState(initialState)
    }

    return{
        state,
        increment,
        decrement,
        reset
    }
};