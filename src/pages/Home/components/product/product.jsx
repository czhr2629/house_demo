import React, { Component } from 'react';
import ProductItem from './product-item';
import './product.less'

export default class Product extends Component{
    constructor(){
        super()
        this.state={
            result:[],
        }
    }
    // 网络请求获取数据  额本地的数据
    componentDidMount(){//页面渲染完成
        fetch('http://localhost:4000/homehot?city=beijing')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            // 把请求到的数据进行村粗  判断是什么类型的商品
            if(this.props.title === '热销单品'){
                this.setState({
                    result:data.hot1
                },function(){
                    // console.log(this.state);
                })
            }else{
                this.setState({
                    result:data.hot2
                },function(){
                    // console.log(this.state);
                })

            }
            
        })

    }
    render(){
        return(
            <div className='product'>
                <div className='product-title'>{this.props.title}</div>
                
                {this.state.result.length>0 
                ? 
                <div className='product-list'>
                    {this.state.result.map((ele,index)=>{
                        return <ProductItem key={index} data={ele} />
                    })}
                </div> 
                : 
                <div>数据请求中....</div>}



            </div>
        )

    }
}