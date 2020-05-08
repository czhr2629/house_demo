import React from 'react';
import ReactDOM from 'react-dom';
// 使用初始化css的样式
import './static/css/common.less'
// 字体图标生效
import './static/font/iconfont.css'
import MyRouter from './router/myrouter';
// react 和 redux  关联
import {Provider} from 'react-redux'
import store from './store/stroe'

// 把本地存储的数据存储到redux中  需要在一个永远会执行的页面中加载（index或者是MyRouter）
// 再index中写的话不用导出   直接使用store中的dispatch属性进行存储
// 引入action
import  setcity1 from './store/action/cityAction'
import  setkeyword2 from './store/action/searchAction'
import  setuser3 from './store/action/userAction'
// 从本地取数据
let user =localStorage.getItem('react_user')
let city =localStorage.getItem('react-city')
let keyword =localStorage.getItem('react-keyword')
// 设置到redux上 
if(city){
    store.dispatch(setcity1(city))
}
if(keyword){
    store.dispatch(setkeyword2(keyword))
}
if(user){
    store.dispatch(setuser3(user))
}
// 这样store中就有数据了

ReactDOM.render(<Provider store={store}> <MyRouter /> </Provider>, document.getElementById('root'));

