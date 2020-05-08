import React, { Component } from 'react';
import './home-header.css'
import {Link} from 'react-router-dom'
// 关联redux
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import SearchInput from '../../../../components/SearchInput/searchinput';

class HomeHeader extends Component{
    
    toOrder(){
        // 从redux中读取  判断是否登陆过
       if(this.props.user){ //有user就.
           //登陆过跳转到全部订单页面 工作中的用户都需要存储到数据库  现在模拟的只携带一个用户名
           this.props.history.push('/order/'+ this.props.user);
       } else{
        //   没有登陆过跳就转到登录页面
            this.props.history.push('/login')
       }
    }
    render(){
        // console.log(this.props)
        return(
            <div className='HomeHeader'>
                <div className='city'>
                    {/* 也可以给div添加点击事件 使用编程式导航 props身上有history身上有push方法 */}
                    <Link to='/city' className='link'>
                        {this.props.homecity}
                        <i className='iconfont icon-xiala'></i>
                    </Link>
                </div>
                {/* 搜索的组件 */}
                <div className='search'>
                    <SearchInput />
                </div>

                <div className='pinglun' onClick={this.toOrder.bind(this)}>
                    <i className='iconfont icon-pinglun'></i>
                </div>
            </div>
        )
    }
}
// 获取数据mapStatToProps
function mapStatToProps(state){
    // console.log(state)//传递过来的城市
    return{
        homecity : state.city,
        user:state.user
    }
}
// withRouter 只有通过路由定义的才有history
export default connect(mapStatToProps)(withRouter(HomeHeader))