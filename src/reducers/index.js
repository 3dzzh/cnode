import tab from'../reducers/tab'
import {topics} from'../reducers/topics'
const initistalState = [
        topics
]
const rootReducer = (state=initistalState,action)=>{
    switch(action.type){
        default:
        return state
    }
}
export default rootReducer