import React from 'react'
import {connect} from 'react-redux'

class Cohort extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>   
                cohort
            </div>
        )
    }
}

const msp = (state)=>{
    return({

    })
}

const mdp = (dispatch)=>{
    return({

    })
}

export default connect(msp,mdp)(Cohort)