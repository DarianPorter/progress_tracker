import React from 'react'
import { connect } from 'react-redux'

class Navigation extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
                <div className="task-navigation">
                    <div className="left">
                        <i className="far fa-caret-square-left"></i>
                    </div>
                    <div className="Objective">
                        {this.props.objective.name}
                    </div>
                    <div className="right">
                        <i className="far fa-caret-square-right"></i>
                    </div>
                </div>
                <div className="seperator">

                </div>
            </>
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

export default connect(msp,mdp)(Navigation)