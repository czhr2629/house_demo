import React, { Component } from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom'
import Layout from '../pages/layout';
// 动态加载
import Loadable from 'react-loadable'

/* import Home from '../pages/Home/home'
import City from '../pages/City/city'
import Lifeserver from '../pages/LifeServer/lifeserver'
import Mine from '../pages/Mine/mine'
import Shop from '../pages/Shop/shop' */

export default class MyRouter extends Component{
    render(){
        return(
            <div>
                <HashRouter>
                    <Switch>
                        {/* 没有底部导航条的 */}
                        <Route path='/city' component={Loadable({loader:()=>import('../pages/City/city'),loading:function(){return <div>loading</div>}})} />
                        {/* 搜索页面的路由 */}
                        <Route path='/search/:keyword' component={Loadable({loader:()=>import('../pages/Search/search'),loading:function(){return <div>loading</div>}})} />
                        {/* 详情页路由 */}
                        <Route path='/details/:id' component={Loadable({loader:()=>import('../pages/Details/details'),loading:function(){return <div>loading</div>}})} />
                        {/* 登录页路由 */}
                        <Route path='/login' component={Loadable({loader:()=>import('../pages/Login/login'),loading:function(){return <div>loading</div>}})} />
                        {/* 订单评论页路由 */}
                        <Route path='/order/:user' component={Loadable({loader:()=>import('../pages/AllOrder/allorder'),loading:function(){return <div>loading</div>}})} />
                        
                        <Layout path='/'>
                            {/* 动态加载路径 */}
                            <Route exact path='/' component={Loadable({loader:()=>import('../pages/Home/home'),loading:function(){return <div>loading</div>}})} />

                            <Route path='/shop' component={Loadable({loader:()=>import('../pages/Shop/shop'),loading:function(){return <div>loading</div>}})} />

                            <Route path='/lifeserver' component={Loadable({loader:()=>import('../pages/LifeServer/lifeserver'),loading:function(){return <div>loading</div>}})} />
                            
                            <Route path='/mine' component={Loadable({loader:()=>import('../pages/Mine/mine'),loading:function(){return <div>loading</div>}})} />
                        </Layout>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}