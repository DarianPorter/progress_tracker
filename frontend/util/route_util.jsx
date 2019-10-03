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
                // <Redirect to="/" />
            )
        )
    }} />
}

const Protected = ({ component: Component, path: path, loggedIn: loggedIn, exact: exact })=>{
    return < Route path={path} exact={exact} render={(props)=>{
        return (
            loggedIn ? (
                <Component {...props} />
            ) : (
                <Redirect to="/signin" />
            )
        )
    }}/>
}

let msp = (state)=>{
    return{
        loggedIn: Boolean(state.session.id),
        user_id: state.session.id
    }
}


export const AuthRoute = withRouter(connect(msp)(Auth))
export const ProtectedRoute = withRouter(connect(msp)(Protected))