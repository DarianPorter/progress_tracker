import React from 'react'
import { Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import SignIn from './shared/signin'
import Student from './student/student'
import Navbar from './shared/navbar'

let App = ()=>{
    return(
        <>
            <Switch>
                <AuthRoute exact path="/signin" component={SignIn} />
                <ProtectedRoute path="/" component={Navbar}/>
            </Switch>
            <Switch>
                <ProtectedRoute path="/users/:user_id" component={Student} />

            </Switch>

        </>
    )
}

export default App