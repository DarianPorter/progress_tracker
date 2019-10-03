import { LOGIN_ERRORS } from '../../actions/user_actions'

const errorsReducer = (state = {}, action)=>{
    Object.freeze(state)
    switch(action.type){
        case LOGIN_ERRORS:
            return action.errors.responseJSON
        default:
            return []
    }
}

export default errorsReducer