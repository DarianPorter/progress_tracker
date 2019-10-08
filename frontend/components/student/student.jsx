import React from "react"
import { connect } from "react-redux"
import Navigation from "./navigation"
import Tasks from "./tasks"
import TasksVisual from "./tasks_visual"


class StudentPage extends React.Component {
    constructor(props){
        super(props)
    }
    getStudentsObjectiveKeys(){
        return Object.keys(this.props.objectives)
    }
    render(){
        let keys = this.getStudentsObjectiveKeys()
        let key = keys[this.props.objectiveKey]
        let objectives = this.props.objectives;
        return(
            <div className="student">
                <Navigation objective={objectives[key]} objectives={objectives} />
                <div className="tasks_and_visuals">
                    <TasksVisual objective={objectives[key]} />
                    <Tasks tasks={objectives[key].tasks}/>
                </div>
            </div>
        )
    }
}   

const msp = (state) => {
    let user_id = state.session.id
    return ({
        objectives: state.entities.users[user_id].objectives,
        objectiveKey: state.ui.objectiveInd
    })
}

const mdp = (dispatch) => {
    return ({

    })
}

export default connect(msp)(StudentPage)