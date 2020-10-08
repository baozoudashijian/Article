import {
    SET_INFO
} from '../actions';

const defaultState = {
    username:'',
    tel: ''
}

// 这个方法的名称就是default.state的key值.
const info = (state = defaultState, action: any) => {
    switch (action.type) {
        case SET_INFO:
            console.log(state)
            return {...state, username: action.data.username, tel: action.data.tel}
        default:
            console.log(state)
            return state
    }

}
export default info;