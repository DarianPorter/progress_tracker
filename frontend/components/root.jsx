import React from "react"
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './app'

export default ({store})=>{
    return(
        <>
            <Provider store={store}>
                <HashRouter>
                    <App />
                </HashRouter>
            </Provider>
        </>
    )                        
}