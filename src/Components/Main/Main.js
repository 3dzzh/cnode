import React, { Component } from 'react';
import {Route} from'react-router-dom'
import HomeContainer from'../../HomeContainer/HomeContainer'
import Topics from'../Topics/Topics'
class Main extends Component {
    render() {
        return (
            <div> 
                <Route patch="/" component={HomeContainer}></Route>
                <Route patch="/Topics" component={Topics}></Route>
            </div>
        );
    }
}
export default Main;