import React, { Component } from 'react';
import './hotcity.less'

// 当前城市页面
export default class Hotcity extends Component{
    constructor(){
        super()
        this.state={
            hotcitylist:[{id:1,name:'北京'},{id:2,name:'上海'},{id:3,name:'杭州'},{id:4,name:'广州'},{id:5,name:'苏州'},{id:6,name:'深圳'},{id:7,name:'哈尔滨'},{id:8,name:'沈阳'},{id:9,name:'长春'},{id:10,name:'呼和浩特'},{id:11,name:'贵阳'},{id:12,name:'桂林'},{id:13,name:'西安'},{id:14,name:'石家庄'},{id:15,name:'太原'},{id:16,name:'成都'},{id:17,name:'长沙'},{id:18,name:'昆明'},{id:19,name:'青岛'},{id:20,name:'厦门'},{id:21,name:'拉萨'}]
        }
    }
    clickme(city){
        // console.log(city);

        // 把选中的城市存储到redux中SetCity上 redux进行处理传递给当前城市...
        // redux刷新页面就没有了
        this.props.SetCity(city)

        // 所以需要存储到本地
        localStorage.setItem('react-city',city)

        // 返回到上一层个页面
        window.history.back()

    }
    render(){
        console.log(this.props)
        return(
            <div className='hotcity'>
               <p className='hotcity-title'>热门城市</p>
               <ul className='hotcity-list'>
                   {this.state.hotcitylist.map((ele,index)=>{
                       return <li onClick={this.clickme.bind(this,ele.name)} key={ele.id}>{ele.name}</li>
                   })}
               </ul>
            </div>
        )
    }
}

