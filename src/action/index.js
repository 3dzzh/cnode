import axios from'axios'
import {GET_TOPICS,CHANGE_TAB} from'../Constants/actionTypes'
import { URI } from'../Constants/url'
export const getTopics = tab => dispatch =>{
    const uri = tab ? `${URI}/topics/?tab=${tab}` : `${URI}/topics`
    axios.get(uri).then(
        res=>{ console.log(res.data)
        dispatch({
            type: GET_TOPICS,
            topics: res.data.data
        }
        )
    }
    )
}
export const changeTab = tab=>{
    type:CHANGE_TAB,
    tab
}