import { LOGIN_USER, LOGOUT_USER } from '../../actions/user_actions'

const sessionReducer = (state = {id: null}, action)=>{
    Object.freeze(state)
    switch(action.type){
        case LOGIN_USER:
            return { id: action.user.id }
        case LOGOUT_USER:
            return {id: null}
        default:
            return state
    }
}

export default sessionReducer