import { 
    FETCH_ALL_OBJECTIVES,
    DELETE_OBJECTIVE,
    CREATE_OBJECTIVE
} from "../../actions/objective_actions"
import { merge } from 'lodash'

const objectiveReducer = (state={},action)=>{
    Object.freeze(state)
    let newState = merge({},state);
    switch(action.type){
        case FETCH_ALL_OBJECTIVES:
            return merge({},state,action.objectives)
        case DELETE_OBJECTIVE:
            return newState.filter((comment)=>{
                return action.comment.id != comment.id
            })
        case CREATE_OBJECTIVE:
            return merge({},state,action.objective)
        default:
            return state
    }

}

export default objectiveReducer