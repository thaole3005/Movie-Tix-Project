import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer';
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer';
import { PopupReducer } from './reducers/PopupReducer';

const rootReducer = combineReducers({
    //các state ứng dụng
    QuanLyPhimReducer,
    QuanLyRapReducer,
    PopupReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))