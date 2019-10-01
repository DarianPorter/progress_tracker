import {combineReducers} from "redux"
import sessionReducer from "./slices/session_reducer"
import errorsReducer from "./slices/errors_reducer"
import entitiesReducer from "./slices/entities_reducer"

export default combineReducers({
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer
})