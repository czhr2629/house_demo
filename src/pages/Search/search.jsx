import React, { Component } from 'react';
import Searchheader from './SearchHeader/searchheader';
import SearchList from './SearchList/searchlist';

export default class Search extends Component{
    /* constructor(){
        super()
        this.state={
            list:[],//请求到的数据
            hasMore:false//是否还有更多数据
        }
    }
    componentDidMount(){
        // 路由管理的props身上有一个match属性有一个params属性可以获取到跳转页面所带的值
        // console.log(this.props.match)
        let keyword = this.props.match.params.keyword;
        fetch('http://localhost:4000/searchinfo?keyword='+keyword)
        .then(res=>(res.json()))
        .then(data=>{
            console.log(data);
            this.setState({
                list:data.data,
                hasMore:data.hasMore
            })
        })
    } */
    render(){
        return(
            <div>
                {/* 导航进入后的页面 --------------*/}
                {/* 头部导航 */}
                <Searchheader />
                {/* 获取到的列表信息  有数据在渲染*/}
                {/* {this.state.list.length>0 ? <SearchList data={this.state.list} hasMore={this.state.hasMore}/> : <div>数据请求中....</div>} */}
                <SearchList keyword={this.props.match.params.keyword} />

            </div>
        )
    }
}