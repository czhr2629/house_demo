import React, { Component } from 'react';
import './orderitem.less'

export default class OrderItem extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false
        }
    }
    gotopl(){
        if(this.props.item.commentState === 0){
            this.setState({
                show:true //显示文本域
            })
        }
    }

    // 提交评论
    submit(){
        // 模拟提交成功了  定时器
        setTimeout(function(){
            alert('评论提交成功')                
        },1000)
        this.setState({
            show:false//隐藏 框
        })
        // 还需要把评论该为已评论  commentState为2时就已评论
        this.props.commentState(2,this.props.item.id)
    }

    quxiao(){
        // 取消评论
        this.setState({
            show:false//隐藏 框
        })

    }
    render(){
        console.log(this.props)
        // 对象解析
        let {item} = this.props
        return(
            <div className='orderitem'>
                <div className='order_img'> 
                    <img src={item.img} alt=""/>
                </div>

                <div className='order_info'>
                    <p>商户：{item.title}</p>
                    <p>类型：{item.houseType}</p>
                    <p>价格：￥{item.price}</p>
                </div>

                <div onClick={this.gotopl.bind(this)} className='btn_pl'>
                {/* commentState 作用是是否被评论过 0没评论 2已评论 */}
                    <button>
                        {item.commentState === 0 
                            ?
                            '评价'
                            : item.commentState === 2 
                                ? 
                                 '已评价'
                                :
                                 ''
                        }
                    </button>
                </div>

                {/* 评论区域De 框框 是否显示是依据commentState决定的*/}
                {this.state.show 
                 ?
                 <h6>
                    <textarea name="" id="" cols="20" rows="7"></textarea>
                    <p>
                        <button onClick={this.submit.bind(this)}>提交</button>
                        <button onClick={this.quxiao.bind(this)}>取消</button>
                    </p>
                </h6>
                :
                ''

                }
                

            </div>
        )
    }
}