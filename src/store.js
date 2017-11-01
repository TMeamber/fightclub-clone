import {createStore, applyMiddleware} from 'redux';
import promiseMiddleWare from 'redux-promise-middleware';
import reducer from './ducks/users';



export default createStore(reducer, applyMiddleware(promiseMiddleWare()));