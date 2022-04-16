//액션생성
const INCREMENT = 'count/INCREMENT'
const DECREMENT = 'count/DECREMENT'

//액션 내보내기
export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })


//초기값

const initialState = {
    num : 0
}

//리듀서

const reducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return{
                num: state + 1
            }
        case DECREMENT:
            return{
                num: state - 1
            }
        default:
            return state
    }
}

export default reducer