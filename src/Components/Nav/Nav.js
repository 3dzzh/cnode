import React, { Component } from 'react';
import styled from'styled-components'
import './nav.css'
class Nav extends Component {
    state ={
        text:'all'
    }
    handleClick = tab =>{
        this.setState({
            text: tab
        })
    }
    render() {
        const {text} = this.state
        return (
            <div> 
                <List> 
                    <li onClick={()=>{this.handleClick('all')}} className={text === 'all' ? 'active' : ''}>全部</li>
                    <li onClick={()=>{this.handleClick('goods')}} className={text === 'goods' ? 'active' : ''}>精华</li>
                    <li onClick={()=>{this.handleClick('share')}} className={text === 'share' ? 'active' : ''}>分享</li>
                    <li onClick={()=>{this.handleClick('ask')}} className={text === 'ask' ? 'active' : ''}>问答</li>
                    <li onClick={()=>{this.handleClick('job')}} className={text === 'job' ? 'active' : ''}>招聘</li>
                </List>
            </div> 
        ); 
    }
}
export default Nav;
const List = styled.ul`
    display:flex;
    list-style:none;
    li{
       margin-left:10px; 
       border-radius:5px;
       padding:0 10px;
    }
`

