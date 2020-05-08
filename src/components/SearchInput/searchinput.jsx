import React, { Component } from 'react';
import './searchinput.less'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import setkeyword from '../../store/action/searchAction';

// 第二种 使用redux来存储数据 数据在redux中取 进行设置input的值

class SearchInput extends Component{
    constructor(props){
        super(props)
        this.state={
            svalue:''
        }
    }
    componentDidMount(){
        // console.log(this.props.keyword)
        if(this.props.keyword){//有数据就设置到里面去
            this.setState({
                svalue:this.props.keyword
            })

        }
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevProps,this.proprs)
        // 判断match.params.keyword 里面的数据相等就不处理 不相等就设置到redux上
        if(prevProps.match.params.keyword !== this.props.match.params.keyword){
            this.props.setkeyword(this.props.match.params.keyword);

            this.setState({ //把数据存到setState
                svalue:this.props.match.params.keyword
            })
        }
    }
    toSeach(e){
        // console.log(e.keyCode) 按下键的键码值
        // console.log(e.target.value)//input中的值
        // 13是回车键  需要携带搜索的数据
        if(e.keyCode === 13){
            // 把搜索数据存储到redux
            this.props.setkeyword(e.target.value)
            // 存储到本地
            localStorage.setItem('react-keyword',e.target.value)
            // 跳转页面并携带数据
            this.props.history.push('/search/'+e.target.value)
        }
    }

    changevalue(e){
        this.setState({
            svalue:e.target.value
        })
    }
    
    render(){
        // console.log(this.props)
        return(
            <div>
                <div className='search'>
                    <i className='iconfont icon-sousuo'></i>
                    {/* 受控组件 */}
                    <input type="text" 
                    placeholder='搜索更多' 
                    onKeyUp={this.toSeach.bind(this)}
                    value={this.state.svalue}
                    onChange={this.changevalue.bind(this)}
                     />
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        keyword:state.keyword
    }
}
function mapDispatchToProps(dispatch){
    return{
        // setkeyword 是action中定义好的setkeyword函数
        setkeyword:(data)=>{dispatch(setkeyword(data))}

        /* setkeyword=function(data){//普通函数写法
            dispatch(setkeyword)(data);
        } */
    }
}
// 关联redux  connect
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SearchInput)) 
