// redux 存储数据
import {createStore} from 'redux'
import rootReducer from './reducers/indexReducer'

const store =createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store