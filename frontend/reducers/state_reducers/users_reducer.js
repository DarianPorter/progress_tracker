import { merge } from "lodash"
import { LOGIN_USER } from '../../actions/user_actions'

const userReducer = (state = {}, action)=>{
    Object.freeze(state)
    switch(action.type){
        case LOGIN_USER:
            return merge({}, state, { [action.user.id]: action.user })
        default :
            return state
    }
}

export default userReducer