import { combineReducers } from "redux"
import usersReducer from "../state_reducers/users_reducer"
import taskReducer from "../state_reducers/tasks_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    tasks: taskReducer,
})

export default entitiesReducer