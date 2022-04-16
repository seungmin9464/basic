import { useReducer } from "react"

const initialState = {
    width: 150
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'PLUS':
            return {
                width: state.width + action.step
            }
        case 'MINUS':
            return {
                width: state.width - action.step
            }
        case 'RESET':
            return {
                width: 150
            }
        default:
            return state
    }
}


const Test10 = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div style={{margin: 20}}>
            <div style={{
                width: state.width,
                height: 100,
                backgroundColor: 'tomato',
                transition: '0.3s'
            }}>
            </div>
            <p>
                <button onClick={()=>dispatch({type: 'PLUS', step: 50})}>50씩 증가 : PLUS</button>
                <button onClick={()=>dispatch({type: 'MINUS', step: 30})}>30씩 감소 : MINUS</button>
                <button onClick={()=>dispatch({type: 'RESET'})}>100초기화 : RESET</button>
            </p>
        </div>
    );
};

export default Test10;