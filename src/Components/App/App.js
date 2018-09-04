import React, { Component } from 'react';
import {BrowserRouter as Router} from'react-router-dom'
import '../global.css'
import HomeContainer from '../../HomeContainer/HomeContainer';
import Header from '../Header/Header';
import {connect} from'react-redux'
import {getTopics} from'../../action'
class App extends Component {
  componentDidMount= ()=> {
   this.props.getTopics()
  }
  render() {
    const {topics} = this.props
    return (
      <Router>
      <div className="App">
      <Header />
      <HomeContainer  />
      </div>
      </Router>
    );
  }
}
export default connect(null,{getTopics})(App);
