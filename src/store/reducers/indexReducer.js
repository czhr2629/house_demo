// 合并多个reducer数据

import {combineReducers} from 'redux'
import CityReducer from './cityReducers';
import SearchReducer from './searchReducer';
import UserReducer from './userReducer';


const rootReducer = combineReducers({
    city:CityReducer,
    keyword:SearchReducer,
    user:UserReducer
})

export default rootReducer;