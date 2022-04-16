import { useEffect, useReducer } from "react"
import axios from 'axios'

const initialState = {
    data: {},
    error: null,
    loading: true
}

const reducer = (action, state) => {
    switch(action.type){
        case 'SUCCESS':
            return{
                loading: false,
                error: null,
                data: action.payload
            }
        
        case 'ERROR':
            return{
                loading: true,
                error: '에러...',
                data: {}
            }
        
        default:
            return state
    }
}

const Test11 = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/3')
            .then(res => {
                dispatch({type: 'SUCCESS', payload: res.data})
            })
            .catch(error => {
                dispatch({type: 'ERROR'})
            })
    },[])

    return (
        <div>
            <h2>
                {
                    state.data && state.loading ? '로딩중...' : state.data.title
                }
            </h2>
            <p>
                {
                    state.error ? state.error : null
                }
            </p>
        </div>
    );
};

export default Test11;