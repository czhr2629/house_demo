import React, { Component } from 'react';
import './listitem.less'

export default class ListItem extends Component{
    // 展示数据
    render(){
        // console.log(this.props.item);
        let data = this.props.item
        // let data = this.props.data
        return(
            <div className='search-box'>
                <div className='search-img'>
                    <img src={data.img} alt=""/>
                </div>
                <div className='search-desc'>
                    <div className='desc-left'>
                        <p className='left-p1'>{data.title}</p>
                        <p className='left-p2'>{data.houseType}</p>
                    </div>
                    <div className='desc-right'>
                        <p className='right-p1'>{data.rentType}</p>
                        {/* 渲染带标签的数据 */}
                        <p className='right-p2' dangerouslySetInnerHTML={{"__html":data.price+'/月'}}></p>
                        {/* <p>{data.price}</p> */}
                    </div>
                </div>
            </div>
        )
    }
}