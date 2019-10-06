import React from 'react'
import { connect } from 'react-redux'

class Navigation extends React.Component{
    constructor(props){
        super(props)
    }

    outOfTotal(){
        let keys = Object.keys(this.props.objective.tasks);
        let tasks = this.props.objective.tasks;
        let complete = 0;
        for(let i = 0; i < keys.length; i++){
            if(tasks[keys[i]].finished == true){
                complete++;
            }
        }
        return complete + "/" + keys.length
    }

    render(){
        return(
            <>
                <div className="task-navigation">
                    <div className="left">
                        <i className="far fa-caret-square-left"></i>
                    </div>
                    <div className="objective">
                        {this.props.objective.name + " " + this.outOfTotal()}
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