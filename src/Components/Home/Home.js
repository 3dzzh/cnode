import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Topics from '../Topics/Topics';
class Home extends Component {
    render() {
        const {topics,tab_change,} = this.props
        console.log(topics);
        return (
            <div>
               <Nav tab_change={tab_change}/> 
               <Topics topics={topics}/>
            </div>
        );
    }
}
export default Home;