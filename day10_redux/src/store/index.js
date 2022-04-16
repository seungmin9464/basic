import { combineReducers  } from 'redux'
import color from './modules/color'
import count from './modules/count'

//리듀서 합치기
export default combineReducers ({
    color,
    count
})