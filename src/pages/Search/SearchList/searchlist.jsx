import React, { Component } from 'react';
import ListItem from '../ListItem/listitem';
import { Link } from 'react-router-dom';
import LoadMore from '../../../components/LoadMore/loadmore';

export default class SearchList extends Component{
    constructor(props){
        super(props)
       
        this.state={
            list:[],//请求到的数据
            hasMore:false,//是否还有更多数据
            // flag:true,// 开关
            page:0,//页码数的数据
            oldSetState:null
            
        }
    }

    componentDidMount(){
        this.state.oldSetState = this.setState;
        // 调用函数  传递实参
        // 组件加载完成就请求第一页数据
        this.getdata();
    }

    componentDidUpdate(nextProps,nextState){
        if(nextProps.keyword === this.props.keyword){
            return;
        }else{
            // 有新的网络请求
            // 页码应该从第一页开始 page:0
            // list中原来的数据都要删除
            this.setState({
                list:[],
                page:0
            },()=>{
                this.getdata();
            })
        }
    }

    
    // 把请求数据fech封装成函数  接收两个参数keyword,page
    getdata(){  //形参不接收了 自己定义 keyword page 
        let keyword = this.props.keyword;

        // let keyword = this.props.match.params.keyword;
        fetch('http://localhost:4000/searchinfo?keyword='+keyword+'&page='+this.state.page)
        .then(res=>(res.json()))
        .then(data=>{
            // console.log(data);
            let newarr = this.state.list.concat(data.data);
            this.setState = this.state.oldSetState;
            this.setState({
                list:newarr,
                hasMore:data.hasMore,
                // 更新page页码
                page:this.state.page+1
            })
        })
    }

    render(){
        return(
            <div>
                <div>
                    {/* 遍历数据生成列表 */}
                    {this.state.list.map((ele,index)=>{
                        return  <Link key={index} to={`/details/${ele.id}`}><ListItem  item={ele} /></Link>
                    })}
                </div>
                {/* 加载更多数据  ref获取DOM元素*/}
                {this.state.hasMore 
                    ? 
                    // <div ref={this.more}>加载更多</div> 
                    // 添加ref
                    <LoadMore 
                        getdata={this.getdata.bind(this)}
                        // page={this.state.page}
                        // keyword={this.props.keyword}
                    />
                    :
                    <div>
                        <hr/>
                        <div>我是有底线的...</div>
                    </div>
                }
            </div>
            
        )
    }
}