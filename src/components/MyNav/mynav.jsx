import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import './mynav.less'


export default class Mynav extends Component{
    constructor(){
        super()
        this.state={
            nowhash:''
        }
    }
    // 实现高亮   需要使用 生命周期函数
    componentDidMount(){
        // 页面加载完成，就需要是知道当前哪个路由页面被选中
        // console.log(window.location.hash)//window.location中有hash里面存储的是当前页面的路径 但是有一个#在最前面 进行截取处理

        let nowhash =window.location.hash.slice(1)
        this.setState({
            nowhash:nowhash
        })
    }
   /*  // 页面更新完成的钩子函数 由props和state更新触发（组件更新才可以）  重新获取hash值 在设置到this.state上 避免state一直更新后死循环 高亮显示到对应的上面
    componentDidUpdate(prveProps,prevState){//获取上次数据状态
        // 如果hash值没有变就不需要更新  避免死循环

        // 当上一次的nohash和当前获取到的hash不一致时在设置到state中
        let nowhash =window.location.hash.slice(1)
        
        if(nowhash != prevState.nowhash){//prevState没改变就不更改state
            this.setState({
                nowhash
            },function(){
                console.log(this.state);
            })

        }
    } */
    // 自己定义一个函数实现高亮   上面的生命周期函数不行  点击谁传它的值
    selectKey(cs){//函数bind的第二个参数携带数据cs接收
        console.log('zhixingle',this,cs)

        if(cs != this.state.nowhash){ //地址不相等才修改数据
            this.setState({
                nowhash:cs
            },function(){
                console.log(this.state);
            })
        }

    }

    render(){
        return(
            <div className='navbox'>
                <div>
                    {/* 动态添加类名 */}
                    <NavLink onClick={this.selectKey.bind(this,'/')} className={this.state.nowhash === '/' ? 'active' : ''} exact to='/'>
                        <i className='iconfont icon-shouye'></i><br/>
                        首页
                    </NavLink>
                </div>

                <div>
                    <NavLink onClick={this.selectKey.bind(this,'/shop')} className={this.state.nowhash === '/shop' ? 'active' : ''} to='/shop'>
                        <i className='iconfont icon-shangcheng'></i><br/>
                        商城
                    </NavLink>
                </div>

                <div>
                    <NavLink onClick={this.selectKey.bind(this,'/lifeserver')} className={this.state.nowhash === '/lifeserver' ? 'active' : ''} to='/lifeserver'>
                        <i className='iconfont icon-fuwu'></i><br/>
                        生活服务
                    </NavLink>
                </div>

                <div>
                    <NavLink onClick={this.selectKey.bind(this,'/mine')} className={this.state.nowhash === '/mine' ? 'active' : ''} to='/mine'>
                        <i className='iconfont icon-wodedangxuan'></i><br/>
                        我的
                    </NavLink>
                </div>
            
            </div>
        )
    }
}