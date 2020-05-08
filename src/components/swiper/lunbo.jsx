import React, { Component } from 'react';
import './lunbo.less'
import Pagination from './Pagination';


// 自动轮播
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
// 高阶组件
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class Lunbo extends Component{
    constructor(){
        super()
        this.state={
            index:0
            // arr:[img1,img2,img3,img4,img5]
        }
    }
    // 获取到当前的下标 设置到state的index上
    handleChangeIndex=(index)=>{
        // console.log(index)
        this.setState({
            index
        });
    }
    // 传递给Pagination组件的一个事件 （修改对应的页面的）
    getIndex=(cs)=>{
        console.log(cs)
        this.setState({
            index:cs
        })
    }

    
    render(){
        return(
            <div className='lunbo'>
                <AutoPlaySwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
                    {/* 渲染div就冲数据中取 */}
                    {this.props.arr && this.props.arr.length>0 
                      ?
                     this.props.arr.map((ele,index)=>(
                    <div key={index}><img src={ele}/></div>))
                      :
                    <div>暂无数据...</div>
                }
                 </AutoPlaySwipeableViews>
                 {/* 把有几个圆点的数量长度传递过去 index作用是比较哪个当前选中 */}
                <Pagination 
                    getIndex={this.getIndex} 
                    index={this.state.index}
                    num={this.props.arr ? this.props.arr.length : 0} >
                </Pagination>
                   
            </div>
        )
    }
}