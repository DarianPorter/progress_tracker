import { combineReducers } from "redux"
import usersReducer from "../state_reducers/users_reducer"
import taskReducer from "../state_reducers/tasks_reducer"
import objectiveReducer from "../state_reducers/objective_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    tasks: taskReducer,
    objectives: objectiveReducer
})

export default entitiesReducer