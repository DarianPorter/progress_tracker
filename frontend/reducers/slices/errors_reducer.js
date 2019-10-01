import { LOGIN_ERRORS } from '../../actions/user_actions'

const errorsReducer = (state = {}, action)=>{
    Object.freeze(state)
    switch(action.type){
        case LOGIN_ERRORS:
            debugger
            return action.errors 
        default:
            return state
    }
}

export default errorsReducer