import React, { Component } from 'react';
import './pinglun.less'
import LoadMore from '../../../../components/LoadMore/loadmore';
// 星星图片
import img_star from '../../../../static/images/star.png'
import img_chat from '../../../../static/images/chat.png'
export default class Pinglun extends Component{
    constructor(){
        super()
        this.state={
            pldata:[],
            hasMore:false,
            page:0
        }
    }
    // 获取数据封装成函数
    getdata(){
        fetch('http://localhost:4000/pinglun?id='+this.props.id+'&page='+this.state.page)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.setState({
                // 拼接数据  加载更多
                pldata:this.state.pldata.concat(data.data), 
                hasMore:data.hasMore,
                page:this.state.page+1
            })
        })
    }
    componentDidMount(){
        // 页面渲染完成请求数据
        this.getdata()
    }
   
    render(){
        return(
            <div className='content'>
                <h3 className='user'>用户评论</h3>
                <ul>
                    {
                        this.state.pldata && this.state.pldata.length>0 
                        ?
                        this.state.pldata.map((ele,index)=>{
                            // 生成星星的个数数组 5个
                            // let stararr =new Array(5).fill(1)
                            let stararr =[1,1,1,1,1]
                            return <div className='bottom' key={index}>
                                <h3 className='title'>
                                    <i className='iconfont icon-wodedangxuan'></i>
                                    {ele.username}
                                </h3>

                                {/* <div>星星：{ele.star}</div> */}
                                <div className='star'>
                                    {stararr.map((item,idx)=>{
                                                    // ele.star是个数 大于index就渲染黄色星星
                                        return <img key={idx} src={ele.star>idx 
                                            ? img_star
                                            : img_chat
                                        }/>
                                    })}
                                </div>

                                <div className='pinglun'>{ele.comment}</div>
                            </div>
                        })
                        :<div>数据渲染中</div>
                    }
                </ul>
                {/* 判断hasMore是否为true 在进行加载更多 */}
                {this.state.hasMore 
                    ? 
                    <LoadMore getdata={this.getdata.bind(this)}/>
                    :
                    // <div>我是有底线的哦  亲</div>
                    ''
                }
            </div>
        )
    }
}