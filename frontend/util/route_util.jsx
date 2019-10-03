import React from "react"
import { connect } from "react-redux"
import {withRouter, Route, Redirect} from "react-router-dom"

const Auth = ({ component: Component, path: path, loggedIn: loggedIn, exact: exact })=>{
    return <Route path={path} exact={exact} render={(props) => {

        return (
            !loggedIn ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/" />
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

let msp = ()=>{
    return{

    }
}


export const AuthRoute = withRouter(connect(msp)(Auth))
export const ProtectedRoute = withRouter(connect(msp)(Protected))