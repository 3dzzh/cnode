import React from 'react'
import {connect} from 'react-redux'
import Home from'../Components/Home/Home'
const HomeContainer = props=> <Home {...props} />
const mapStateToProps = state=>({
        topics:state.topics,
        tab:state.tab, 
}        
)
export default connect(mapStateToProps)(HomeContainer)