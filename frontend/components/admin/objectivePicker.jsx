import React from 'react'
import { connect } from 'react-redux'
import { thunkChangeObjective, thunkPresentChangeObjective } from '../../actions/ui_actions'

class ObjectivePicker extends React.Component{
    constructor(props){
        super(props)
    }

    getObjectives(){
        let objectives = this.props.objectives;
        let objectiveCount = {}
        Object.keys(objectives).reverse().map((key)=>{
            let objective = objectives[key]
            if (objectiveCount[objective.name]){
                objectiveCount[objective.name] += 1
            }else{
                objectiveCount[objective.name] = 1
            }
        })
        return Object.keys(objectiveCount).map((name, i)=>{
            let count = objectiveCount[name]
            return(
                <div   
                    key={i}
                    className="objective-slice" 
                    onClick={()=>{
                        this.props.changeName(name);
                        this.props.setModal(false);
                    }}
                >
                    <p>Objective Name: <span className="highlight">{name}</span></p>
                    <p>Assigned Students: <span className="highlight">{count}</span></p>
                </div>
            )
        })
    }   

    render(){
        return(
            <div onClick={()=>{this.props.setModal(false)}} className="objective-picker" >
                <div className="objective-picker-panel">
                    <div className="objective-picker-panel-title">
                        <h1> Choose Objective </h1>
                    </div>
                    <div className="objective-picker-panel-content">
                        {this.getObjectives()}
                    </div>
                </div>
            </div>
        )
    }
}

const msp = (state)=>{
    return({
        objectives: state.entities.objectives 
    })
}
const mdp = (dispatch)=>{
    return ({
        changeName: (name) => { dispatch(thunkChangeObjective(name))},
        setModal: (val) => { dispatch(thunkPresentChangeObjective(val))}
    })
}
export default connect(msp,mdp)(ObjectivePicker)