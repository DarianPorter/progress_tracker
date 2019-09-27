import React from 'react'
import Root from './components/root'
import ReactDOM from 'react-dom'

document.addEventListener("DOMContentLoaded",()=>{
    let store = null;
    let root = document.getElementById("root")
    ReactDOM.render(<Root />, root)
})