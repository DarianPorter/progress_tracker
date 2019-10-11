import * as ApiUtil from '../util/user_util'

export const LOGIN_USER = "LOGIN_USER"
export const LOGIN_ERRORS = "LOGIN_ERRORS"
export const LOGOUT_USER = "LOGOUT_USER"
export const FETCH_USERS = "FETCH_USERS"

const fetchStudents =(users)=>{
    return({
        type: FETCH_USERS,
        users: users
    })
}

const login = (userInfo)=>{
    return ({
        type: LOGIN_USER,
        user: userInfo
    })
}

const logout = ()=>{
    return({
        type: LOGOUT_USER
    })
}

const loginErrors = (errors)=>{
    return ({
        type: LOGIN_ERRORS,
        errors: errors
    })
}

export const thunkFetchStudents = ()=>{
    return (dispatch)=>{
        return ApiUtil.fetchStudents().then(
            (payload)=>{
                dispatch(fetchStudents(payload))
            }
        )
    }
}

export const thunkLogin = (userInfo)=>{
    return (dispatch)=>{
        return ApiUtil.loginUser(userInfo).then(
            (payload)=>{
                return dispatch(login(payload))
            },(response)=>{
                return dispatch(loginErrors(response))
            }   
        )
    }
}

export const thunkLogout = ()=>{
    return (dispatch)=>{
        return ApiUtil.logoutUser().then(
            ()=>{
                return dispatch(logout())  
            }
        )
    }
}