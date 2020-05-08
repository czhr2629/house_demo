import React, { Component } from 'react';
import './searchheader.less'
import {withRouter} from 'react-router'
import Searchinput from '../../../components/SearchInput/searchinput';

class SearchHeader extends Component{
    goback(){
        this.props.history.goBack()

    }
    render(){
        return(
            <div>
                <div className='searchheader'>
                    <i className='iconfont icon-fanhui' onClick={this.goback.bind(this)}></i>
                    <div className='searchinput'>
                        <Searchinput className='ZUJIAN'/>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(SearchHeader)