import React, { Component } from 'react';
import './curcity.less'

// 当前城市页面
export default class Curcity extends Component{
    render(){
        return(
            <div className='curcity'>
                {/* 使用redux中传递过来的数据 */}
                当前城市：{this.props.city}
            </div>
        )
    }
}