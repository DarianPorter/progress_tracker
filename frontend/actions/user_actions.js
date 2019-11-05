import * as ApiUtil from '../util/user_util'

export const LOGIN_USER = "LOGIN_USER"
export const LOGIN_ERRORS = "LOGIN_ERRORS"
export const LOGOUT_USER = "LOGOUT_USER"
export const FETCH_USERS = "FETCH_USERS"
export const NEW_STUDENT = "NEW_STUDENT"

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

const createStudent = (student)=>{
    return({
        type: NEW_STUDENT,
        student: student
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

export const thunkCreateStudent = (studentInfo)=>{
    return (dispatch)=>{
        return ApiUtil.createUser(studentInfo).then(
            (payload)=>{
                return dispatch(createStudent(payload))
            }   
        )
    }
}