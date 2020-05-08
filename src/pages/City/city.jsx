import React, { Component } from 'react';
import Red_header from '../../components/header/red_header';
import Curcity from './components/curcity/curcity';
import Hotcity from './components/hotcity/hotcity';

import {connect} from 'react-redux'
import setcity from '../../store/action/cityAction';


class City extends Component{
    render(){
        // setcity上的数据
        console.log(this.props)
        return(
            <div>
             {/* 导航的红色 头部 */}
             <Red_header title='城市选择' />
             {/* 当前城市 */}
             <Curcity city={this.props.city} />
             {/* 热门城市 */}
             <Hotcity SetCity={this.props.SetCity} />
             
            </div>
        )
    }
}
// hotcity和curcity都需要使用   所以放在父组件上 进行传递
function mapStateToProps(state){
    return {
        city:state.city
    }
}
//mapDispatchToProps方法触发对应的action
function mapDispatchToProps(dispatch){
    return{
        SetCity: (data)=>dispatch(setcity(data))
    }

}

// 关联组件connect(mapStateToProps,mapDispathToProps)()
export default connect(mapStateToProps,mapDispatchToProps)(City)
