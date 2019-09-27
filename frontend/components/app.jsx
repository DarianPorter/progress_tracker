import React from 'react'
import { Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import SignIn from './shared/signin'

let App = ()=>{
    return(
        <>
            <Switch>
                <AuthRoute exact path="/signin" component={SignIn} />
            </Switch>
            <Switch>

            </Switch>
        </>
    )
}

export default App