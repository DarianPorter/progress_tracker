import { FETCH_ALL_OBJECTIVES } from "../../actions/objective_actions"
import { merge } from 'lodash'

const objectiveReducer = (state={},action)=>{
    Object.freeze(state)
    switch(action.type){
        case FETCH_ALL_OBJECTIVES:
            return merge({},state,action.objectives)
        default:
            return state
    }

}

export default objectiveReducer