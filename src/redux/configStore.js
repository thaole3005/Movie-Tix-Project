import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer';

const rootReducer = combineReducers({
    //các state ứng dụng
    QuanLyPhimReducer,
    QuanLyRapReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))