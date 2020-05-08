import React, { Component } from 'react';
import Red_header from '../../components/header/red_header';
import Lunbo from '../../components/swiper/lunbo';
import Mytabs from '../../components/Mytabs/mytabs';
import Pinglun from './components/pinglun/pinglun';
import './detail.less'
import {connect} from 'react-redux'
// Action中的方法   setuser
import setuser from '../../store/action/userAction'

import p1 from '../../static/images/11.jpg'
import p2 from '../../static/images/44.jpg'
import p3 from '../../static/images/22.jpg'


class Details extends Component{
    constructor(){
        super()
        this.state={
            arr:[p1,p2,p3],
            result:{},
            flag:true,//true 没收藏   显示的字是收藏
            scdata:{}
        }
    }
    componentDidMount(){
        fetch('http://localhost:4000/detail',{
            method:'post',
            headers:{
                'content-type':'application/x-www-form-urlencoded'
            },
            body:'id='+this.props.match.params.id
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({//把获取到的数据存储到state中
                result:data
            },function(){
                console.log(this.state)
            })
        })

        // 没有收藏就收藏 页面渲染完成就判断  现在先存储到本地 真的项目需要发送到后台数据库
        let sc = localStorage.getItem('react-sc')
        if(sc){
            // 收藏过 存储了  // localStorage只能存储字符串
            sc=JSON.parse(sc)//转成对象
            this.setState({
                scdata:sc
            })
            // 判断当前这条详情是否收藏过
            if(sc[this.props.match.params.id]){
                // 收藏过了
                console.log('收藏过了')
                this.setState({
                    flag:false
                })
            }else{
                console.log('没有收藏');
            }
        }else{
            // 没有收藏
            console.log('没有收藏5555');
        }
    }
    // 收藏事件
    shoucang(){
        
        // 判断是否登录过
        if(this.props.user){
            // 如果收藏过点击就取消  没有收藏就收藏 页面渲染完成就判断
            console.log('收藏啦啦啦');
           
            if(this.state.flag){
                 // 收藏：存储本地  flag得值改为false
                //  this.state.scdata[this.props.match.params.id] = true
                let newscdata ={...this.state.scdata,[this.props.match.params.id]:true}

                 localStorage.setItem('react-sc',JSON.stringify(newscdata))
                 this.setState({
                     flag:false
                 })
            }else{
                // 取消收藏：从本地删除  flag改为 true
                // 删除对象中的数据  在存储本地
                delete this.state.scdata[this.props.match.params.id]
                localStorage.setItem('react-sc',JSON.stringify(this.state.scdata));
                this.setState({
                    flag:true
                })

            }


        }else{
            console.log('没登录过');
            // 没登录过 跳转到登录页面
            this.props.history.push('/login')
            
        }


    }
    // 购买事件
    buy(){
        console.log('gomai');
        
    }

    chengkey(key){//获取到key值 Mytabs页面会返回
        console.log(key)
    }
    render(){
        return(
            <div>
                {/* <p>详情id：{this.props.match.params.id}</p> */}
                <Red_header title='详情页'/>
                {/* 轮播图 */}
                <Lunbo arr={this.state.result.imgs}/>
                {/* tabs自己写的 */}
                <Mytabs defaultActiveKey='1' onChange={this.chengkey.bind(this)}>
                    <div tab='房屋信息' key='1'>
                        {/* 获取深层的数据会报错  加一个判断 */}
                        {this.state.result.title ? 
                        <div className='detail-box'>
                            <h3 className='hours-title'>{this.state.result.title}</h3>
                            <div className='hours-info'>
                                <div>
                                    {this.state.result.price}/月
                                    <p>租金</p> 
                                </div>
                                <div>
                                    {this.state.result.info.type}
                                    <p>房型</p> 
                                </div>
                                <div>
                                    {this.state.result.houseType}
                                    <p>面积</p> 
                                </div>
                            </div>

                            <div className='hours-desc'>
                                <div>楼层：{this.state.result.info.level}</div>
                                <div>装修：{this.state.result.info.style}</div>
                                <div>类型：{this.state.result.info.type}</div>
                                <div>朝向：{this.state.result.info.orientation}</div>
                                <div>年代：{this.state.result.info.years}</div>
                            </div>

                            <div className='btn'>
                                <button onClick={this.shoucang.bind(this)}>
                                    {this.state.flag ? '收藏' : '已收藏'}
                                </button>
                                <button onClick={this.buy.bind(this)}>购买</button>
                            </div>
                        </div>
                        : <div>数据正在请求中...</div>
                        }
                    </div>
                    <div tab='房屋评价' key='2'>
                        <Pinglun id={this.props.match.params.id} />
                    </div>
                   
                </Mytabs>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user:state.user
    }
}
function mapDispatchToProps(dispatch){
    return{
        setuser:(data)=>{dispatch(setuser(data))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Details)