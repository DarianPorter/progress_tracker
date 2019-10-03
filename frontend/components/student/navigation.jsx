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
                        {"<"}
                    </div>
                    <div className="Objective">
                        OBJECTIVE NAME HERE
                    </div>
                    <div className="right">
                        {">"}
                    </div>
                </div>
                <div className="seperator">

                </div>
            </>
        )
    }
}

const msp = ()=>{
    return({

    })
}

const mdp = ()=>{
    return({

    })
}

export default connect(msp,mdp)(Navigation)