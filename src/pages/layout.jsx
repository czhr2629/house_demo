import React, { Component } from 'react';
import Mynav from '../components/MyNav/mynav';

export default class Layout extends Component{
    render(){
        return(
            <>
             <Mynav />
             
             <div style={{'paddingBottom':'1.2rem'}}>
                {this.props.children}
             </div>
            </>
        )
    }
}