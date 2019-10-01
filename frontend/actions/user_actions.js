import * as ApiUtil from '../util/user_util'

export const LOGIN_USER = "LOGIN_USER"
export const LOGIN_ERRORS = "LOGIN_ERRORS"

const login = (userInfo)=>{
    return ({
        type: LOGIN_USER,
        user: userInfo
    })
}

const loginErrors = (errors)=>{
    return ({
        type: LOGIN_ERRORS,
        errors: errors
    })
}

export const thunkLogin = (userInfo)=>{
    return (dispatch)=>{
        return ApiUtil.loginUser(userInfo).then(
            (payload)=>{
                dispatch(login(payload))
            },(response)=>{
                dispatch(loginErrors(response))
            }   
        )
    }
}