import React, { Component } from 'react';
import HomeHeader from './components/header/home-header';
import Lunbo from '../../components/swiper/lunbo';
import Product from './components/product/product';

// 引入本地图片  方法
import img1 from '../../static/images/11.jpg'
import img2 from '../../static/images/22.jpg'
import img3 from '../../static/images/33.jpg'
import img4 from '../../static/images/44.jpg'
import img5 from '../../static/images/55.jpg'

export default class Home extends Component{
    constructor(){
        super()
        this.state={
            arr:[img1,img2,img3,img4,img5]
        }
    }
    render(){
        return(
            <div>
                {/* 头部 */}
                <HomeHeader />
                
                {/* 轮播图 */}
                <Lunbo arr={this.state.arr} />

                {/* 产品 2个*/}
                <Product title='热销单品' />
                <Product title='家庭常用'/>
            </div>
        )
    }
}