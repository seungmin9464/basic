import { useReducer } from "react"

const initialState = 0
const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + action.step
        
        case 'DECREMENT':
            return state - action.step
        
        default:
            return state
    }
}

const Test09 = () => {

    const [count1, dispatch1] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, 50)

    return (
        <div>
            <h1>10씩 증가 - 초기값 : {count1}</h1>
            <p>
                <button onClick={()=>dispatch1({type: 'INCREMENT', step: 10})}>up</button>
                <button onClick={()=>dispatch1({type: 'DECREMENT', step: 10})}>down</button>
            </p>

            <hr/>
            
            <h1>100씩 증가 - 초기값 : {count2}</h1>
            <p>
                <button onClick={()=>dispatch2({type: 'INCREMENT', step: 50})}>up</button>
                <button onClick={()=>dispatch2({type: 'DECREMENT', step: 50})}>down</button>
            </p>
        </div>
    );
};

export default Test09;