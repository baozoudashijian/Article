import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';

// 传递第二个参数错的更离谱.
// @ts-ignore
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store