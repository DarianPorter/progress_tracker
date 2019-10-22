import {
    FETCH_ALL_TASKS,
    ADMIN_EDIT_TASK,
    ADMIN_DELETE_TASK
} from "../../actions/task_actions"
import { merge } from 'lodash'

const taskReduder = (state = {}, action )=>{
    Object.freeze(state)
    let newState = merge({}, state)
    switch(action.type){
        case FETCH_ALL_TASKS:
            return merge({},state, action.tasks)

        case ADMIN_EDIT_TASK:
            return merge({}, state, { [action.task.id]: action.task })

        case ADMIN_DELETE_TASK:
            delete newState[action.task.id]
            return newState
            
        default:
            return state
    }
}

export default taskReduder