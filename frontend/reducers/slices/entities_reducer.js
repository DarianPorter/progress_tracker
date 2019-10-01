import { combineReducers } from "redux"
import usersReducer from "../state_reducers/users_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer
})

export default entitiesReducer