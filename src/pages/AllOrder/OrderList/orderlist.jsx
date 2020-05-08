import React, { Component } from 'react';
import OrderItem from '../OrderItem/orderitem';

export default class OrderList extends Component{
   
    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.listdata.map((ele,index)=>{
                    return <OrderItem commentState={this.props.commentState} key={index}  item={ele} />
                })}
            </div>
        )
    }
}