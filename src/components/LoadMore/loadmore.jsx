import React, { Component } from 'react';

export default class LoadMore extends Component{
    constructor(props){
        super(props)
         // 创建ref
         this.more = React.createRef();
        this.state={
            timer:null
        }
    }

    componentDidMount(){
        // 监听滚动事件//
        window.addEventListener('scroll',this.scrollFn)
    }
    componentWillUnmount(){//注销事件
        // 优化组件  当组件注销时 需要把全局事件取消监听，网络请求和定时器等需要进行取消  以免影响其他页面
        window.removeEventListener('scroll',this.scrollFn)
        // 清除网络请求
        this.setState=(state,callback)=>{
            return
        }
        // 清除定时器
        clearTimeout(this.state.timer)

    }

    scrollFn=()=>{
        // 先判断 '加载更多' 按钮是否存在
        let more =this.more.current;
        // console.log(more)
        if(more){// 存在 添加事件功能
            let moreHeight = more.offsetTop;// 获取more按钮距离页面顶部的高度 offsetTop

            // 获取视口高度
            let skHeight = document.documentElement.clientHeight;

            // 获取页面滚动高度
            let scrollHeight = document.documentElement.scrollTop;

            // console.log(moreHeight,skHeight,scrollHeight)

            // 到底部加载更多的判断  视口高度+页面滚动的高度>=more按钮距离页面顶部的高度
            // 加载更多只触发一次  可以使用开关控制  还可以使用 清除网络请求
            if(skHeight+scrollHeight>=moreHeight){
                // console.log('到底不了')
                if(this.state.timer){
                    clearTimeout(this.state.timer);
                    // 清除网络请求
                    this.setState=(state,callback)=>{
                        return
                    }
                }
                // var newpage = this.state.page + 1;
                // var newpage = this.props.page + 1;
                this.state.timer = setTimeout(()=>{
                    // this.getdata(this.props.keyword,newpage)
                    // this.props.getdata(this.props.keyword,newpage)

                    // 可复用性不能处理值  只调用
                    this.props.getdata()

                    console.log('加载更多...')
                },300)
            }
        }
    }
    render(){
        return(
            <div>
                <div ref={this.more}>加载更多</div> 
            </div>
        )
    }
}