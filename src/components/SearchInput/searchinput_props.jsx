import React, { Component } from 'react';
import './searchinput.less'
import {withRouter} from 'react-router'

// 第一种方法使用props获取地址栏信息(SearchInput_props)，把地址栏中的信息放在input标签中

class SearchInput_props extends Component{
    constructor(props){
        super(props)
        this.state={
            svalue:''

        }
    }
    componentDidMount(){
        console.log(this.props)//里面有三个对象match  history  location
        console.log(this.props.match.params)//动态获取的地址
        this.setState({
            svalue:this.props.match.params.keyword
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.keyword !== this.props.match.params.keyword){
            this.setState({
                svalue:this.props.match.params.keyword
            })
        }else{
            console.log('props值相同不重新设置')
        }
    }
    toSeach(e){
        // console.log(e.keyCode) 按下键的键码值
        // console.log(e.target.value)//input中的值
        // 13是回车键 按了回车键才跳转到搜索页面  需要携带搜索的数据
        if(e.keyCode === 13){
            this.props.history.push('/search/'+e.target.value)
        }
    }
    changevalue(e){
        this.setState({
            svalue:e.target.value
        })

    }
    render(){
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
export default withRouter(SearchInput_props)