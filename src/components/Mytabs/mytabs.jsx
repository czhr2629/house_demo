import React, { Component } from 'react';
import './mytabs.less'

export default class Mytabs extends Component{
    constructor(){
        super()
        this.state={
            cur:''
        }
    }
    componentDidMount(){//默认选中的
        let nowkey =this.props.defaultActiveKey
        this.setState({
            cur:nowkey ? nowkey-1 : 0//判断是否有默认值没有就0
        })
    }
    
    clickme(e){
        // keytab 是自定义属性  获取时需要使用getAttribute()
        console.log('chudale',e.target.getAttribute('keytab'))
        let nowkey = e.target.getAttribute('keytab')
        this.props.onChange(nowkey)//调用方法传递key值
        this.setState({
            cur:nowkey-1//传递key的是从1开始的
        })
    }
    render(){
        console.log(this.props)
        console.log(this.props.children)
        return(
            // 生成原生的tabs格式结构 
            <div>
                {/* tab切换标题 */}
                <div className='tabs-title'>
                    {React.Children.map(this.props.children,(ele,index)=>{
                        return <div 
                            className={this.state.cur === index ? 'active' :''}
                            onClick={this.clickme.bind(this)} 
                            key={index}
                            keytab={ele.key}
                        >
                            {ele.props.tab}
                        </div>
                    })}
                </div>
                {/* tab内容 */}
                <div className='tabs-content'>
                    {React.Children.map(this.props.children,(ele,index)=>{
                        return <div 
                            className={this.state.cur === index ? 'active hidden' :'hidden'}
                            key={index}
                        >
                            {ele.props.children}
                        </div>
                    })}
                </div>
            </div>
        )
    }
}