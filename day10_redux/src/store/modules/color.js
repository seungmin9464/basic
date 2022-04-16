//1 액션 생성
// const 변수 = '파일명/액션명' - 액션명이 다른 프로젝트와 중복될 수 있다.
const RED = 'color/red'
const Blue = 'color/blue'
const Yellow = 'color/yellow'

//dispatch({type: AAA}) -> dispatch( aaa() )
//dispatch({type: AAA , 값}) -> dispatch( aaa(값) )

export const red = () => ({ type: RED })
export const blue = () => ({ type: Blue })
export const yellow = () => ({ type: Yellow })

//초기값
const initialState = {
    color: 'orange'
}

//리듀서 - 순수함수
const reducer = (state = initialState, action) => {
    switch(action.type){
        case RED:
            return {
                color: 'red'
            }
        case Blue:
            return {
                color: 'blue'
            }
        case Yellow:
            return {
                color: 'yellow'
            }
        default:
            return state
    }
}
export default reducer