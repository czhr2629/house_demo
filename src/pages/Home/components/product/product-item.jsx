import React, { Component } from 'react';
import './product-item.less'

export default class ProductItem extends Component{
    render(){
        //首页的产品信息 一个图片  一个标题
        return(
            <div className='item'>
                <img src={this.props.data.img} alt=""/>
                <p>{this.props.data.title}</p>

            </div>
            
        )

    }
}