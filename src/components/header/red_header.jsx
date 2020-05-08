import React, { Component } from 'react';
import './red-header.less'

export default class Red_header extends Component{
    goBack(){
       window.history.back()
    }
    render(){
        return(
            <div className='header-box'>
                <i onClick={this.goBack.bind(this)} className='iconfont icon-fanhui'></i>
                <span>{this.props.title}</span>
            </div>
        )
    }
}