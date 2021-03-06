import { merge } from "lodash"
import { LOGIN_USER, FETCH_USERS, NEW_STUDENT } from '../../actions/user_actions'
import { USER_EDIT_TASK } from "../../actions/task_actions"
import { CREATE_OBJECTIVE } from "../../actions/objective_actions"
import { CREATE_TASK } from "../../actions/task_actions"

const userReducer = (state = {}, action)=>{
    Object.freeze(state)
    let newState = merge({}, state)
    let task;
    let user;

    switch(action.type){
        case LOGIN_USER:
            return merge({}, state, { [action.user.id]: action.user })

        case FETCH_USERS:
            return merge({},state, action.users)

        case NEW_STUDENT:
            return merge({},state, {[action.student.id]: action.student})

        case CREATE_OBJECTIVE:
            user = newState[action.objective.user_id]
            if(!user.objectives){
                user.objectives = {}
            }
            user.objectives[action.objective.id] = action.objective
            return merge({},state,{[user.id]: user})

        case CREATE_TASK:
            user = newState[action.task.user_id];
            if (!user.objectives[action.task.objective_id].tasks){
                user.objectives[action.task.objective_id].tasks = {}
            }
            let tasks = user.objectives[action.task.objective_id].tasks;
            tasks[action.task.id] = action.task;
            return merge({}, state, { [user.id]: user })

        case USER_EDIT_TASK:
            task = action.task;
            newState[task.user_id].objectives[task.objective_id].tasks[task.id] = action.task
            return newState

        default:
            return state
    }
}

export default userReducer