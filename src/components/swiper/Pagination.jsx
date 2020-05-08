import React, { Component } from 'react';
import './pagination.less'

// 轮播图上面的圆点
export default class Pagination extends Component{

    clickme(cs){//点到那个就显示哪个  把点击到的下标发送到页面修改下边进行切换
        // console.log('diadao'+cs);//cs点击到的下标
        this.props.getIndex(cs)//再返回给getIndex
    }
    render(){
        // 处理传递过来的数据
        let arr = new Array(this.props.num).fill(1)
        return(
            <div className='pagination'>
                {arr.map((ele,index)=>(
                    <div onClick={this.clickme.bind(this,index)} key={index} className={index === this.props.index ? 'dot active':'dot'}></div>
                ))}

            </div>
        )
    }
}