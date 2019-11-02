import React from 'react'
import { connect } from 'react-redux'
import { changeObjectiveCurryed } from "../../actions/ui_actions"

class Navigation extends React.Component{
    constructor(props){
        super(props)
    }

    outOfTotal(){

        let tasks = this.props.objective.tasks ? (
            this.props.objective.tasks
        ):(
            {}
        );
        let keys = Object.keys(tasks);
        let complete = 0;
        for(let i = 0; i < keys.length; i++){
            if(tasks[keys[i]].finished == true){
                complete++;
            }
        }
        let style = {} 
        complete == keys.length ? (
            style.color = "#00c800"
        ) : (
            style.color = "#da4f3b"
        )
        return <span style={style}> {complete + "/" + keys.length} </span>
    }

    handleObjSwitch(direction){
        let currentInd = this.props.objectiveInd;
        let totalObjectives = Object.keys(this.props.objectives).length
        let nextInd = currentInd
        if(currentInd + direction <= -1){
            nextInd = totalObjectives - 1
        }else if (currentInd + direction >= totalObjectives){
            nextInd = 0
        }else {
            nextInd += direction
        }
        this.props.changeObjective(nextInd);
    }

    render(){
        return(
            <>
                <div className="task-navigation">
                    <div className="left">
                        <i 
                            className="far fa-caret-square-left"
                            onClick={()=>{ return this.handleObjSwitch(-1)}}
                        ></i>
                    </div>
                    <div className="objective">
                        <p> {this.props.objective.name + " "} {this.outOfTotal()}</p>
                    </div>
                    <div className="right">
                        <i 
                            className="far fa-caret-square-right"
                            onClick={() => { return this.handleObjSwitch(1) }}
                        ></i>
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
        objectiveInd: state.ui.objectiveInd
    });
}

const mdp = (dispatch)=>{
    return({
        changeObjective: (val) => { return dispatch(changeObjectiveCurryed(val))}
    })
}

export default connect(msp,mdp)(Navigation)