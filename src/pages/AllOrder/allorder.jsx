import React, { Component } from 'react';
import Red_header from '../../components/header/red_header';
import {connect} from 'react-redux'
import OrderList from './OrderList/orderlist';

 class AllOrder extends Component{
     constructor(){
         super()
         this.state={
             orderlist:[]

         }
     }
     componentDidMount(){
        fetch('http://localhost:4000/order/'+this.props.match.params.user)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.setState({
                orderlist:data
            })
        })
    }

    changecommentState(cs,id){
        console.log('xiugailelel' ,cs,id)
        for(let i=0;i<this.state.orderlist.length;i++){
            // 判断this.state.orderlist中的id 哪个和 传递过来id相同
            if(this.state.orderlist[i].id === id){
                // 修改为 cs---2  是已评论
                this.state.orderlist[i].commentState = cs;
                this.setState({
                    orderlist:this.state.orderlist
                })
            }
        }
        this.setState({

        })
    }
    render(){

        return(
            <div>
                {/* 引入组件是名称可自由定义  路径相对应就行 */}
                <Red_header title='全部订单'/>
                <div>
                    <p>
                        <i className='iconfont icon-wodedangxuan'></i>
                        {/* home页  路由携带了参数 */}
                        {this.props.match.params.user}
                    </p>
                    <p>
                        <i></i>
                        {/* 直接从redux中读取的 */}
                        {this.props.city}
                    </p>
                    {/* 订单列表 */}
                    {this.state.orderlist.length>0 
                        ?
                        <OrderList commentState={this.changecommentState.bind(this)} listdata={this.state.orderlist}/>
                        :
                        <div>数据正在请求中...</div>

                    }
                    
                </div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        city:state.city
    }
}

export default connect(mapStateToProps)(AllOrder)