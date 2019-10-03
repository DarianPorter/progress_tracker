import React from 'react'
import Root from './components/root'
import ReactDOM from 'react-dom'
import configureStore from './util/store'

document.addEventListener("DOMContentLoaded",()=>{
    let store = null;
    if(window.current_user){
        let preloadedState = {
             
        }
        store = configureStore(preloadedState)
    }else{
        store = configureStore()
    }
    window.store = store
    let root = document.getElementById("root")
    ReactDOM.render(<Root store={store}/>, root)
})