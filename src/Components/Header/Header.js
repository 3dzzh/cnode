import React, { Component } from 'react';
import axios from'axios'
import {URI} from'../../Constants/url'
import styled from'styled-components'
class Header extends Component {
    state = {
        val:'9948d556-1825-416f-934f-b3ce046403e3',
        user:null
    }
    handleChange = event =>{
        this.setState({
            val:event.target.value
        })
    }
    handleLogout = ()=>{
        
    }
    handleLogin = ()=>{
        const accesstoken = this.state.val
        axios.post(`${URI}/accesstoken`,{accesstoken}).then(res=>{
            console.log(res.data.data);
        })
        this.setState({

        })
    }
    render() {
        const {user} = this.state
        const Login = user ? (<div> <span>{user.loginname}</span> <button onClick={this.handleLogout}>登出</button> </div>) : (<div><input type="text"/><span>退出</span></div>)
        return (
            <Top>
                <div>
                <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt=""/>
                {Login}
                </div>
            </Top>
        );
    }
}
export default Header;
const Top = styled.div`
    background-color:#444;
    img{
        display:block;
        width:120px;
        height:28px;
    }
    input{
        margin-top:6px;
        margin-left:900px;
        border-radius:8px;
        border:0;
        outline:none;
    }
    span{
        margin-top:6px;
    }
    div{
        display:flex;
        align-items:center;
        padding:6px 0;
        width:1225px;
        margin: 0 auto;
    }
`