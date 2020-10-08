import {
    SET_TOKEN
} from '../actions';

const defaultState = '123'

// 这个方法的名称就是default.state的key值.
const token = (state = defaultState, action: any) => {
    switch (action.type) {
        case SET_TOKEN:
            return action.data
        default:
            return state
    }

}
export default token;