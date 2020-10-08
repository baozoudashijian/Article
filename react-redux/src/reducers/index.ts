import { combineReducers } from 'redux';
import token from './token';
import info from './info';

const reducer = combineReducers({
    token,
    info
});

export default reducer;