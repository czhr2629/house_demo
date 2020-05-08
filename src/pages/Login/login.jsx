import React, { Component } from 'react';
import {connect} from 'react-redux'
import setuser from '../../store/action/userAction'

class Login extends Component{
    constructor(){
        super()
        this.state={
            username :''
        }
    }
    cname(e){
        this.setState({
            username:e.target.value
        })
    }
    clickme(){
        if(this.state.username){//有值就登陆  还要返回上层页面
            // 登陆成功 点击按钮 把用户名存储redux中
            this.props.setuser(this.state.username)

            // 把用户名存储到本地
            localStorage.setItem('react_user',this.state.username)
            
            //返回上一页面
            this.props.history.goBack()
        }else{
            alert('用户名不能为空')
        }
    }
    render(){
        return(
            <div>
                用户名：<input type="text" value={this.state.username} onChange={this.cname.bind(this)}  />
                <div>
                    <button onClick={this.clickme.bind(this)}>登录</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        user:state.user
    }
}
function mapDispatchToProps(dispatch){
    return{
        setuser:(data)=>{dispatch(setuser(data))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)