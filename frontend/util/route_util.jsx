import React from "react"
import { connect } from "react-redux"
import {withRouter, Route, Redirect} from "react-router-dom"

const Auth = ({ component: Component, path: path, loggedIn: loggedIn, exact: exact, user_id: user_id })=>{
    return <Route path={path} exact={exact} render={(props) => {

        return (
            !loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to={`users/${user_id}`} />
            )
        )
    }} />
}

const Protected = ({ component: Component, path: path, loggedIn: loggedIn, exact: exact })=>{
    return <Route path={path} exact={exact} render={(props)=>{
        return (
            loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to="/signin" />
            )
        )
    }}/>
}

const Admin = ({ component: Component, path: path, loggedIn: loggedIn, exact: exact, isAdmin: isAdmin })=>{
    return <Route path={path} exact={exact} render={(props)=>{
        return(
            isAdmin ? (
                <>
                    <Redirect to="/admin/cohorts" />
                    <Component {...props} />
                </>
            ) : (
                null
            )
        )
    }}/>
}

let msp = (state)=>{
    let users = state.entities.users;
    let user_id = state.session.id;
    let isAdmin = users[user_id] ? users[user_id].is_admin : false;
    return{
        loggedIn: Boolean(user_id),
        user_id: user_id,
        isAdmin: isAdmin
    }
}


export const AuthRoute = withRouter(connect(msp)(Auth))
export const ProtectedRoute = withRouter(connect(msp)(Protected))
export const AdminRoute = withRouter(connect(msp)(Admin))