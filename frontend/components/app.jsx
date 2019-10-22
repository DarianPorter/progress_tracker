import React from 'react'
import { connect } from 'react-redux'
import { Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute, AdminRoute } from '../util/route_util'
import SignIn from './shared/signin'
import Student from './student/student'
import Admin from './admin/admin'
import Navbar from './shared/navbar'
import Create from './admin/create'
import Aproval from './admin/aprove'
import Students from './admin/Students'

let App = (props)=>{
    return(
        <>
            <Switch>
                <AuthRoute exact path="/signin" component={SignIn} />
                <ProtectedRoute path="/" component={Navbar}/>
            </Switch>
            <Switch>
                {props.isAdmin ? (
                    <>
                        <AdminRoute path="/admin" component={Admin} />
                        <Switch>
                            <ProtectedRoute path="/admin/create" component={Create} />
                            <ProtectedRoute path="/admin/aprovals" component={Aproval} />
                            <ProtectedRoute path="/admin/students" component={Students} />
                        </ Switch>
                    </>
                ) : (
                    <ProtectedRoute path="/users/:user_id" component={Student}/>
                )}
            </Switch>

        </>
    )
}

let msp = (state) => {
    let users = state.entities.users;
    let user_id = state.session.id;
    let isAdmin = users[user_id] ? users[user_id].is_admin : false;
    return {
        loggedIn: Boolean(user_id),
        user_id: user_id,
        isAdmin: isAdmin
    }
}

export default connect(msp)(App)